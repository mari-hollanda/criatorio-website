import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Differentials } from "@/components/sections/Differentials";
import { BreedsCarousel } from "@/components/racas/BreedsCarousel";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Differentials />
        <BreedsCarousel />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
