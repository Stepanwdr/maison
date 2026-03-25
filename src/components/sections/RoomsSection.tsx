'use client';
import { useRooms } from '@/hooks/useHotelData';
import { useBookingStore } from '@/store/bookingStore';
import { Button } from '@/components/ui/Button';

export function RoomsSection() {
  const { data: rooms, isLoading } = useRooms();
  const openRoom   = useBookingStore(s => s.openRoomModal);
  const setRoomType = useBookingStore(s => s.setRoomType);

  return (
    <section className="section" id="rooms">

      <div className="section-head reveal">
        <div>
          <div className="eyebrow">Размещение</div>
          <h2 className="sec-title">Наши <em>номера</em></h2>
        </div>
        <Button variant="ghost" size="sm">→ Все номера</Button>
      </div>
      <div className="rooms-grid">
        {isLoading
          ? [0,1,2].map(i => <SkeletonCard key={i} />)
          : rooms?.map(room => (
            <div key={room.id} className="room-card reveal" onClick={() => openRoom(room.id)}>
              <div className="room-img-wrap">
                <img src={room.src} alt={room.name} className="room-img" />
                <span className="room-badge">{room.badge}</span>
              </div>
              <div className="room-body">
                <div className="room-cat">{room.category}</div>
                <div className="room-name">{room.name}</div>
                <div className="room-meta">{room.size} · King Size · {room.floor}</div>
                <div className="room-tags">
                  {room.amenities.slice(0,4).map(a => <span key={a} className="room-tag">{a}</span>)}
                </div>
                <div className="room-foot">
                  <div>
                    <div className="room-price">₽{room.pricePerNight.toLocaleString('ru')}</div>
                    <div className="room-price-sub">/ ночь</div>
                  </div>
                  <Button variant="flat" size="sm"
                    onClick={e => {
                      e.stopPropagation();
                      setRoomType(room.id);
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                    Забронировать
                  </Button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="room-card">
      <div className="room-skel-img" />
      <div className="room-body">
        <div style={{ height:12, background:'#DDD5C4', borderRadius:4, marginBottom:8, width:'40%' }} />
        <div style={{ height:20, background:'#DDD5C4', borderRadius:4, marginBottom:8, width:'70%' }} />
        <div style={{ height:12, background:'#DDD5C4', borderRadius:4, width:'55%' }} />
      </div>
    </div>
  );
}
