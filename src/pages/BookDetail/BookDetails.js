import './BookDetail.css'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import NoPageFound from "../NoPageFound";
import React from "react";
import DetailDescription from "../../components/DetailDescription";

function BookDetails() {

    const params = useParams();



    const books = useSelector(state=>state.project.books);



    let list= books.filter(pro=> pro.id === params.bookId)[0];


    if(!list || list.length === 0 ){
        return (
            <NoPageFound />
        )
    }

    return(
        <div id='detail-body-book'>

                <img alt="book" className="detail-book-img" loading="lazy" src={list.image} />
            <h3 className="author">{list.title}</h3>
               <h3 className="author">{list.Author}</h3>





            <DetailDescription content={list.description} />









        </div>
    )




}

export default BookDetails;