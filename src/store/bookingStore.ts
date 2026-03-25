import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { BookingFormState, BookingResult, RoomCategory } from '@/types/hotel';
import { ROOM_PRICES } from '@/lib/data';

// ── helpers ──────────────────────────────────────────────
function getNightCount(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 1;
  const diff = Math.round(
    (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86_400_000
  );
  return diff > 0 ? diff : 1;
}

function defaultDate(offset: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split('T')[0];
}

// ── state shape ──────────────────────────────────────────
interface BookingState {
  form: BookingFormState;
  nights: number;
  subtotal: number;
  tax: number;
  total: number;
  isSubmitting: boolean;
  result: BookingResult | null;
  activeRoomModal: string | null;
  spaModalOpen: boolean;

  // actions
  setField: <K extends keyof BookingFormState>(key: K, value: BookingFormState[K]) => void;
  setRoomType: (type: RoomCategory) => void;
  submitBooking: () => Promise<void>;
  openRoomModal: (id: string) => void;
  closeRoomModal: () => void;
  openSpaModal: () => void;
  closeSpaModal: () => void;
  clearResult: () => void;
}

// ── store ─────────────────────────────────────────────────
export const useBookingStore = create<BookingState>()(
  devtools(
    (set, get) => {
      function recalc(form: BookingFormState) {
        const nights   = getNightCount(form.checkIn, form.checkOut);
        const subtotal = (ROOM_PRICES[form.roomType] ?? 8500) * nights;
        const tax      = Math.round(subtotal * 0.1);
        return { nights, subtotal, tax, total: subtotal + tax };
      }

      const initialForm: BookingFormState = {
        roomType:  'classic',
        checkIn:   defaultDate(1),
        checkOut:  defaultDate(2),
        guests:    '2',
        name:      '',
        email:     '',
        phone:     '',
      };

      return {
        form:            initialForm,
        ...recalc(initialForm),
        isSubmitting:    false,
        result:          null,
        activeRoomModal: null,
        spaModalOpen:    false,

        setField(key, value) {
          const form = { ...get().form, [key]: value };
          set({ form, ...recalc(form) });
        },

        setRoomType(type) {
          const form = { ...get().form, roomType: type };
          set({ form, ...recalc(form) });
        },

        async submitBooking() {
          const { form, total } = get();
          if (!form.name || !form.email) return;
          set({ isSubmitting: true });
          // Simulate API call
          await new Promise(r => setTimeout(r, 800));
          const ref = 'MD-' + Math.random().toString(36).substring(2, 8).toUpperCase();
          set({
            isSubmitting: false,
            result: {
              ref,
              room:     form.roomType,
              checkIn:  form.checkIn,
              checkOut: form.checkOut,
              guest:    form.name,
              total,
            },
          });
        },

        openRoomModal:  (id) => set({ activeRoomModal: id }),
        closeRoomModal: ()   => set({ activeRoomModal: null }),
        openSpaModal:   ()   => set({ spaModalOpen: true }),
        closeSpaModal:  ()   => set({ spaModalOpen: false }),
        clearResult:    ()   => set({ result: null }),
      };
    },
    { name: 'booking-store' }
  )
);
