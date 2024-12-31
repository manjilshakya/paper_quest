import { Spin } from 'antd';
import React from 'react';
const contentStyle: React.CSSProperties = {
  padding: 50,
  background: '#FFF',
  borderRadius: 4,
};

const LoaderSuccessComponents = () => {
  const content = <div style={contentStyle} />;
  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <Spin tip='loading' size='large'>
        {content}
      </Spin>
    </div>
  );
};

export default LoaderSuccessComponents;
