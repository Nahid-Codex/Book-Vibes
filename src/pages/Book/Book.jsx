// import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';


const Book = ({ singleBook }) => {
    // const data = use(bookPromise)
    // console.log(data)
    const { bookName,bookId, author, image, category, rating, tags, yearOfPublishing } = singleBook
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border rounded-3xl">
                <figure className='p-3 bg-gray-600 m-5 rounded-2xl mb-0 '>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-4'>
                        {
                            tags.map((tag,index) => <button key={index}>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>{author}</p>
                    <div className='border-t border-dashed border-gray-400'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaRegStarHalfStroke /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;