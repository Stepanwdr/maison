'use client';
import { useEffect, useRef } from 'react';

export function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos  = useRef({ mx:0, my:0, rx:0, ry:0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX; pos.current.my = e.clientY;
      if (dot.current) { dot.current.style.left=e.clientX+'px'; dot.current.style.top=e.clientY+'px'; }
    };
    window.addEventListener('mousemove', onMove);
    let raf: number;
    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12; p.ry += (p.my - p.ry) * 0.12;
      if (ring.current) { ring.current.style.left=Math.round(p.rx)+'px'; ring.current.style.top=Math.round(p.ry)+'px'; }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    const add = () => document.body.classList.add('hov');
    const rm  = () => document.body.classList.remove('hov');
    document.querySelectorAll('button,a,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', add);
      el.addEventListener('mouseleave', rm);
    });
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
