import React, { FC, useState } from 'react';
import './Upload.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Video } from '../../models/video';
import { getCurrentUserId } from '../../helpers/utils';
import EntityManager from '../../api/entity';
import { Navigate } from 'react-router-dom';


interface UploadProps { }

const Upload: FC<UploadProps> = () => {

    const entity = new EntityManager()
    const [fileSelected, setFileSelected] = useState<File[]>([])



    const handleSelectFile = () => {
        const input: any = document.querySelector('#fileInput')
        input?.click()
    }
    const handleChangeFiles = (event: any) => {
        const { files } = event.target


        if (files.length) {
            setFileSelected([...fileSelected, ...files])
            //   console.log([...fileSelected, ...files]);

        }

    }

    const handleSubmit = async () => {
        console.log(fileSelected);
        const userId = getCurrentUserId()
        console.log({ userId });
        if (userId) {
            
            await Promise.all(fileSelected.map(async (file: File, index) => {
                const video: Video = {
                    name: file.name,
                    userId: userId,
                    // poster_images : file.poster_images,
                    created_at: new Date()
                }
                const formData = new FormData()
                formData.append("video", JSON.stringify(video))
                formData.append("file", file)

                console.log(formData.get("video"));
                const data = await entity.createData("video", formData)


            }))

            setFileSelected([])
            



        }

    }

    if (!localStorage.getItem("authData")) {
        
        return   <Navigate  to = "/singin" />

    }
    // console.log(localStorage.getItem("authData"));
    
    
    return <div>
        <Header />
        <div className="upload-video-box">
            <div className="upload-video absolute center-element">
                <div className="video-files">
                    <p className="text-center">Liste des fichiers téléversés</p>
                    <ul className="file-list">
                        {
                            fileSelected.map((file: File, index: number) => {
                                return <li className="file-item" key={index}>
                                    <i className="fas fa-download"></i>
                                    {file.name}
                                    {/* <progress id="progress" max="100" value="30">30%</progress> */}
                                </li>
                            })
                        }

                    </ul>
                </div>

                <input
                    type="file"
                    accept="video/mp4"
                    id="fileInput"
                    onChange={handleChangeFiles}
                    multiple />
                <div className="bt-upload-box text-center">

                    {
                        fileSelected.length ?
                            <div className='flex gap-5'>
                                <button className="bt-upload flex-1" id="bt-upload" onClick={handleSelectFile}>
                                <i className="fas fa-download"></i>
                                Upload files
                            </button>
                                <button className="bt-upload flex-1" id="bt-save" onClick={handleSubmit}>
                                    <i className="fas fa-download"></i>
                                    Save files
                                </button>
                            </div>

                            :
                            <button className="bt-upload" id="bt-upload" onClick={handleSelectFile}>
                                <i className="fas fa-download"></i>
                                Upload files
                            </button>
                    }


                </div>

            </div>
        </div>
        <Footer />
    </div>




};

export default Upload;
