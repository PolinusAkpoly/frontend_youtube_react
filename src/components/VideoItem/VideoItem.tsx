import React, { FC } from 'react';
import './VideoItem.css';
import { Link } from 'react-router-dom';
import { Video } from '../../models/video';

import { convertDateToString } from '../../helpers/utils';

interface VideoProps {
    video: Video

}


const VideoItem: FC<VideoProps> = ({video}) => {
    

// if (video.poster_images) {
//     console.log(video.poster_images[2])
// }


    return <div className="library-items flex wrap gap-10 flex-center-h">
        <Link to={"/lector/"+video._id}>
            <div className="library-item">
                <div className="library-video-poster relative">
                    
                    {/* <video src={video.fileUrl}></video> */}
                    {
                            video.poster_images ?

                            <img src={video.poster_images[2] } alt="Poster video" />
                            :
                            null
                    }
                    
                    <i className="fab fa-youtube absolute center-element"></i>
                </div>
                <div className="library-video-meta flex flex-center-v gap-5">
                    <div className="profile-picture">
                        <img src="/images/profil/espero.jpg" alt="" />
                    </div>
                    <div className="video-meta">
                        <div className="video-title">{video.name}</div>
                        <div className="owner-video-fullname"> {video.userId.full_name} </div>
                        <div className="video-meta-data flex">
                            <div className="video-meta-views">
                                { video.views } Vues&nbsp;
                            </div>
                            <div className="video-meta-time">
                                &nbsp;{convertDateToString(video.created_at)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
}


export default VideoItem;
