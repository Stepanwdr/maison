'use client';
import { Button } from '@/components/ui/Button';

const ITEMS = [
  { caption: 'Grand Chambre · Люкс', main: true ,src:"/g-1.jpg"},
  { caption: 'Lobby & Reception',src:"/g-2.jpg" },
  { caption: 'SPA · Хаммам' ,src:"/g-3.jpg"},
  { caption: 'Chambre Deluxe' ,src:"/g-5.jpg"},
  { caption: 'Ресторан Dorée' ,src:"/g-4.jpg"},
];

export function GallerySection() {
  return (
    <section className="section" id="gallery">
      <div className="section-head reveal">
        <div>
          <div className="eyebrow">Атмосфера</div>
          <h2 className="sec-title"><em>Галерея</em></h2>
        </div>
        <Button variant="ghost" size="sm">→ Все фото</Button>
      </div>

      <div className="gallery-grid">
        {ITEMS.map((item, i) => (
          <div key={i} className={`gallery-item reveal${item.main ? ' gallery-item-main' : ''}`}>
            <img src={item.src} alt={item.caption} className="gallery-img" />
            <div className="gallery-overlay" />
            <div className="gallery-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
