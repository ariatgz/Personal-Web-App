import './Projects.css'
import {Fragment} from "react";
import ProjectItem from "../components/ProjectItem";
import {useSelector} from "react-redux";
import React from "react";
import {getWindowDimensions} from "./Welcome";


function Projects() {

    const projects=useSelector(state=> state.project.projects);





    return(
        <Fragment>
            { getWindowDimensions() > 1023 ? <img alt='space' className='bg-image' src={require('../images/dark-code.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}
        <div className='layout-grid'>
            <div className='layout-wrapper'>

                {
                    projects.map(proj=>{
                        return (
                            <ProjectItem key={proj.id} id={proj.id} name={proj.name} image={proj.image} />
                        );
                    })
                }




            </div>
        </div>

        </Fragment>


    )


}

export default React.memo(Projects);