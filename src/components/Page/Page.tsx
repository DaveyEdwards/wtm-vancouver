import * as React from 'react';

interface Props {
  maxWidth?: number;
  disablePadding?: boolean;
}

const Page: React.SFC<Props> = ({ children, maxWidth, disablePadding }) => {
  return (
    <div style={{ padding: disablePadding ? 0 : 8 }}>
      <div
        style={{ width: '100%', maxWidth: maxWidth || 1280, margin: '0 auto' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
