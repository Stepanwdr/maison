'use client';
import * as Tabs from '@radix-ui/react-tabs';
import { useSpaServices } from '@/hooks/useHotelData';
import { useBookingStore } from '@/store/bookingStore';
import { Button } from '@/components/ui/Button';
import {Droplets, Flame, Flower, Gem, Sparkles, Waves} from "lucide-react";

export function SpaSection() {
  const { data: services } = useSpaServices();
  const openSpa = useBookingStore(s => s.openSpaModal);

  return (
    <section className="section-dk" id="spa">
      <div className="spa-inner">
        <div className="reveal">
          <div className="live-tag"><span className="live-dot" />SPA &amp; Wellness</div>
          <div className="eyebrow">Восстановление</div>
          <h2 className="sec-title" style={{ marginBottom:'1.2rem' }}>
            Храм <em>покоя</em><br />и тепла
          </h2>
          <p className="spa-desc">
            600 м² тишины. Хаммам с мёдом, бассейн с минеральной водой, семь видов массажа и авторские программы восстановления.
          </p>

          <Tabs.Root defaultValue="massage" style={{ marginTop:'1.8rem' }}>
            <Tabs.List className="tabs-list">
              {[{v:'massage',l:'Массаж'},{v:'water',l:'Водные'},{v:'beauty',l:'Уходы'}].map(t=>(
                <Tabs.Trigger key={t.v} value={t.v} className="tab-trigger">{t.l}</Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content value="massage">
              <SpaCards items={services?.slice(0,2)} />
            </Tabs.Content>
            <Tabs.Content value="water">
              <SpaCards items={services?.slice(2,4)} />
            </Tabs.Content>
            <Tabs.Content value="beauty">
              <SpaCards items={services?.slice(4)} />
            </Tabs.Content>
          </Tabs.Root>

          <div className="spa-btns">
            <Button variant="fill" size="md" onClick={openSpa}>✦ Узнать больше о SPA</Button>
            <Button variant="ghost" size="md"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' })}>
              → Забронировать
            </Button>
          </div>
        </div>

        <div className="spa-visual reveal">
          <div className="spa-visual-img-wrap">
            <img src="/banner.jpg" alt="SPA" className="spa-visual-img" />
          </div>
          <div className="spa-visual-body">
            <div className="spa-visual-label">Часы работы</div>
            <div className="spa-visual-hours">09:00 — 22:00 · Ежедневно</div>
            <div className="spa-visual-note">Предварительная запись обязательна</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const icons :Record<string,React.ReactNode>= {
    Flower: <Flower/>,
    Flame: <Flame/>,
    Waves: <Waves/>,
    Sparkles: <Sparkles/>,
    Gem: <Gem/>,
    Droplets: <Droplets/>
}

function SpaCards({ items }: { items?: ReturnType<typeof useSpaServices>['data'] }) {
  return (
    <div className="spa-cards">
      {items?.map(s => (
        <div key={s.id} className="spa-card">
          <div className="spa-ico">{icons[s.iconId]}</div>
          <div className="spa-card-name">{s.name}</div>
          <div className="spa-card-desc">{s.description}</div>
          <div className="spa-card-foot">
            <span className="spa-price-val">₽{s.price.toLocaleString('ru')}</span>
            <span className="spa-dur">{s.duration} мин</span>
          </div>
        </div>
      ))}
    </div>
  );
}
