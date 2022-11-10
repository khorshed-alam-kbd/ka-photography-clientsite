import React from 'react';

const Process = () => {
    return (
        <div className='text-center my-5 '>
            <div className='px-10 py-5'>
                <p className='font-semibold'>PROCESS</p>
                <p className='text-5xl font-semibold mb-5'>Photography Process</p>
                <p>Every couple does a lot of pre-planning for this special day. Respecting their emotion, we first discuss with all our clients,  <br /> know their requirements, and then start working on the project together as partners.</p>
            </div>
            <ul className="steps px-10 py-10 glass ">
                <li className="step step-primary"><span className='text-3xl font-bold text-orange-500'>Concept</span>
                    So, we start with planning the concept obviously keeping the client’s needs and interests in mind.</li>
                <li className="step step-primary"><span className='text-3xl font-bold text-orange-500'>Prepare</span>
                    Next, our entire team got down to the preparation of what we needed on that day.</li>
                <li className="step"><span className='text-3xl font-bold text-orange-500'>Retouch</span> Finally, we make sure that everything is in order and make some changes if needed.</li>
                <li className="step"><span className='text-3xl font-bold text-orange-500'>Finalize</span>Before the D-Day arrives, we arrange a pre-wedding discussion with the client and finalize the shoot.</li>
            </ul>
        </div>
    );
};

export default Process;