import React from 'react'
import bedroom from '../assets/booklimages/images/hotel_bedroom.jpg'
import dining from '../assets/booklimages/images/hotel_dining room.jpg'
import weddingroom from '../assets/booklimages/images/hotel_bedroom.jpg'
import garden from '../assets/booklimages/images/hotel_gym.jpg'
import swimmingpool from '../assets/booklimages/images/hotel_swimming_pool.jpeg'

export default function Hotels() {
  return (
    <div className='flex gap-1 w-full px-[170px] pb-12'>
      <div><img className='rounded-xl h-full' src={bedroom} /></div>
      <div className='flex gap-1'>
        <div className='space-y-1'>
          <div className='w-[250px] rounded'><img className='rounded h-[205px] object-cover' src={dining} /></div>
          <div className='w-[250px] rounded'><img className='rounded h-[205px] object-cover' src={garden} /></div>
        </div>
        <div className='space-y-1'>
          <div className='w-[250px] rounded'><img className='rounded h-[205px] object-cover' src={swimmingpool} /></div>
          <div className='w-[250px] rounded'><img className='rounded h-[205px] object-cover' src={weddingroom} /></div>
        </div>
      </div>
    </div>
  )
}