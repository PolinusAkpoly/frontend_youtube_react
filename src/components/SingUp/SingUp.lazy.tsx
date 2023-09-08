import React, { lazy, Suspense } from 'react';

const LazySingUp = lazy(() => import('./SingUp'));

const SingUp = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySingUp {...props} />
  </Suspense>
);

export default SingUp;
