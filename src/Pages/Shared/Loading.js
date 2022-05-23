import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <progress class="progress w-56"></progress>
        </div>
    );
};

export default Loading;