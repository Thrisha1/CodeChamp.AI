import Hero from '@/components/Hero';
import RatingPage from '@/components/Label';
import Navbar from '../components/Navbar';
import Features from '@/components/Features';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className='bg-black'>

      <Navbar />
      <Hero />
      <RatingPage />
      <Features />
      <Footer />

    </div>
    
  );
}
