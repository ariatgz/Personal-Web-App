import './ProjectItem.css';
import picture from '../projImg/AriaBank.png'
import {Link, NavLink} from "react-router-dom";

function ProjectItem(props) {




    return (
        <div id="card">
            <Link style={{textDecoration: "none",color: "white"}} to={`/projects/${props.id}`} >
            <img className='proj-img' src={require(`../projImg/${props.image}` )} alt="project demo"/>
            <h2>{props.name}</h2>

            </Link>
        </div>


    )

}

export default ProjectItem;