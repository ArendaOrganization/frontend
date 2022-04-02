import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthReg from "./containers/AuthRegPage/AuthReg";
import HomePage from "./containers/HomePage/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
    const initialData = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthReg/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/HomePage" element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
