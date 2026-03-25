'use client';
import * as Select from '@radix-ui/react-select';
import { useBookingStore } from '@/store/bookingStore';
import { Button } from '@/components/ui/Button';
import type { RoomCategory } from '@/types/hotel';

const ROOM_PILLS: { value: RoomCategory; label: string }[] = [
  { value: 'classic', label: 'Классик' },
  { value: 'deluxe',  label: 'Делюкс' },
  { value: 'suite',   label: 'Люкс' },
  { value: 'grand',   label: 'Гранд' },
];
const GUESTS = ['1 гость','2 гостя','3 гостя','4 гостя'];

export function BookingSection() {
  const { form, nights, subtotal, tax, total, isSubmitting, setField, setRoomType, submitBooking } = useBookingStore();
  const pricePerNight = Math.round(subtotal / nights);

  return (
    <section className="section" id="booking">
      <div className="bk-box reveal">
        <div className="bk-header">
          <h2 className="bk-title">Забронировать <em>номер</em></h2>
          <p className="bk-sub">Выберите тип и даты проживания</p>
        </div>
        <div className="bk-body">
          {/* pills */}
          <div className="bk-pills">
            {ROOM_PILLS.map(r => (
              <button key={r.value}
                className={`bk-pill${form.roomType === r.value ? ' active' : ''}`}
                onClick={() => setRoomType(r.value)}>
                {r.label}
              </button>
            ))}
          </div>

          {/* dates + guests */}
          <div className="bk-grid3">
            <Field label="Дата заезда">
              <input className="bk-input" type="date" value={form.checkIn}
                onChange={e => setField('checkIn', e.target.value)} />
            </Field>
            <Field label="Дата выезда">
              <input className="bk-input" type="date" value={form.checkOut}
                onChange={e => setField('checkOut', e.target.value)} />
            </Field>
            <Field label="Гости">
              <NmSelect
                value={form.guests}
                onValueChange={v => setField('guests', v)}
                items={GUESTS.map((g, i) => ({ value: String(i+1), label: g }))}
              />
            </Field>
          </div>

          {/* guest info */}
          <div className="bk-grid3">
            <Field label="Имя">
              <input className="bk-input" placeholder="Иван" value={form.name}
                onChange={e => setField('name', e.target.value)} />
            </Field>
            <Field label="Email">
              <input className="bk-input" type="email" placeholder="ivan@mail.ru" value={form.email}
                onChange={e => setField('email', e.target.value)} />
            </Field>
            <Field label="Телефон">
              <input className="bk-input" type="tel" placeholder="+374 00 000000" value={form.phone}
                onChange={e => setField('phone', e.target.value)} />
            </Field>
          </div>

          {/* price */}
          <div className="bk-price-box">
            <div>
              <div className="bk-price-label">Итого к оплате</div>
              <div className="bk-price-total">₽{total.toLocaleString('ru')}</div>
              <div className="bk-price-nights">
                {nights} {nights===1?'ночь':nights<5?'ночи':'ночей'}
              </div>
            </div>
            <div className="bk-price-rows">
              <div className="bk-price-row"><span>Тип</span><span>{ROOM_PILLS.find(r=>r.value===form.roomType)?.label}</span></div>
              <div className="bk-price-row"><span>Цена/ночь</span><span>₽{pricePerNight.toLocaleString('ru')}</span></div>
              <div className="bk-price-row"><span>Сбор 10%</span><span>₽{tax.toLocaleString('ru')}</span></div>
            </div>
          </div>

          <Button variant="fill" size="lg" onClick={() => submitBooking()} disabled={isSubmitting}>
            {isSubmitting ? 'Обработка...' : 'Подтвердить бронирование'}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="bk-field-label">{label}</div>
      <div className="bk-input-wrap">{children}</div>
    </div>
  );
}

function NmSelect({ value, onValueChange, items }: {
  value: string; onValueChange:(v:string)=>void; items:{value:string;label:string}[];
}) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="bk-input select-trigger">
        <Select.Value /><Select.Icon>▾</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select-content" position="popper" sideOffset={4}>
          <Select.Viewport>
            {items.map(it => (
              <Select.Item key={it.value} value={it.value} className="select-item">
                <Select.ItemText>{it.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
