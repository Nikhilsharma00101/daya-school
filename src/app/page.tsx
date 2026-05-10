import { Hero } from "@/components/sections/home/hero";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { ProgramsOverview } from "@/components/sections/home/programs-overview";
import { DailyActivities } from "@/components/sections/home/daily-activities";
import { GalleryPreview } from "@/components/sections/home/gallery-preview";
import { Testimonials } from "@/components/sections/home/testimonials";
import { AdmissionsCTA } from "@/components/sections/home/admissions-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsOverview />
      <DailyActivities />
      <GalleryPreview />
      <Testimonials />
      <AdmissionsCTA />
    </>
  );
}
