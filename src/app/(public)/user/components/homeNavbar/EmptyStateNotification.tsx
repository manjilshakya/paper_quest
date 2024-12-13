import Image from 'next/image';
import React from 'react';

const EmptyStateNotification = () => {
  return (
    <div className='notification_shadow bg-white rounded-lg border-t border-gray-200'>
      <div className='w-[400px] pt-[24px]'>
        <span className='text-xl text-[#101828] font-medium mx-6'>Notifications</span>
      </div>
      <div className='flex flex-col justify-center items-center py-[96px] px-[24px]'>
        <Image src='/images/Items.png' alt={'notification'} width={256} height={188} />
        <div className='text-center mt-[20px]'>
          <p className='text-[#182230] text-[20px] pb-2'>No Activities</p>
          <span className='text-[#757575]'>You haven’t received any notifications yet.</span>
        </div>
      </div>
    </div>
  );
};

export default EmptyStateNotification;
