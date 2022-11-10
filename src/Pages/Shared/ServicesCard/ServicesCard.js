import React from 'react';

const ServicesCard = ({ services }) => {
    const { title, img, price, rating, descriptions } = services;
    const description = descriptions.slice(0, 5);
    return (
        <div className="card glass">
            <figure><img src={img} alt="wedding photograph" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div>
                    Description:
                    {
                        description.map(desc => <li>{desc}</li>)
                    }
                </div>
                <p>Rating: {rating}</p>
                <p className='text-lg'>Price: {price} TK</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;