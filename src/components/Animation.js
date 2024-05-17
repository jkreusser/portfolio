import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../logoAnimation.json';

const Animation = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Lottie animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: 250, width: 250 }} />
            <div className='text-xl flex flex-col mt-4 font-normal'>
                <span>I'm just fixing a few things.</span>
                <span>Be right back!</span>
            </div>
        </div>
    );
};

export default Animation;
