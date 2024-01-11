/** @format */

import { Check } from "@/assets/svg";
import Image from "next/image";

const Items = ({ listItems }) => {
  return (
    <ul role='list' className='mb-8 space-y-4 text-left'>
      {listItems.map((item, index) => (
        <li key={index} className='flex items-center space-x-3'>
          <Image src={Check} alt='check' />
          <div>
            <span className='text-accent'>{item.text}</span>
            {item.bold && (
              <span className='font-bold text-accent'> {item.bold}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Items;
