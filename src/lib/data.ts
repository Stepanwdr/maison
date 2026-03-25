import type { Room, SpaService } from '@/types/hotel';

export const ROOMS: Room[] = [
  {
    id: 'classic',
    name: 'Chambre Classique',
    category: 'Классический',
    size: '28 м²',
    floor: '2 этаж',
    pricePerNight: 8500,
    badge: 'Стандарт',
    bgClass: 'rb-warm',
    src:"/room-1.jpg",
    description:
      'Уютный классический номер 28 м² с кроватью King Size, отделкой в тёплых бежевых тонах и ванной с дождевым душем. Деревянные панели ручной работы, шёлковые шторы, тихий вид на сад.',
    amenities: ['28 м²', 'King Size', 'Wi-Fi', 'Мини-бар', 'Ванна', 'Кофемашина', 'Климат', 'Сад'],
  },
  {
    id: 'deluxe',
    name: 'Chambre Deluxe',
    category: 'Делюкс',
    size: '38 м²',
    floor: 'Угловой',
    pricePerNight: 14200,
    badge: 'Популярный',
    bgClass: 'rb-cool',
    description:
      'Угловой номер 38 м² с панорамными окнами и видом на Ереван. Джакузи, отдельная гостиная зона с диваном, система умного дома. Завтрак включён.',
    amenities: ['38 м²', 'King Size', 'Джакузи', 'Гостиная', 'Вид на город', 'Smart Home', 'Wi-Fi', 'Завтрак'],
    src:"/room-2.jpg",
  },
  {
    id: 'suite',
    name: 'Grand Chambre',
    category: 'Гранд Сьют',
    size: '48 м²',
    floor: '5 этаж',
    pricePerNight: 18500,
    badge: 'Люкс',
    bgClass: 'rb-rich',
    description:
      'Просторный люкс 48 м² с открытой террасой и видом на горы. Приватное джакузи на террасе, камин, персональный консьерж.',
    amenities: ['48 м²', 'King Size', 'Терраса', 'Джакузи', 'Камин', 'Консьерж', 'Трансфер', 'Завтрак'],
    src:"/room-3.jpg",
  },
  {
    id: 'grand',
    name: 'Grand Chambre Dorée',
    category: 'Президентский',
    size: '65 м²',
    floor: '6 этаж — Пентхаус',
    pricePerNight: 28000,
    badge: 'Эксклюзив',
    bgClass: 'rb-gold',
    src:"/room-4.jpg",
    description:
      'Пентхаус 65 м² с двумя террасами, панорамным видом 360°, приватным бассейном и персональным дворецким. Только один номер в отеле.',
    amenities: ['65 м²', '2 терр.', 'Бассейн', 'Джакузи', 'Дворецкий', 'Rolls-Royce', 'Завтрак', '360°'],
  },
];

export const ROOM_PRICES: Record<string, number> = {
  classic: 8500,
  deluxe:  14200,
  suite:   18500,
  grand:   28000,
};

export const SPA_SERVICES: SpaService[] = [
  {
    id: 's1',
    name: 'Тайский массаж',
    description: 'Глубокая техника расслабления',
    price: 3500,
    duration: 90,
    iconId: 'Flower',
  },
  {
    id: 's2',
    iconId: 'Flame',
    name: 'Хаммам с мёдом',
    description: 'Традиционный турецкий ритуал',
    price: 2800,
    duration: 60
  },
  {
    id: 's3',
    iconId: 'Waves',
    name: 'Флоатинг',
    description: 'Сенсорная депривация в соли',
    price: 2200,
    duration: 60
  },
  {
    id: 's4',
    iconId: 'Sparkles',
    name: 'Фито-уход для лица',
    description: 'Органические маски и пилинги',
    price: 4500,
    duration: 120
  },
  {
    id: 's5',
    iconId: 'Gem',
    name: 'Массаж горячими камнями',
    description: 'Базальтовые камни + ароматы',
    price: 4200,
    duration: 90
  },
  {
    id: 's6',
    iconId: 'Droplets',
    name: 'Пилинг тела',
    description: 'Скрабирование + обёртывание',
    price: 2500,
    duration: 60
  }
]