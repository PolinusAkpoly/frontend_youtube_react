import React, { FC, Fragment, useEffect, useState } from 'react';
import './Lector.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import EntityManager from '../../api/entity';
import { Video } from '../../models/video';
import Loading from '../Loading/Loading';
import { convertDateToString } from '../../helpers/utils';

interface LectorProps {
   
 }

const Lector: FC<LectorProps> = () => {
 const [videos, setVideos] = useState<any>([])
   



    const em = new EntityManager()
    const [currentVideo, setCurrentVideo] = useState< Video | null >(null)
    // console.log(currentVideo);

    const { videoId } = useParams()

    useEffect(() => {
        const run = async () => {
            // const video = await em.getDataById('video', videoId!)
            // setCurrentVideo(video)
            // console.log({video});

            const data = await em.getDataById('video', videoId!)
            if (data.isSuccess) {
                setCurrentVideo(data.result)
                //  console.log({ video: data.result });
               
                 
            }


        }
        run()

      const asideVideo = async () => {
        const datas = await em.getDatas("video")
        const dataVideos = datas.results
        // console.log(dataVideos._id);

        setVideos(dataVideos)
        
        
      }
      asideVideo()




    }, [videoId])

   
  
  
    // useEffect(() => {
    //   const run = async () => {
    //     const entity = new EntityManager()
  
    //     const datas = await entity.getDatas("video")
    //     const dataVideos = datas.results
  
  
    //     setVideos(dataVideos)
    //     // setStop(true)
    //     //  console.log(videos);
    //   }
  
    //   run()
  
  
    // }, [videoId])
  






    return (
        <Fragment>
            <Header />

            <div className="container-reader-xl flex gap-5">

                <div className="reader sticky flex-3">
                    <div className="video-player  flex aic jcc">
                        {
                            currentVideo ?
                                <video controls width="100%"  src={currentVideo?.fileUrl}> </video>
                               
                                :
                                <Loading/>
                        }

                    </div>
                    <div className="reader-video-meta">
                        <div className="reader-title">
                            <h4 className="text-center">{ currentVideo?.name }</h4>
                        </div>
                        <div className="reader-meta flex flex-center-v wrap">
                            <div className="reader-video-meta flex bold gap-5">
                                <div className="reader-video-views">{ currentVideo?.views } Vues</div>
                                <div className="reader-video-publised-at">il y 2 jours</div>
                            </div>
                            <div className="reader-actions flex gap-20">
                                <div className="reader-action flex gap-5">
                                    <i className="fas fa-thumbs-up"></i>
                                    <div className="action-value">1K</div>
                                </div>
                                <div className="reader-action flex gap-5">
                                    <i className="fas fa-thumbs-down"></i>
                                    <div className="action-value">23</div>
                                </div>
                                <div className="reader-action flex gap-5">
                                    <i className="fas fa-share"></i>
                                    <div className="action-value">Partager</div>
                                </div>
                                <div className="reader-action flex gap-5">
                                    <i className="fas fa-cloud-download-alt"></i>
                                    <div className="action-value">Enregistrer</div>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="owner-video-meta flex flex-center-v">
                            <div className="owner-video-details flex flex-center-v gap-10">
                                <div className="profile-picture owner-picture">
                                    <img src="/images/profil/espero.jpg" alt="owner picture" />
                            
                                </div>
                                <div className="owner-fullname">
                                    <div className="fullname bold">{ currentVideo?.userId.full_name }</div>
                                    <div className="subscribe-details">523.6 Abonnés</div>
                                </div>
                            </div>
                            <div className="bt-subscribe">
                                <button className="subscribe">S'abonner</button>
                            </div>
                        </div>
                    </div>
        </div>


                <aside className="suggestion flex-1">
                
                {
        videos.length ?
        videos.map((video: Video, index: number) =>
        
            <div className="suggestion-item flex flex-center-v gap-5" key={index}>
            {
                video._id !== currentVideo?._id?
                <Link to={"/lector/" + video._id}>
                <div className="suggestion-poster">
                    {/* <img src="/images/poster/1.jpg" width="100%" alt="suggestion video" /> */}
                    {/* <video  src={video.fileUrl}></video> */}

                    {
                            video.poster_images ?

                            <img src={video.poster_images[2] } alt="Poster video" />
                            :
                            null
                    }
                    

                </div>
                <div className="suggestion-details flex-1">
                    <div className="suggestion-video-title">
                        <h4>{video.name}</h4>
                    </div>
                    <div className="owner-video-fullname">
                        {video.userId.full_name}
                    </div>
                    <div className="video-metat-data flex">
                        <div className="video-meta-views">
                            {video.views} Vue (s)
                        </div>
                        <div className="video-meta-time">
                            &nbsp;  {convertDateToString(video.created_at)}
                        </div>
                    </div>
                </div>

                </Link>
                :
                null
            }

               
            </div>
            
        )
        :
        <Loading/>
      }


                </aside>
            </div>
            <Footer />
        </Fragment>
    )
};

export default Lector;



