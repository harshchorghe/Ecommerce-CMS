import Home from "@/component/Home";
import { getData } from "./utils/getdata";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import ProductGrid from "@/Product/ProductGrid";
import Promotion from "@/Product/Promotion";



export default async function Page() {
  const products = await getData({ contentType: 'product' });
return (
    <>
    
  <Home />
  <ProductGrid products={products} />
  <Promotion />
    </>
  );
}