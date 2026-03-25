'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { useBookingStore } from '@/store/bookingStore';
import { Button } from '@/components/ui/Button';

export function SuccessModal() {
  const result      = useBookingStore(s => s.result);
  const clearResult = useBookingStore(s => s.clearResult);

  if (!result) return null;

  return (
    <div className="success-overlay">
      <div className="success-card">
        <div className="success-ring">
          <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
            <path d="M5 14l7 7L23 7" stroke="#C4A26A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="success-title">Бронь <em>принята</em></h2>
        <p className="success-sub">Детали отправлены на вашу почту. Мы с нетерпением ждём вас в Маисон Доре.</p>
        <div className="success-ref">
          <div className="success-ref-label">Номер бронирования</div>
          <div className="success-ref-num">{result.ref}</div>
        </div>
        <div className="success-details">
          {[
            ['Номер',  result.room],
            ['Заезд',  result.checkIn],
            ['Выезд',  result.checkOut],
            ['Гость',  result.guest],
            ['Итого',  `₽${result.total.toLocaleString('ru')}`],
          ].map(([k,v]) => (
            <div key={k} className="success-detail-row">
              <span className="sdk">{k}</span>
              <span className={`sdv${k==='Итого'?' sdv-gold':''}`}>{v}</span>
            </div>
          ))}
        </div>
        <Button variant="fill" size="lg" onClick={clearResult}>✓ Закрыть</Button>
      </div>
    </div>
  );
}
