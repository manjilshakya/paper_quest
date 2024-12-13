import Image from 'next/image';
import NoDataImage from '../../../../../../public/images/NoData.svg';

const EmptySection = () => (
  <div className='mt-20 flex flex-col gap-20 items-center justify-center'>
    <Image src={NoDataImage} alt='no data' />
    <div className='flex flex-col gap-3 items-center justify-center'>
      <p className='font-semibold text-3xl	 text-[#182230]'>We’re sorry. No data found</p>
      <p className='font-normal text-xl text-[#182230]	'>Please try again.</p>
    </div>
  </div>
);

export default EmptySection;
