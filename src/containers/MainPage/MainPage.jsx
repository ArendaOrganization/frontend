import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import Navbar from "../Navbar/Navbar.jsx";
import "./MainPage.css";

const MainPage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <Navbar/>
            <header className="jumbotron">
                <div className="container">
                    <div className="row row-header">
                        <div className="col 12 col-sm-6">
                            <h1>Arenda</h1>
                            <p>
                                We take inspiration from the World's best cuisines, and create a unique fusion
                                experience. Our lipsmacking creations will tickle your culinary senses!
                            </p>
                        </div>
                        <div className="col-12 col-sm align-self-center"></div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row row-content">
                    <div className="col">
                        <div id="mycarousel"
                             className="carousel slide"
                             data-ride="carousel"
                        >
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid" src="../../img/alberto.jpg" alt="uthapizza"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2 className="offset-6">SomeHeader</h2>
                                        <p className="offset-6 d-none d-sm-block">
                                            A unique combination of Indian
                                            Uthappam (pancake) and
                                            Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes,
                                            Vidalia onion,
                                            Guntur chillies and Buffalo Paneer.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="../../img/alberto.jpg" alt="buffet"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2 className="offset-6">SomeHeader </h2>
                                        <p className="d-none d-sm-block offset-6">
                                            Featuring mouthwatering
                                            combinations with a choice of
                                            five different salads, six enticing appetizers, six main entrees and
                                            five choicest
                                            desserts. Free flowing bubbly and soft drinks. All for just $19.99 per
                                            person
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="../../img/alberto.jpg" alt="alberto"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2 className="mt-0 offset-6">SomeHeader</h2>
                                        <h4 className="offset-6">SomeHeader</h4>
                                        <p className="d-none d-sm-block offset-6">
                                            Award winning three-star Michelin
                                            chef with wide
                                            International experience having worked closely with whos-who in the
                                            culinary world, he
                                            specializes in creating mouthwatering Indo-Italian fusion
                                            experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ol className="carousel-indicators">
                                <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#mycarousel" data-slide-to="1"></li>
                                <li data-target="#mycarousel" data-slide-to="2"></li>
                            </ol>
                            <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;