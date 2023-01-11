import './ProjectItem.css';

import {Link} from "react-router-dom";

function ProjectItem(props) {




    return (
        <div id="card">
            <Link style={{textDecoration: "none",color: "white"}} to={`/projects/${props.id}`} >
            <img className='proj-img' loading="eager" src={require(`../projImg/${props.image}` )} alt="project demo"/>
            <h2>{props.name}</h2>

            </Link>
        </div>


    )

}

export default ProjectItem;