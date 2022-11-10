import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ services }) => {
    const { _id, title, img, price, rating, descriptions } = services;
    const description = descriptions.slice(0, 5);
    return (
        <div className="card glass">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="wedding photograph" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div>
                    Description:
                    {
                        description.map(desc => <li>{desc}</li>)
                    }
                </div>
                <p>Rating: {rating} ★</p>
                <p className='text-lg'>Price: {price} TK</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-outline">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;