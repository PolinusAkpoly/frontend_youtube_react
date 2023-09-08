import React, { FC, useEffect, useState } from 'react';
import './Container.css';
import VideoItem from '../VideoItem/VideoItem';
import EntityManager from '../../api/entity';
import { Video } from '../../models/video';
import Loading from '../Loading/Loading';


interface ContainerProps {
  
}
// Property 'video' is missing in type '{ Property 'video' is missing in type '{ key?: Key | null | undefined; children?: ReactNode; }' but required in type 'ContainerProps' | null | undefined; children?: ReactNode; }' but required in type 'ContainerProps'
const Container: FC<ContainerProps> = (props: ContainerProps) => {
  const [videos, setVideos] = useState<any>([])
  const [stop, setStop] = useState<any>(null)


  useEffect(() => {
    const run = async () => {
      const entity = new EntityManager()

      const datas = await entity.getDatas("video")
      const videos = datas.results


      setVideos(videos)
      setStop(true)
      //  console.log(videos);
    }

    run()


  }, [stop])



  //  console.log(videos);



  return (
    <div className='container library-items flex wrap gap-10 flex-center-h'>
      {
        videos.length ?
        videos.map((video: Video, index: number) => {
          return (
            <VideoItem video={video} key={index} />
          )

        }
        )
        :
        <Loading/>
      }
    </div>
 
  );


};

export default Container;
