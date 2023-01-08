
import './App.css';

import Root from "./components/Root";
import { Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome";


function App() {




  return (
    <Root>

        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='*' element={<p>Ooops! No Page</p>} />

        </Routes>
    </Root>
  );
}

export default App;
