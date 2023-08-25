import { CardProps } from '@/types'

const Card = ({description, title, type}: CardProps) => {
  return (
    <div className='flex flex-col flex-1 border border-black p-4 rounded-xl gap-4 mt-2 mb-2'>
      <div className='text-black text-2xl font-bold'>{title}</div>
      <div className='text-black mt-2 mb-2 text-sm'>{description}</div>
      <div className='text-black'>{type}</div>
    </div>
  )
}

export default Card