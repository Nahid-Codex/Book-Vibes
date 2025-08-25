import React, { useEffect, useState } from 'react';
import { redirect, useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFormStroge } from '../../utility/addToDB';
import Book from '../Book/Book';


const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort,setSort] =useState("")
    const data = useLoaderData()
    console.log(data)
    useEffect(() => {
        const storeBookData = getFormStroge()
        const convertedBookData = storeBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedBookData.includes(book.bookId))
        setReadList(myReadList)
    },[])
    const handleSort = (type) =>{
        setSort(type);
        if(type === "pages"){
            const sortBYPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortBYPages);
            console.log(sortBYPages)
        }
        if(type === "ratings"){
            const sortedByRating = [...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortedByRating)
        }
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By: {sort?sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("ratings")}>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read {readList.length}</h2>
                    <div className=''>
                        {
                            readList.map(b => <Book singleBook={b} key={b.bookId}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;