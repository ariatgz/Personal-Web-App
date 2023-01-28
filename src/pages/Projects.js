import './Projects.css'
import {Fragment,} from "react";
import ProjectItem from "../components/ProjectItem";
import {useSelector} from "react-redux";
import React from "react";







function Projects() {

    const projects=useSelector(state=> state.project.projects);


    const projes = projects.map(proj=>{
        return (
           <ProjectItem id={proj.id} name={proj.name} image={proj.image} />
        );
    })



    return(
        <Fragment>
            { window.innerWidth > 1023 ? <img alt='space' className='bg-image' src={require('../images/dark-code.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}
        <div className='layout-grid mt-1'>
            <div className='layout-wrapper' >

                {
                    projes
                }




            </div>
        </div>

        </Fragment>


    )


}

export default React.memo(Projects);