import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";

// Lazy load components below the fold for better performance
const AboutUs = lazy(() => import("@/components/AboutUs"));
const HomeCoursesPreview = lazy(() => import("@/components/HomeCoursesPreview"));
const HomeTeachersPreview = lazy(() => import("@/components/HomeTeachersPreview"));
const HomeGalleryPreview = lazy(() => import("@/components/HomeGalleryPreview"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HomeCoursesPreview />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HomeTeachersPreview />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HomeGalleryPreview />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactForm />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </main>
    </PageTransition>
  );
};

export default Index;
