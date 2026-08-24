import React, { useState } from 'react';
import { X, Menu, ChevronDown, Globe, Search, ExternalLink } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import type { LanguageType } from '../../types/index';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../i18n/languages';
import { isMeilisearchEnabled } from '../../lib/meilisearch';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { t, i18n } = useTranslation('common');
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  const changeLanguage = (newLanguage: LanguageType) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="border-b">
        <div className="container mx-auto px-4 flex justify-end items-center h-10">
          <div className="flex items-center gap-4">
            <a
              href="https://bettergov.ph/join-us"
              className="text-xs font-semibold text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              🚀 Join Us
            </a>
            <a
              href="https://bettergov.ph/about"
              className="hidden sm:inline text-xs text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              About BetterGov
            </a>
            <a
              href="https://www.gov.ph"
              className="hidden sm:inline text-xs text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Official Gov.ph
            </a>
            <div className="hidden md:flex items-center gap-1">
              {(['en', 'fil', 'ilo'] as LanguageType[]).map(code => (
                <Button
                  key={code}
                  size="sm"
                  variant={i18n.language === code ? 'default' : 'outline'}
                  onClick={() => changeLanguage(code)}
                  className="h-7 px-2.5 text-xs"
                  aria-label={`Switch to ${LANGUAGES[code].nativeName}`}
                >
                  {code.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/aringay-seal.png"
              alt="Seal of the Municipality of Aringay, La Union"
              className="h-12 w-12 mr-3 object-contain bg-white rounded-full shadow-sm"
            />
            <div>
              <div className="font-bold leading-tight font-['Figtree']">
                {import.meta.env.VITE_GOVERNMENT_NAME}
              </div>
              <div className="text-xs text-muted-foreground">{t('site_description')}</div>
            </div>
          </Link>

          {/* Desktop navigation — NavigationMenu pattern per DESIGN.md */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {mainNavigation.map(item => {
              const active = location.pathname.startsWith(item.href);
              return (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center h-10 px-4 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                      active ? 'text-primary' : 'text-foreground',
                    )}
                  >
                    {t(`navbar.${item.label.replace(' ', '').toLowerCase()}`)}
                    {item.children && <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground" />}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div
                        className="w-56 rounded-md border bg-popover p-1 shadow-lg"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        {item.children.map(child => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-3 py-2 text-sm rounded-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {isMeilisearchEnabled && (
              <Button asChild variant="outline" size="sm">
                <Link to="/search">
                  <Search className="h-4 w-4" /> Search
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu — Sheet per DESIGN.md */}
      <Sheet open={isOpen}>
        <SheetContent>
          <SheetHeader>
            <div className="flex items-center justify-between">
              <SheetTitle className="flex items-center gap-2">
                <img src="/aringay-seal.png" alt="" className="h-8 w-8 object-contain rounded-full" />
                {import.meta.env.VITE_GOVERNMENT_NAME}
              </SheetTitle>
              <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </SheetHeader>
          <div className="mt-4 flex flex-col gap-1 overflow-y-auto">
            {mainNavigation.map(item => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex justify-between items-center px-3 py-2.5 rounded-md text-base font-medium hover:bg-accent transition-colors"
                    >
                      {t(`navbar.${item.label.toLowerCase()}`)}
                      <ChevronDown
                        className={cn('h-5 w-5 transition-transform', activeMenu === item.label && 'rotate-180')}
                      />
                    </button>
                    {activeMenu === item.label && (
                      <div className="pl-4 py-1 space-y-1">
                        {item.children.map(child => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-accent transition-colors"
                  >
                    {t(`navbar.${item.label.toLowerCase()}`)}
                  </Link>
                )}
              </div>
            ))}

            <Separator className="my-3" />

            <a
              href="https://bettergov.ph/about"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-md text-base font-medium hover:bg-accent transition-colors flex items-center justify-between"
            >
              About BetterGov <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
            {isMeilisearchEnabled && (
              <Link to="/search" onClick={closeMenu} className="px-3 py-2.5 rounded-md text-base font-medium hover:bg-accent transition-colors">
                Search
              </Link>
            )}
            <a
              href="https://www.facebook.com/lgu.aringay.official"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-md text-base font-medium hover:bg-accent transition-colors flex items-center justify-between"
            >
              Facebook <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>

            <Separator className="my-3" />

            <div className="px-3 py-2 flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              {(['en', 'fil', 'ilo'] as LanguageType[]).map(code => (
                <Button
                  key={code}
                  size="sm"
                  variant={i18n.language === code ? 'default' : 'outline'}
                  onClick={() => {
                    changeLanguage(code);
                    closeMenu();
                  }}
                  className="h-8 px-3"
                >
                  {code.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
