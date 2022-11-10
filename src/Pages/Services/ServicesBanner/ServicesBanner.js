import React from 'react';

import serBannerImg from '../../../Images/ser-banner-img.jpg'

const ServicesBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={serBannerImg} alt='' className="max-w-xl rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Wedding Photography Bangladesh</h1>
                    <p className="pt-6">They said a picture is worth a thousand words. It clearly and beautifully captures your emotions – the joy, the laughter, the tears, and you name it. We pride ourselves on offering the best shots to capture your joy and tell you your story in photos.</p>
                    <p className="py-6">We are the best wedding photographer in Bangladesh who offer value for your money as all our professional photographers offer their impeccable skills on your big day. Being the best BD wedding photography agency, we seek to bring out the pomp and color on your special day and make you feel really special!</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;