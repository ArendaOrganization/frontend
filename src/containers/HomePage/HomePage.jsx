import {useDispatch, useSelector} from "react-redux";


const HomePage = function () {
    const authSlice = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hello world!</h1>
        </div>
    );
};

export default HomePage;