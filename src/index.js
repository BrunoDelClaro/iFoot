import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import header_image from './field-header.jpg';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {



    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Index/>} />
                </Routes>
            </Router>
        );
    }

}

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header>
                </Header>
                <div>
                </div>
            </div>
            
            
        );

    }
}

class Header extends React.Component{
    render(){
        return(
                <header className="app-header">
                    <img src={header_image} alt="" className="bck-image"/>
                </header>
                
        );
    }
}

ReactDOM.render(
    <App />
    , document.getElementById("root"));

