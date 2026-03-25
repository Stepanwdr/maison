'use client';
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useBookingStore } from '@/store/bookingStore';
import { useSpaServices } from '@/hooks/useHotelData';
import { Button } from '@/components/ui/Button';

export function SpaModal() {
  const open    = useBookingStore(s => s.spaModalOpen);
  const onClose = useBookingStore(s => s.closeSpaModal);
  const { data: services } = useSpaServices();

  return (
    <Dialog.Root open={open} onOpenChange={o => { if (!o) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content" aria-describedby="spa-desc">
          <div className="modal-img-wrap">
            <img src="/banner.jpg" alt="SPA" className="modal-img" />
          </div>
          <div className="modal-body">
            <div className="modal-header">
              <Dialog.Title className="modal-title">SPA &amp; <em>Wellness</em></Dialog.Title>
              <Dialog.Close asChild>
                <button className="modal-close" aria-label="Закрыть">×</button>
              </Dialog.Close>
            </div>
            <p id="spa-desc" className="modal-desc">
              600 м² тишины и восстановления. Хаммам, бассейн с минеральной водой, инфракрасная сауна и 7 видов массажа.
            </p>
            <ScrollArea.Root style={{ height:300, overflow:'hidden' }}>
              <ScrollArea.Viewport style={{ height:'100%', width:'100%' }}>
                <div className="spa-modal-grid">
                  {services?.map(s => {
                    return (
                        <div key={s.id} className="spa-modal-item">
                          <div className="smi-ico"></div>
                          <div className="smi-name">{s.name}</div>
                          <div className="smi-price">₽{s.price.toLocaleString('ru')}</div>
                          <div className="smi-dur">{s.duration} мин</div>
                        </div>
                      )
                  })}
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar orientation="vertical" style={{ width:4, padding:'2px 0' }}>
                <ScrollArea.Thumb style={{ background:'#C4A26A', borderRadius:2 }} />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
            <div className="modal-btns">
              <Button variant="fill" size="md"
                onClick={() => { onClose(); setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' }), 100); }}>
                ✦ Записаться
              </Button>
              <Button variant="ghost" size="md" onClick={onClose}>← Закрыть</Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
