import Home from "@/component/Home";
import { getData } from "./utils/getdata";
import Header from "@/component/Header";



export default async function Page() {
  const products = await getData({ contentType: 'product' });
return (
    <>
    
  <Home />
    </>
  );
}