import React from 'react';

const ServicesDetailsCard = ({ services }) => {
    const { title, img, price, rating, descriptions } = services;
    return (
        <div>
            <div className="card glass">
                <figure><img src={img} alt="wedding photograph" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        Description:
                        {
                            descriptions.map(description => <li>{description}</li>)
                        }
                    </div>
                    <p>Rating: {rating}</p>
                    <p className='text-lg'>Price: {price} TK</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailsCard;