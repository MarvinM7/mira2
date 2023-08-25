'use client';

import Image from 'next/image';

import { CustomButtonProps } from '@/types';

const CustomButton = ({ containerStyles, handleClick, title, type}: CustomButtonProps) => {
  return (
    <button
      className={containerStyles}
      disabled={false}
      onClick={handleClick}
      type={type}
    >
      <span className='flex-1'>
        {title}
      </span>
    </button>
  )
}

export default CustomButton