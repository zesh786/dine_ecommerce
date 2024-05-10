import Hero from "@/components/Hero";
import PromotionsBanner from "@/components/PromotionsBanner";
import Products from "@/components/Products";
import FeatureBanner from "@/components/FeatureBanner";
import Newsletter from "@/components/Newsletter";
export default function Home() {
  return (
       <div>
        <Hero />
        <PromotionsBanner />
        <Products />
        <FeatureBanner />
        <Newsletter />
       </div>
  );
}