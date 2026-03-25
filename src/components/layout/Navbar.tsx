'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

const LINKS = [
  { href: '#booking',  label: 'Бронирование' },
  { href: '#rooms',    label: 'Номера' },
  { href: '#spa',      label: 'SPA' },
  { href: '#gallery',  label: 'Галерея' },
  { href: '#contacts', label: 'Контакты' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <span className="nav-logo">MA<em>I</em>SON HOTEL</span>
      <div className="nav-links">
        {LINKS.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
      </div>
      <div className="nav-links">
        <Button variant="ghost" size="sm"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
          Забронировать
        </Button>
        <Button variant="ghost" size="sm">
          Войти
        </Button>
      </div>
    </nav>
  );
}
