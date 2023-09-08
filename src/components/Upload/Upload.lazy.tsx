import React, { lazy, Suspense } from 'react';

const LazyUpload = lazy(() => import('./Upload'));

const Upload = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUpload {...props} />
  </Suspense>
);

export default Upload;
