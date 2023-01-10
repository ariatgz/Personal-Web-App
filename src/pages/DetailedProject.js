import './DetailedProject.css'
import {useParams} from "react-router-dom";

import {useSelector} from "react-redux";
import DetailDescription from "../components/DetailDescription";


function DetailedProject(props) {

    const params = useParams();



    const projs=useSelector(state=> state.project.projects);


    let project= projs.filter(pro=> pro.id === params.projId)[0];




    return(
        <div id='detail-body-project'>
            <div className='top-detail'>
                <img className="detail-proj-img" src={require(`../projImg/${project.image}` )} />
                <div id="right-detail">
                <h4 id='proj-detail-name' >{project.name}</h4>
                <div id='used-technology'>
                    <p id='proj-detail-technologies'>Technologies used:</p>
                    <div id='technology-list'>
                        {project.technologies}
                    </div>

                </div>
                </div>

            </div>

            <DetailDescription content={project.description} />





        </div>
    )

}
export default DetailedProject;