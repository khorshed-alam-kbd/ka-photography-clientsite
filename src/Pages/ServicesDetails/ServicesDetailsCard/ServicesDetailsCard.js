import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesDetailsCard = ({ services }) => {
    const { title, img, price, rating, descriptions } = services;
    return (
        <div>
            <div className="hero glass">
                <div className="hero-content flex-col gap-20 lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt='wedding photograph' className="max-w-sm rounded-lg shadow-2xl" />
                        </PhotoView>
                    </PhotoProvider>

                    <div>
                        <h1 className="text-5xl font-bold my-10">{title}</h1>
                        <p className="">
                            {
                                descriptions.map(description => <li>{description}</li>)
                            }
                        </p>
                        <p className='my-5'>Rating: {rating} ★</p>
                        <p className='text-lg'>Price: {price} TK</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesDetailsCard;