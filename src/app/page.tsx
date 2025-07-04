import { HeroSection } from '@/components/sections/hero';
import { Navbar } from '@/components/sections/navbar';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}
