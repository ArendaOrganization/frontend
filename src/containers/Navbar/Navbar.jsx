import {useDispatch, useSelector} from "react-redux";
import "./Navbar.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    Label,
    Input,
    Form,
    NavLink,
} from "reactstrap";

const NavigationBar = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="Navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a className="nav-link" href="#"><span
                            className="fa fa-home fa-lg"></span> Main Page</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" onClick={() => alert("NIGGA!!!")}><span
                            className="fa fa-info fa-lg"></span> About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><span
                            className="fa fa-list fa-lg"></span> Personal data</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><span
                            className="fa fa-address-card fa-lg"></span> Contact</a></li>
                    </ul>
                    <span className="navbar-text">
                    <a id="loginSite" href="#">
                        <span className="fa fa-sign-in"></span> Login /
                    </a>

                    <a id="Registration " href="#">
                        Registration
                    </a>
                </span>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;