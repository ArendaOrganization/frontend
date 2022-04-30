import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthReg from "./containers/AuthRegPage/AuthReg";
import HomePage from "./containers/HomePage/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import MapPage from "./containers/MapPage/MapPage";
import RentYourPage from "./containers/RentYourPage/RentYourPage";

function App() {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthReg/>}/>
                <Route path="*" element={<h1>Wrong address!</h1>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/HomePage" element={<HomePage/>}/>
                    <Route path="/MapPage" element={<MapPage/>}/>
                    <Route path="/RentYourPage" element={<RentYourPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
