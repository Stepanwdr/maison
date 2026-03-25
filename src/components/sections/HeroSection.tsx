'use client';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { useBookingStore } from '@/store/bookingStore';

export function HeroSection() {
  const openRoom = useBookingStore(s => s.openRoomModal);
  const imgRef   = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (imgRef.current)
          imgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.02)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const dx = (e.clientX / window.innerWidth  - 0.5) * 18;
      const dy = (e.clientY / window.innerHeight - 0.5) * 10;
      imgRef.current.style.transform =
        `translate(${dx}px,${window.scrollY * 0.35 + dy}px) scale(1.06)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero">
      {/* banner */}
      <div className="hero-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} src="/banner.png" alt="MAISON DORÉE lobby" className="hero-banner-img" />
        <div className="hero-banner-overlay" />
      </div>

      {/* left */}
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyeline" />
          Boutique Hotel · Ереван
        </div>
        <h1 className="hero-h1">
          Идеальный<br />отдых —<br /><em>начинается</em><br />здесь </h1>
        <p className="hero-sub">
          Маисон Доре — отель, где каждая деталь согрета вниманием. Бежевые залы, золотистый свет и безупречный сервис.
        </p>
        <div className="hero-btns">
          <Button variant="fill" size="md"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            ✦ Забронировать
          </Button>
          <Button variant="ghost" size="md"
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}>
            → Смотреть номера
          </Button>
        </div>
        <div className="hero-stats">
          {(['18+','4.9','12k'] as const).map((n, i) => (
            <div key={n} className="hero-stat">
              <div className="hero-stat-num">{n}</div>
              <div className="hero-stat-lbl">{['Номеров','Рейтинг','Гостей'][i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* right card */}
      <div className="hero-right">
        <div className="hero-card-wrap">
          <div className="hero-card" onClick={() => openRoom('suite')} data-hover>
            <div className="hero-card-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/banner.jpg" alt="Grand Chambre" className="hero-card-img" />
              <div className="hero-card-overlay" />
              <div className="hero-card-label">
                <span className="hero-card-badge">Рекомендуем</span>
                <div className="hero-card-name">Grand Chambre · Люкс</div>
              </div>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-meta">48 м² · King Size · Терраса · 5 этаж</div>
              <div className="hero-card-foot">
                <div>
                  <div className="hero-card-price">₽18 500</div>
                  <div className="hero-card-price-sub">/ ночь</div>
                </div>
                <Button variant="flat" size="sm"
                  onClick={e => { e.stopPropagation(); openRoom('suite'); }}>
                  → Подробнее
                </Button>
              </div>
            </div>
          </div>

          <div className="float-badge float-badge-tr">
            <div className="fb-label">Доступно</div>
            <div className="fb-val">6 номеров</div>
            <div className="fb-sub">Лучшая цена онлайн</div>
          </div>
          <div className="float-badge float-badge-bl">
            <div className="fb-label">Рейтинг</div>
            <div className="fb-val">★ 4.9 / 5.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}
