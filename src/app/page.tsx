'use client';
import { Navbar }            from '@/components/layout/Navbar';
import { HeroSection }       from '@/components/sections/HeroSection';
import { BookingSection }    from '@/components/sections/BookingSection';
import { RoomsSection }      from '@/components/sections/RoomsSection';
import { GallerySection }    from '@/components/sections/GallerySection';
import { SpaSection }        from '@/components/sections/SpaSection';
import { FeaturesSection }   from '@/components/sections/FeaturesSection';
import { TestimonialSection }from '@/components/sections/TestimonialSection';
import { FooterSection }     from '@/components/sections/FooterSection';
import { RoomModal }         from '@/components/modals/RoomModal';
import { SpaModal }          from '@/components/modals/SpaModal';
import { SuccessModal }      from '@/components/modals/SuccessModal';
import { useEffect } from 'react';

export default function Home() {
  /* scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BookingSection />
        <RoomsSection />
        <GallerySection />
        <SpaSection />
        <FeaturesSection />
        <TestimonialSection />
      </main>
      <FooterSection />
      <RoomModal />
      <SpaModal />
      <SuccessModal />
    </>
  );
}
