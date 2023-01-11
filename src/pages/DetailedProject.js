import './DetailedProject.css'
import {useParams} from "react-router-dom";

import {useSelector} from "react-redux";
import DetailDescription from "../components/DetailDescription";
import NoPageFound from "./NoPageFound";
import React from "react";


function DetailedProject(props) {

    const params = useParams();



    const projs=useSelector(state=> state.project.projects);


    let project= projs.filter(pro=> pro.id === params.projId)[0];

    if(!project || project.length === 0 ){
        return (
            <NoPageFound />
        )
    }




    return(
        <div id='detail-body-project'>
            <div className='top-detail'>
                <img className="detail-proj-img" alt="project Picture" loading="lazy" src={require(`../projImg/${project.image}` )} />
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

            <a style={{alignSelf: "center",textAlign: "center"}} target="_blank" href={project.gitLink}>
                <img style={{width: "50%"}}  src={require("../images/GitHub_Logo_White.png")} />
            </a>







        </div>
    )

}
export default DetailedProject;