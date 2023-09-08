import React, { lazy, Suspense } from 'react';

const LazySingIn = lazy(() => import('./SingIn'));

const SingIn = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySingIn {...props} />
  </Suspense>
);

export default SingIn;
