'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { useBookingStore } from '@/store/bookingStore';
import { useRoom } from '@/hooks/useHotelData';
import { Button } from '@/components/ui/Button';
import type { RoomCategory } from '@/types/hotel';

export function RoomModal() {
  const activeId    = useBookingStore(s => s.activeRoomModal) as RoomCategory | null;
  const closeModal  = useBookingStore(s => s.closeRoomModal);
  const setRoomType = useBookingStore(s => s.setRoomType);
  const { data: room, isLoading } = useRoom(activeId);

  const handleBook = () => {
    if (room) setRoomType(room.id);
    closeModal();
    setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <Dialog.Root open={!!activeId} onOpenChange={o => { if (!o) closeModal(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content" aria-describedby="room-desc">
          {isLoading || !room ? (
            <div style={{ padding:'3rem', textAlign:'center', color:'#8A8278' }}>Загрузка...</div>
          ) : (
            <>
              <div className="modal-img-wrap">
                <img src="/banner.jpg" alt={room.name} className="modal-img" />
              </div>
              <div className="modal-body">
                <div className="modal-header">
                  <Dialog.Title className="modal-title">
                    {room.name.split(' ').slice(0,-1).join(' ')} <em>{room.name.split(' ').at(-1)}</em>
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="modal-close" aria-label="Закрыть">×</button>
                  </Dialog.Close>
                </div>
                <p id="room-desc" className="modal-desc">{room.description}</p>
                <div className="modal-tags">
                  {room.amenities.map(a => <span key={a} className="modal-tag">{a}</span>)}
                </div>
                <div className="modal-price-row">
                  <div>
                    <div className="modal-price-label">Стоимость от</div>
                    <div className="modal-price-val">₽{room.pricePerNight.toLocaleString('ru')} / ночь</div>
                  </div>
                  <Button variant="fill" size="md" onClick={handleBook}>✦ Забронировать</Button>
                </div>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
