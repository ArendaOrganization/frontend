import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes, useSearchParams} from "react-router-dom";
import AuthReg from "./containers/AuthRegPage/AuthReg";
import HomePage from "./containers/HomePage/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import MapPage from "./containers/MapPage/MapPage";
import RentYourPage from "./containers/RentYourPage/RentYourPage";
import Companies from "./containers/CompaniesPage/Companies";
import Premises from "./containers/Premises/Premises";
import EmailVerification from "./containers/AuthRegPage/EmailVerification/Verificatrion";
import SendEmailToChangePassword from "./containers/ChangePassword/SendEmailToChangePassword";
import CheckYourEmailSign from "./containers/ChangePassword/CheckYourEmailSign";
import ChangePassword from "./containers/ChangePassword/ChangePassword";
import PasswordChangeConfirmation from "./containers/ChangePassword/PasswordChangeConfirmationSign";
import WrongData from "./containers/AuthRegPage/AuthorisationErrors/WrongAuthData";
import HelpPage from "./containers/HelpPage/HelpPage";
import Place from "./containers/MapPage/Place/Place";
import NotMyCompany from "./containers/CompaniesPage/NotMyCompany/NotMyCompany";
import CreatePremise from "./containers/Premises/CreatePremise/CreatePremise";

function App() {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthReg/>}/>
                <Route path="*" element={<h1>Wrong address!</h1>}/>
                <Route path="/SendEmailToChangePassword" element={<SendEmailToChangePassword/>}/>
                <Route path="/user/verifyEmail" element={<EmailVerification/>}/>
                <Route path="user/resetPassword" element={<ChangePassword/>}/>
                <Route path="/CheckYourEmailSign" element={<CheckYourEmailSign/>}/>
                <Route path="/PasswordChangeConfirmation" element={<PasswordChangeConfirmation/>}/>
                <Route path="/WrongData" element={<WrongData/>}/>
                <Route path="/HelpPage" element={<HelpPage/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/HomePage" element={<HomePage/>}/>
                    <Route path="/MapPage" element={<MapPage/>}/>
                    <Route path="/RentYourPage" element={<RentYourPage/>}/>
                    <Route path="/Companies" element={<Companies/>}/>
                    <Route path="/Premises" element={<Premises/>}/>
                    <Route path="/Place" element={<Place/>}/>
                    <Route path="/NotMyCompany" element={<NotMyCompany/>}/>
                    <Route path="/CreatePremise" element={<CreatePremise/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
