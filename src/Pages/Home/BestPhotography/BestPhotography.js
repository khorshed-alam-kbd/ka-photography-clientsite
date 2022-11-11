import React from 'react';
import bpImg from '../../../Images/bp-img.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const BestPhotography = () => {

    return (
        <>
            {/* <p className='font-semibold text-center my-3'>PHOTOGRAPHY</p> */}
            <div className="hero my-5 glass">
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src={bpImg}>
                            <img src={bpImg} alt='' className="max-w-xl rounded-lg" />
                        </PhotoView>
                    </PhotoProvider>

                    <div>
                        <h1 className="text-4xl font-bold">KA PHOTOGRAPHY: The Best Wedding Photography Bangladesh</h1>
                        <p className="pt-6">A good wedding photographer’s job is to capture the sweet love story of a couple. And, KA PHOTOGRAPHY brings every moment of your wedding story to life. We are a trusted company when you are talking about professional photography in Bangladesh. What makes us stand out is our ability to capture the best moments, the tiniest of details, and the life of any wedding to make it a story worth telling. We have a team of highly enthusiastic and best wedding photographers who are versatile and capable of catering to different wedding photography styles. If you’re looking to hire wedding photographer in Bangladesh, then KA PHOTOGRAPHY could be the best solution for your wedding.</p>

                    </div>
                </div>
            </div>
        </>

    );
};

export default BestPhotography;