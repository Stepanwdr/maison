'use client';

import { Car, Flame, Flower, Utensils, Waves } from "lucide-react";

const FEATURES = [
  { ico:'Utensils', name:'Ресторан',       desc: 'Авторская кухня, избранные вина. Завтрак в стоимости проживания.' },
  { ico:'Waves',       name:'SPA & Wellness', desc: 'Хаммам, массаж, бассейн, индивидуальные программы.' },
  { ico:'Car',      name:'Трансфер',       desc: 'Встреча в аэропорту на Mercedes. Консьерж 24/7.' },
  { ico:'Flower',   name:'Сад & Терраса',  desc: 'Приватный сад, утренний чай, вечерний аперитив.' },
];

const icons :Record<string,React.ReactNode>= {
  Flower: <Flower/>,
  Flame: <Flame/>,
  Waves: <Waves/>,
  Utensils: <Utensils/>,
  Car: <Car/>
}

export function FeaturesSection() {
  return (
    <div className="features-strip">
      {FEATURES.map(f => (
        <div key={f.name} className="feat-item">
          <div className="feat-ico">{icons[f.ico]}</div>
          <div className="feat-name">{f.name}</div>
          <div className="feat-desc">{f.desc}</div>
        </div>
      ))}
    </div>
  );
}
