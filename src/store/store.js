import {configureStore} from "@reduxjs/toolkit";
import {projectsSlice} from "./projects-slice";



const store=configureStore({
    reducer : {
        project: projectsSlice.reducer
    }
});
export default store;