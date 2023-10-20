import "./App.css";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App(){
    return(
        <div className="App">
            <Router>
                <div className="navBar">
                    <Link to="CreatePost"> Create A Post </Link>
                    <Link to="/"> Home Page </Link>
                </div>
              <Routes>
                <Route exact path = "/" element = {<Home />}/>
                <Route exact path = "/CreatePost" element = {<CreatePost />}/>
                <Route exact path = "/post/:id" element = {<Post/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;