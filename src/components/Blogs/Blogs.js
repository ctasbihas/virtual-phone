import React from 'react';
import FirstQue from '../Questions/FirstQue';
import SecondQue from '../Questions/SecondQue';
import ThirdQue from '../Questions/ThirdQue';

const Blogs = () => {
    return (
        <div className='mt-16 px-5 grid-cols-3 grid gap-2'>
            <FirstQue/>
            <SecondQue/>
            <ThirdQue/>
        </div>
    );
};

export default Blogs;