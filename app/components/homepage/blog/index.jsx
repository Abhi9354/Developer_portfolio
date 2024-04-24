// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import blog1 from '../../../../public/image/Blog1.png';
import blog2 from '../../../../public/image/Blog2.png';
import blog3 from '../../../../public/image/Blog3.png';
import Image from 'next/image';


function Blog({ blogs }) {


  const blogList=[{
    image:{blog1},
    desc:"In the realm of app development, encountering roadblocks is part of the journey. However, these obstacles often lead to innovative solutions. In this blog post, we'll delve into the journey of creating a custom timepicker slider and a time range picker for mobile applications using React. From initial challenges to triumphant solutions, every step of the development process unveils valuable insights for aspiring developers.",
    title:"My Journey Creating a Timepicker Slider for React | Vlog",
    link:"https://medium.com/@abhi7ty4/my-journey-creating-a-timepicker-slider-for-react-vlog-f956c9535c5b"

  },
  {
    image:{blog2},
    desc:"In this exploration of vector operations in C++, we delve into the functionalities of clear(), shrink_to_fit(), and capacity(). Beginning with a real-world problem encountered while manipulating vector arrays, we discover how clear() reduces the vector's size to zero without removing elements, and how shrink_to_fit() adjusts capacity accordingly. Through experimentation and analysis, we unravel the mechanisms behind these operations and uncover their impact on vector accessibility and element deletion. Key insights include the distinction between reducing size and deleting elements, as well as the implications of pop_back() on vector size. This journey provides valuable insights into vector manipulation in C++, shedding light on fundamental operations crucial for efficient memory management and data handling.",
    title:"Behind the Scene builtin Functions of Vector like clear() & shrink_to_fit () in cpp perform something different",

    link:"https://medium.com/@abhi7ty4/javascript-the-var-and-let-keywords-story-in-declaring-a-non-constant-variables-8dcadd4602a3"

  },
  {
    image:{blog3},
    desc:"In JavaScript, both let and var can be used for declaring non-constant variables. While let is widely used in modern JavaScript and is the recommended keyword for declaring non-constant variables, it may be confusing why var even exists and how variables declared with var differ from those declared with let.",
    title:"JavaScript — The ‘var’ and ‘let’ keywords story in declaring a non-constant variables | Medium",

    link:"https://medium.com/@abhi7ty4/my-journey-creating-a-timepicker-slider-for-react-vlog-f956c9535c5b"

  }


]

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogList.map((blog,index)=><Link key={index} href={blog.link} target='_blank'><BlogCard key={index} src={index} image={blog.image} desc={blog.desc} title={blog.title} link={blog.link} /></Link>)}
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="https://medium.com/@abhi7ty4"
          target='_blank'
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;