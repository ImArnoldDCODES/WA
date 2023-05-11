import React, { useState, useEffect } from 'react';
import '../App.scss'
import axios from 'axios';
import { BsArrowRight } from "react-icons/bs"


const SpaceImage = () => {
    const [video, setVideo] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const fetchVideos = async () => {
        try {
            const response = await axios.get(
                `https://api.pexels.com/videos/search?query=space&per_page=1&page=${page}`,
                {
                    headers: {
                        Authorization: 'idq0moI2xOVzp8BdscLXAQSpVlA6wnaKs0cQrOogCKgCT7YcI54R9mTA',
                    },
                }
            );
            setVideo(response.data.videos);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };


    return (
        <div className='content'>
            <div>
                <span>05 / 1904</span>
                <hr />
                <span>01 / 1989</span>
            </div>
            <div className='background'>
                {video.map((video) => (
                    <div key={video.id} className="video-parent">
                        <video id="video" autoPlay loop muted >
                            <source src={video.video_files[0].link} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
            <div className='image-text'>
                <h5>
                    Nationality: Space <br />
                    Field: Photography, Reality <br />
                    Pupils: Carlos Quizpez Asin
                </h5>
            </div>
            <div className='btn' onClick={handleNextPage}>
                <button>Next Adventure
                    <BsArrowRight size={40} />
                </button>
            </div>
        </div>
    );
};

export default SpaceImage;
