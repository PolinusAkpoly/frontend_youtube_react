import React, { lazy, Suspense } from 'react';

const LazyLector = lazy(() => import('./Lector'));

const Lector = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLector {...props} />
  </Suspense>
);

export default Lector;
