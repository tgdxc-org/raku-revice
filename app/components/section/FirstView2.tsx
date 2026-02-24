'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import ChoseArea from '../ui/ChoseArea';
import { Data } from '@/app/page';

interface Props {
  appDomain: string | undefined;
  data: Data[]
}

const FirstView2 = ({ appDomain, data }:Props) => {
  return (
    <div className='relative'>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10'>
        <ChoseArea appDomain={appDomain} data={data}/>
      </div>
      <Swiper
      slidesPerView={1}
      loop={true}
      modules={[EffectFade, Autoplay]} effect='fade'
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
    >
      <SwiperSlide><img src='/images/slide1.jpg' className='h-[600px] object-cover w-full brightness-50'/></SwiperSlide>
      <SwiperSlide><img src='/images/slide2.jpg' className='h-[600px] object-cover w-full brightness-50'/></SwiperSlide>
      <SwiperSlide><img src='/images/slide3.jpg' className='h-[600px] object-cover w-full brightness-50'/></SwiperSlide>
      <SwiperSlide><img src='/images/slide4.jpg' className='h-[600px] object-cover w-full brightness-50'/></SwiperSlide>
      <SwiperSlide><img src='/images/slide5.jpg' className='h-[600px] object-cover w-full brightness-50'/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default FirstView2