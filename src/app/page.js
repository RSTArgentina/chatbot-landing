/** @format */

import {
  Contact,
  FAQ,
  Feature,
  Hero,
  Navbar,
  PriceTable,
  Testimonials,
} from "../app/Components";
import WhatsAppSticky from "./Components/WhatsAppSticky";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between scroll-smooth focus:scroll-auto overflow-clip'>
      <div className='w-full'>
        <Navbar />
        <Hero />
        <div className='sm:px-10 md:px-22 xl:px-44'>
          {/* <div className=''> */}
          <Feature />
          <hr id='price-table' className='my-10' />
          <PriceTable />
          <hr id='testimonials' className='my-10' />
          <Testimonials />
          <hr id='faq' className='my-10' />
          <FAQ />
          <Contact />
        </div>
        <WhatsAppSticky />
      </div>
    </main>
  );
}
