import React from 'react'
import bedroom from '../assets/booklimages/images/hotel_bedroom.jpg'
import dining from '../assets/booklimages/images/hotel_dining room.jpg'
import weddingroom from '../assets/booklimages/images/hotel_bedroom.jpg'
import garden from '../assets/booklimages/images/hotel_gym.jpg'
import swimmingpool from '../assets/booklimages/images/hotel_swimming_pool.jpeg'

export default function HotelDescription() {
  return (
    <div className='px-[260px] py-[20px]'>
        <div className='font-bold text-[24px] pb-3'>Hotel Description</div>
        <div className='flex gap-1 w-full pb-12'>
        <div className='w-full'><img className='rounded h-[185px] w-full ' src={bedroom} /></div>
        <div className='flex gap-1'>
          <div className='space-y-1'>
            <div className='w-full rounded'><img className='rounded h-[90px] w-full object-cover' src={dining} /></div>
            <div className='flex gap-1'>
                <div>
                <img className='rounded w-[300px] h-[90px] object-cover' src={garden} />
                </div>
                <div>
                <img className='rounded w-[300px] h-[90px] object-cover' src={garden} />
                </div>
            </div>
          </div>
          <div className='space-y-1'>
            <div className='w-[130px] rounded'><img className='rounded h-[90px] object-cover' src={swimmingpool} /></div>
            <div className='w-[130px] rounded'><img className='rounded h-[90px] object-cover' src={weddingroom} /></div>
          </div>
      </div>
    </div>
        
    </div>
  )
}
