import HeroSection from "@/components/HeroSection";
import FeatureCourses from '@/components/FeatureCourses';
import WhyChoseUs from '@/components/WhyChoseUs';
import MusicSchoolTestimonials from '@/components/TestimonialCards';
import UpcomingWebinars from '@/components/UpComingWebinars'
import Instructors from '@/components/Instructors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeatureCourses />
      <WhyChoseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
