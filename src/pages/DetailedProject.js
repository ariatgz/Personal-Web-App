import './DetailedProject.css'
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";


function DetailedProject(props) {

    const params = useParams();



    const projs=useSelector(state=> state.project.projects);


    let project= projs.filter(pro=> pro.id === params.projId)[0];




    return(
        <div>
            <p className='text-light'>{project.name}</p>
        </div>
    )

}
export default DetailedProject;