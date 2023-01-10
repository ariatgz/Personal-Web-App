
import './App.css';

import Root from "./components/Root";
import { Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";
import NoPageFound from "./pages/NoPageFound";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import DetailedProject from "./pages/DetailedProject";


function App() {




  return (
    <Root>

        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path="/projects/:projId" element={<DetailedProject />} />


            <Route path='*' element={<NoPageFound />} />

        </Routes>
    </Root>
  );
}

export default App;
