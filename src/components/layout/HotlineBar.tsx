import { useEffect, useRef, useCallback } from 'react';

const hotlines = [
  {
    label: 'PNP Aringay',
    number: '0926 616 8181',
    tel: '09266168181',
    icon: 'bi-shield-fill',
  },
  {
    label: 'BFP Aringay',
    number: '0917 800 1605',
    tel: '09178001605',
    icon: 'bi-fire',
  },
  {
    label: 'MDRRMO',
    number: '0917 800 1605',
    tel: '09178001605',
    icon: 'bi-exclamation-triangle-fill',
  },
  {
    label: 'RHU / MHO',
    number: '(072) 607 9531',
    tel: '0726079531',
    icon: 'bi-heart-fill',
  },
  {
    label: 'Municipal Hall',
    number: '(072) 607 1986',
    tel: '0726071986',
    icon: 'bi-building',
  },
  {
    label: 'PDRRMO La Union',
    number: '0998 561 1519',
    tel: '09985611519',
    icon: 'bi-truck',
  },
];

export default function HotlineBar() {
  const itemsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const isTabletOrBelow = useCallback(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1024px)').matches,
    []
  );

  useEffect(() => {
    const container = itemsRef.current;
    if (!container) return;

    function buildMarquee() {
      if (!isTabletOrBelow() || trackRef.current || !container) return;
      const track = document.createElement('div');
      track.className = 'hotline-items-track';
      track.setAttribute('aria-label', 'Emergency contacts scrolling');
      const items = Array.from(container.children);
      while (container.firstChild) track.appendChild(container.firstChild);
      items.forEach(item => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('tabindex', '-1');
        track.appendChild(clone);
      });
      container.appendChild(track);
      trackRef.current = track;
    }

    function destroyMarquee() {
      if (!trackRef.current || !container) return;
      const originals = Array.from(trackRef.current.children).slice(
        0,
        hotlines.length
      );
      while (container.firstChild) container.removeChild(container.firstChild);
      originals.forEach(item => container.appendChild(item));
      trackRef.current = null;
    }

    function handleResize() {
      if (isTabletOrBelow()) buildMarquee();
      else destroyMarquee();
    }

    handleResize();
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(handleResize, 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [isTabletOrBelow]);

  return (
    <div className="hotline-bar" role="region" aria-label="Emergency hotlines">
      <div className="container mx-auto px-4">
        <div className="hotline-inner">
          <div className="hotline-items" ref={itemsRef}>
            {hotlines.map(h => (
              <a
                key={`${h.label}-${h.tel}`}
                href={`tel:${h.tel}`}
                className="hotline-item"
              >
                <i className={`bi ${h.icon}`} aria-hidden="true" />
                <span>
                  {h.label}: {h.number}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
