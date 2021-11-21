import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo_img from './bola.jpg';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import field1 from "./field1.jpg";
import field2 from "./field2.jpg";

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
            <div className="app">
                <Header>
                </Header>
                <Body>

                </Body>
            </div>
            
            
        );

    }
}

class Header extends React.Component{
    render(){
        return(
                <div className="app-header">
                    <Link to="/"></Link>
                    <div className="logo">
                    <h2 className="logo_text">IFoot</h2>
                    <img src={logo_img} alt="" className="logo_image"/>
                    <Link to="/"></Link>
                    </div>
                </div>
                
        );
    }
}

function Body (){
    return(
        <div className="myBody">
            <div class="row">
                <AcheCampo/>
                <AlugueCampo/>
            </div>
            <div>
                <SaibaMais>
                </SaibaMais>
            </div>
            
            
        </div>
    );
}

function AcheCampo(){
    return(
        <div className="ache_campo">
            <div className="img_ache_campo">
                <img src={field1} id="img_field1"></img>
            </div>
            <div className="titulo_card">Ache um Campo</div>
            <div className="text_card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum magna eu nibh maximus accumsan. Cras fringilla interdum eros. Phasellus lacinia est non dignissim eleifend. Donec semper eleifend felis, a rhoncus dolor suscipit quis. Nam vel diam vulputate justo scelerisque tincidunt non nec orci. Nunc et mattis dolor. Integer mauris nulla, fermentum interdum aliquam at, convallis eu nunc.
            </div>
        </div>
    );
}
function AlugueCampo(){
    return(
        <div className="alugue_campo">
            <div className="img_alugue_campo">
            <img src={field2} id="img_field2"></img>
            </div>
            <div className="titulo_card">Alugue o seu Campo</div>
            <div className="text_card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum magna eu nibh maximus accumsan. Cras fringilla interdum eros. Phasellus lacinia est non dignissim eleifend. Donec semper eleifend felis, a rhoncus dolor suscipit quis. Nam vel diam vulputate justo scelerisque tincidunt non nec orci. Nunc et mattis dolor. Integer mauris nulla, fermentum interdum aliquam at, convallis eu nunc.
            </div>
        </div>
    );
}



function SaibaMais(){
    return(
        <div className="saiba_mais">
            <div className="titulo_card">Como Funciona?</div>
            <div className="text_card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum magna eu nibh maximus accumsan. Cras fringilla interdum eros. Phasellus lacinia est non dignissim eleifend. Donec semper eleifend felis, a rhoncus dolor suscipit quis. Nam vel diam vulputate justo scelerisque tincidunt non nec orci. Nunc et mattis dolor. Integer mauris nulla, fermentum interdum aliquam at, convallis eu nunc.

Nullam ipsum sapien, vulputate ut elementum quis, fermentum non mauris. Aenean non faucibus felis, nec consectetur dolor. Aenean elementum quis massa in maximus. Nullam aliquet vel lorem ac mattis. Nam mattis rhoncus odio et tincidunt. Sed congue ut dui nec viverra. Donec eros tortor, iaculis non auctor id, dictum in nulla. Etiam vel porta massa. Fusce eu leo id nisl placerat rutrum. Nam maximus a leo at ultricies. Aenean at commodo ligula. Aliquam augue ante, commodo sit amet posuere in, tristique eget nisi.

Maecenas vel dictum elit. Proin nec ex eu massa egestas consequat sit amet quis libero. Nunc viverra, ante in tempor vulputate, enim nisi interdum nisl, id vulputate mi orci id justo. Nullam gravida suscipit lobortis. Proin faucibus nibh eu pellentesque ultrices. Aliquam viverra justo ut enim porttitor rutrum. Morbi nibh libero, pellentesque consectetur feugiat sed, vestibulum sit amet lacus. Aliquam lobortis, dolor porta eleifend condimentum, magna mi tincidunt justo, ut tempor nisl dui in arcu. Donec quis risus erat.
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />
    , document.getElementById("root"));

