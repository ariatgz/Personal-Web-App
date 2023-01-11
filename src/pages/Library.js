import {useSelector} from "react-redux";

import BookItem from "../components/BookItem";
import './Library.css'

import React, {Fragment} from "react";

function Library(){

   const books = useSelector(state=>state.project.books);


        const bookList =   books.map((book)=>{

            return <BookItem key={book.id} id={book.id} title={book.title} image={book.image} />
        })

    return (

        <Fragment>
            { window.innerWidth > 1023 ? <img alt='space' className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}




            <div id="book-layout">
                <h1 id="fave-book-text">Here are my favourite books of all time:</h1>

            <div id='book-grid'>



            {

              bookList


            }



            </div>
        </div>

        </Fragment>

    )

}

export default React.memo(Library);