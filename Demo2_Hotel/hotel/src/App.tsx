import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { HeroSection } from '@/components/Scrollytelling/HeroSection';
import { About } from '@/components/Sections/About';
import { Destinations } from '@/components/Sections/Destinations';
import { Gallery } from '@/components/Sections/Gallery';
import { BookingForm } from '@/components/Booking/BookingForm';

function App() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* Hero: canvas-based scroll animation with 253 frames */}
      <HeroSection />

      {/* Content sections */}
      <About />
      <Destinations />
      <Gallery />
      <BookingForm />
      <Footer />
    </main>
  );
}

export default App;
