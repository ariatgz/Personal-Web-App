import {Link} from "react-router-dom";
import './BookItem.css'

function BookItem(props) {


    return (
        <div id="bookout">
            <Link style={{textDecoration: "none",color: "white"}} to={`/myLibrary/${props.id}`} >
                <img className='book-img' src={props.image} alt="book cover"/>
                <h2>{props.title}</h2>

            </Link>
        </div>


    )

}

export default BookItem;