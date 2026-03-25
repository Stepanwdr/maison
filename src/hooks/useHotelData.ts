import { useQuery } from '@tanstack/react-query';
import { ROOMS, SPA_SERVICES } from '@/lib/data';
import type { RoomCategory } from '@/types/hotel';

// Simulated async fetchers (would be real API calls in production)
const fetchRooms = async () => {
  await new Promise(r => setTimeout(r, 20));
  return ROOMS;
};

const fetchSpaServices = async () => {
  await new Promise(r => setTimeout(r, 20));
  return SPA_SERVICES;
};

const fetchRoomById = async (id: RoomCategory) => {
  await new Promise(r => setTimeout(r, 20));
  return ROOMS.find(r => r.id === id) ?? null;
};

// ── Query hooks ───────────────────────────────────────────
export function useRooms() {
  return useQuery({
    queryKey: ['rooms'],
    queryFn:  fetchRooms,
    staleTime: Infinity,
  });
}

export function useSpaServices() {
  return useQuery({
    queryKey: ['spa-services'],
    queryFn:  fetchSpaServices,
    staleTime: Infinity,
  });
}

export function useRoom(id: RoomCategory | null) {
  return useQuery({
    queryKey: ['room', id],
    queryFn:  () => fetchRoomById(id!),
    enabled:  !!id,
    staleTime: Infinity,
  });
}
