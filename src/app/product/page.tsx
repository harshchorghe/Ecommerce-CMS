
import React from 'react'
import { getData } from '../utils/getdata';
import ProductGrid from '@/Product/ProductGrid';
import Promotion from '@/Product/Promotion';


const page = async () => {
  const products = await getData({ contentType: 'product' });

  return(
    <>
    <ProductGrid products={products} />
    <Promotion />
    </>
  )

}

export default page