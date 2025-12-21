import Image from "next/image";
import { HeroPrimary, HeroSecondary } from "@/components/sections/Hero";
import DailyMeals from "@/components/sections/DailyMeals";
import Highlight from "@/components/sections/Highlight";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroPrimary />
      <HeroSecondary />
      <DailyMeals />
      <Highlight />
      <Testimonials />
    </div>
  );
}


