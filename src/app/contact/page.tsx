
import { getData } from "../utils/getdata";

import Contact from "@/Contact/contact";
import React from "react";


const ContactPage = async () => {
  const products = await getData({ contentType: 'contact' });

  return (
    <>
        
       <Contact />
        
    </>
  );
};

export default ContactPage;