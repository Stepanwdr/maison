import { ReactNode } from "react";

export type RoomCategory = 'classic' | 'deluxe' | 'suite' | 'grand';

export interface Room {
  id: RoomCategory;
  name: string;
  category: string;
  size: string;
  floor: string;
  pricePerNight: number;
  description: string;
  amenities: string[];
  badge: string;
  bgClass: string;
  src: string;
}

export interface BookingFormState {
  roomType: RoomCategory;
  checkIn: string;
  checkOut: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
}
export interface SpaService {
  id: string;
  iconId: string
  name: string;
  description: string;
  price: number;
  duration: number;
}

export interface BookingResult {
  ref: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guest: string;
  total: number;
}
