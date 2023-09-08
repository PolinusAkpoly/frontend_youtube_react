import React, { lazy, Suspense } from 'react';
import { Video } from '../../models/video';

const LazyVideoItem = lazy(() => import('./VideoItem'));

interface VideoProps {
  video: Video
}

const VideoItem = (props: VideoProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyVideoItem {...props} />
  </Suspense>
);

export default VideoItem;
