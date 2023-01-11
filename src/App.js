
import './App.css';
import React, {Suspense} from "react";
import Root from "./components/Root";
import { Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";
import NoPageFound from "./pages/NoPageFound";

import DetailedProject from "./pages/DetailedProject";

import BookDetails from "./pages/BookDetail/BookDetails";
import LoadingSpinner from "./components/spinner/LoadingSpinner";
import Projects from "./pages/Projects";



const Library = React.lazy(()=> import("./pages/Library"));



const Skills = React.lazy(()=> import("./pages/Skills"));

const About = React.lazy(()=> import("./pages/About"));


function App() {




  return (
    <Root>



        <Suspense fallback={<LoadingSpinner />}>
        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/skills' element={<Skills />} />
            <Route path='projects' element={<Projects />} />
            <Route path="projects/:projId" element={<DetailedProject />} />
            <Route path="myLibrary" element={<Library />} />
            <Route path="myLibrary/:bookId" element={<BookDetails />} />
            <Route path="about" element={<About />} />
            <Route path='*' element={<NoPageFound />} />

        </Routes>
        </Suspense>


    </Root>
  );
}

export default App;
