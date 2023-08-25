import React from 'react'
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className='content min-h-[550px]'>
      <div className='flex-1 pt-36 sm:px-16 px-6'>
        <Image
          alt='Imagem'
          height={550}
          src={'https://www.redlands.edu/contentassets/fee35a9f20d94ee3a985e605156f38b4/gst-campus-1440x550.jpg'}
          width={1440}
        />       
      </div>
    </div>
  )
}

export default Carousel;