import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type AccordionContextValue = {
  openValue: string | null;
  toggle: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<{ value: string; open: boolean } | null>(null);

function Accordion({
  children,
  className,
  defaultValue = null,
}: {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string | null;
}) {
  const [openValue, setOpenValue] = React.useState<string | null>(defaultValue);
  const toggle = React.useCallback((value: string) => {
    setOpenValue(prev => (prev === value ? null : value));
  }, []);
  return (
    <AccordionContext.Provider value={{ openValue, toggle }}>
      <div className={cn('w-full', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
  const acc = React.useContext(AccordionContext);
  const open = acc?.openValue === value;
  return (
    <AccordionItemContext.Provider value={{ value, open }}>
      <div
        ref={ref}
        data-state={open ? 'open' : 'closed'}
        className={cn('border-b', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const item = React.useContext(AccordionItemContext);
  const acc = React.useContext(AccordionContext);
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => item && acc?.toggle(item.value)}
      data-state={item?.open ? 'open' : 'closed'}
      aria-expanded={item?.open ?? false}
      className={cn(
        'flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </button>
  );
});
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const item = React.useContext(AccordionItemContext);
  if (!item?.open) return null;
  return (
    <div
      ref={ref}
      data-state="open"
      className={cn('overflow-hidden pb-4 pr-8 text-sm leading-relaxed text-muted-foreground', className)}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
