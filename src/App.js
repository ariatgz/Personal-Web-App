
import './App.css';

import Root from "./components/Root";
import { Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";
import NoPageFound from "./pages/NoPageFound";


function App() {




  return (
    <Root>

        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='*' element={<NoPageFound />} />

        </Routes>
    </Root>
  );
}

export default App;
