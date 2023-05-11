import React, { useState, useEffect } from 'react';
import "../App.scss"
import axios from 'axios';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Tilt } from 'react-tilt'


export const GetImage = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);


    const defaultOptions = {
        reverse: true,
        max: 15,
        perspective: 1000,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.72,.99)",
    }


    useEffect(() => {
        fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const fetchImages = async () => {
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos/?client_id=XtRjO7cbRzkg6tgun5e9tdtflaNH-2djlsAsYm2C46I&page=${page}`
            );
            setImages(response.data);
            console.log(response.data, "images")
        } catch (error) {
            console.log(error);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    console.log(images, "images2")


    return (
        <div className='container2'>
            <div className='date'>
                <h5>1929 / 1940</h5>
                <h5>110X150.7CM</h5>
            </div>
            <div className='img-border'>
                <Tilt options={defaultOptions} style={{ height: "100%", width: "100%" }}>
                    {/* <img src={Bg2} alt="bg2" />\ */}

                    {images.map((image) => (
                        <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                    ))}

                </Tilt>
            </div>
            <div className='price'>
                <div className='objects'>
                    <h4>{images[9]?.alt_description || "NULL"}</h4>
                    <div>
                        <h5>
                            Date: {images[9]?.created_at.slice(0, 4)}<br />
                            Color: {images[9]?.color}<br />
                            Genre: Symbolic Painting<br />
                            Media: Random
                        </h5>
                    </div>
                </div>
                <hr />
                <div className='total'>
                    <h6>Price</h6>
                    <h3>$18.680</h3>
                </div>
                <div className='btns'>
                    <button onClick={handlePreviousPage} disabled={page === 1}>
                        <IoIosArrowBack size={32} />
                    </button>
                    <span>{page}</span>
                    <button onClick={handleNextPage}>
                        <IoIosArrowForward size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};
