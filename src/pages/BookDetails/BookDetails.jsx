import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { storeData } from '../../utility/addToDB';

// sweet Aleart
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// for Toast
import { ToastContainer, toast } from 'react-toastify';




const BookDetails = () => {
    const { id } = useParams()
    // console.log(typeof id)
    const bookId = parseInt(id)
    const books = useLoaderData()
    // console.log(books)
    const singleBook = books.find(book => book.bookId === bookId)
    // console.log(singleBook)
    const { bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook;
    const handleAddToStorage = (id) => {
        storeData(id)

        // Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Something went wrong!",
        //     footer: '<a href="#">Why do I have this issue?</a>'
        // });

        toast("Duplicad Not added");
    }
    return (
        <div className=' flex  mx-auto my-24 gap-12 items-center'>
            {/* <div className='bg-[#a2a2a2] w-1/2 rounded-3xl'>
                <img className='p-20 w-5/6' src={image} alt="" />
            </div> */}
            <div className="bg-[#a2a2a2] w-1/2 rounded-3xl flex justify-center items-center">
                <img className="w-5/6 p-25 " src={image} alt="" />
            </div>
            <ToastContainer />
            <div className='w-1/2'>
                <h1 className='text-xl font-bold'>{bookName}</h1>
                <h3>By : {author}</h3>
                <div className="divider"></div>
                <h3 className='text-xl font-semibold'>{category}</h3>
                <div className="divider"></div>
                <p><span className='font-bold'>Review:</span> {review}</p>
                <div className='flex gap-4 items-center mt-2'><span className='font-bold'>Tag:</span> {tags.map((tag, index) => <button key={index} className="btn rounded-full  btn-soft btn-success">#{tag}</button>)}</div>
                <div className="divider"></div>
                <div className="grid grid-cols-2 gap-y-2 ">
                    <span className="font-medium">Number of Pages:</span>
                    <span className="font-semibold">{totalPages}</span>

                    <span className="font-medium">Publisher:</span>
                    <span className="font-semibold">{publisher}</span>

                    <span className="font-medium">Year of Publishing:</span>
                    <span className="font-semibold">{yearOfPublishing}</span>

                    <span className="font-medium">Rating:</span>
                    <span className="font-semibold">{rating}</span>
                </div>
                <div className='flex gap-6 mt-8'>
                    <button onClick={() => handleAddToStorage(id)} className="btn btn-info p-6 text-xl">Mark As Read</button>
                    <button className="btn btn-success p-6 text-xl">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;