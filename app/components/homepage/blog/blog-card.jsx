// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';

import blog1 from '../../../../public/image/Blog1.png';
import blog2 from '../../../../public/image/Blog2.png';
import blog3 from '../../../../public/image/Blog3.png';


function BlogCard({src,image,desc,title,link}) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] h-full transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={src==0?blog1:src==1?blog2:blog3}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
       
        <Link target='_blank' href={link}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
           {title}
          </p>
        </Link>
        
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
        {desc}
        </p>
        <div className="">
          <Link target='_blank' href={link}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;