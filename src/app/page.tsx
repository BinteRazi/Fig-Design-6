import React from 'react';
import Header from './components/header';

const Page = () => {
  return (
    <div>
      <Header />
      <div className='flex items-center justify-center mx-auto my-12 max-w-5xl'>
        <div className='w-1/2 flex flex-col justify-center items-start m-12'>
          <h1 className='text-[40px] font-bold text-left tracking-wide text-[#000000]'>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className='w-[500px] mt-4 text-[20px] text-[#787054] leading-relaxed'>
            An example of intricate workmanship and detail, elegant necklaces and long
             and short chains form a part of our desirable collection.
          </p>
          <button className='mt-6 w-[188px] h-[38px] bg-[#A29875] text-white font-medium 
          text-[12px] uppercase rounded-xl'>
            Explore Collection
          </button>

        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img src='./image/image.svg' alt='Hero image' className='w-[442px] h-[611px] object-cover
           rounded-[150px_0px_150px_0px] border border-[#A29875]' />
        </div>
      </div>
    </div>
  );
};

export default Page;
