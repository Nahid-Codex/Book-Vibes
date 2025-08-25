import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className=" bg-base-200 py-16 rounded-3xl">
            <div className="flex gap-5 items-center justify-around flex-col lg:flex-row-reverse">
                <div>
                    <img
                    src={bookimage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                </div>
                <div className=''>
                    <h1 className="text-5xl font-bold mb-5">Books to freshen up<br></br> your bookshelf</h1>
                    
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;