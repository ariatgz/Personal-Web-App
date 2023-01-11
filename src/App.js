
import './App.css';
import React from "react";
import Root from "./components/Root";
import { Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";
import NoPageFound from "./pages/NoPageFound";
import Skills from "./pages/Skills";

import DetailedProject from "./pages/DetailedProject";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Library from "./pages/Library";
import BookItem from "./components/BookItem";
import BookDetails from "./pages/BookDetail/BookDetails";





function App() {




  return (
    <Root>




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


    </Root>
  );
}

export default App;
