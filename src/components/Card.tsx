import Image from 'next/image'

const Card = ({ data }: any) => {
  const { title, description, icon } = data

  return (
    <div className='bg-[#F4F4F4] p-5 rounded-[20px]'>
      <div className="">
        <div className="bg-[#fff] lg:w-[80px] lg:h-[80px] w-[65px] h-[65px] rounded-full flex justify-center items-center shadow-md mb-4">
          <Image src={icon} alt='icon' className='object-contain lg:h-auto h-10'  />
        </div>
        <h3 className='text-xl font-semibold lg:mb-3 mb-2'>{title}</h3>
        <p className='lg:text-paragraf text-paragraf-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Card