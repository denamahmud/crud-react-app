import { Routes, Route, HashRouter } from "react-router-dom";
import FillInfo from './pages/FillInfo';
import Home from './pages/Home';
import InfoAdded from './pages/InfoAdded';
import InfoEdit from "./pages/InfoEdit";
import './style/style.css'


const App = () => {



    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/fill-info' element={<FillInfo/>}/>
                    <Route path='/info-added' element={<InfoAdded/>}/>
                    <Route exact path='/info-edit' element={<InfoEdit/>}/>
                    <Route path='/info-edit/:id' element={<InfoEdit/>}/>
                </Routes>
            </HashRouter>
        
        </div>
    );


}


export default App
