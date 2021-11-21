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

import './CadastraCampo.css'

import field1 from "./field1.jpg";
import field2 from "./field2.jpg";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            camp_list:[
                {
                    "nome": "Prefeitura Municipal",
                    "telefone": "3722-2425",
                    "numero": "51",
                    "bairro": "Centro",
                    "rua": "Capituu",
                    "cep": "377777",
                    "valor": "60"
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
                {
                    "nome": "12",
                    "telefone": "12",
                    "numero": "12",
                    "bairro": "12",
                    "rua": "12",
                    "cep": "12",
                    "valor": ""
                },
            ]
        }
        this.addCampo = this.addCampo.bind(this)
    }

    addCampo(campo){
        alert("Adicionando no buffer",campo)
        let aux = this.state.camp_list

        aux.push(campo)
        this.setState({
            camp_list:aux
        })

        console.log(JSON.stringify(this.state.camp_list,null,4))
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/cadastracampo" element={<CadastraCampo addCampo={this.addCampo}/>} />
                    <Route path="/listacampos" element={<ListaCampos campos={this.state.camp_list}/>}/>
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
                    <div className="logo">
                        <Link to="/" className="logo_text">IFoot</Link>
                        <img src={logo_img} alt="" className="logo_image"/>
                    </div>
                </div>
                
        );
    }
}

function Body (){
    return(
        <div className="myBody">
            <div className="row">
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
            <Link  to= "/listacampos" className="titulo_card">Ache um Campo</Link>
            <div className="text_card">
            Você que gosta de futebol, gostaria de alugar um campo perto de você com toda a qualidade oferecida?
Então veio ao lugar certo, aqui você encontra os melhores campos de futebol em sua cidade. Desde 
quadra/Society a Campo.
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
            <Link  to= "/cadastracampo" className="titulo_card">Alugue o seu Campo</Link>
            <div className="text_card">
                Você que possui um campo ou uma quadra de futebol e gostária de ter mais clientes?? Pois aqui você tera
                mais visualizações. Nessa plataforma onde varios passam diariamente poderam te telefonar para alugar o
                seu campo/quadra, o que está esperando venha se cadastrar logo e ponha para alugar.            
            </div>
        </div>
    );
}

function SaibaMais(){
    return(
        <div className="saiba_mais">
            <div className="titulo_card">Como Funciona?</div>
            <div className="text_card">
                Nesse site você encontra os melhores campos de futebol que existem em sua cidade. É so clicar em Ache um campo
                e navegue pelo menu de campos oferecidos em nosso site e caso você seja dono clique em alugue o seu campo para 
                se cadastrar e anuncie seu campo.
            </div>
        </div>
    );
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nome: '',
            telefone:'',
            numero:'',
            bairro:'',
            rua:'',
            cep:'',
            valor:''
        
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });

      }

    handleSubmit(event) {
        
        let aux = this.state
        //Aux é o objeto passado pelo formulario
        this.props.addCampo(aux)
        event.preventDefault();
        
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit } className="collum">
                <label>
                    Nome:
                </label>
                <input type="text" name="nome" value={this.state.nome} onChange={this.handleInputChange}/><br/>

                <label>
                    Telefone:
                </label>
                <input type="text" name="telefone" value={this.state.telefone} onChange={this.handleInputChange}/><br/>

                <label>
                    Bairro:
                </label>
                <input type="text" name="bairro" value={this.state.bairro} onChange={this.handleInputChange}/><br/>

                <label>
                    Rua:
                </label>
                <input type="text" name="rua" value={this.state.rua} onChange={this.handleInputChange}/><br/>

                <label>
                    Número:
                </label>
                <input type="number" name="numero" value={this.state.numero} onChange={this.handleInputChange}/><br/>

                <label>
                    Cep:
                </label>
                <input type="text" name="cep" value={this.state.cep} onChange={this.handleInputChange}/><br/>

                <label className="label_value">Preço por hora: </label>
                <input type="number" name="valor" value={this.state.valor} id="input_value" onChange={this.handleInputChange} placeholder="200"></input><br/>

                <input type="submit" value="Enviar" />
            </form>



            </div>
            
        );
    }

}

class CadastraCampo extends React.Component{
    render(){
        return(
            <div className="cadastra_app">
                <div className="header">
                    <Link to="/" className="voltar">Voltar</Link>
                    <h2>Cadastre seu Campo</h2>
                </div>
                <div className="bottom_container">
                    <div className="left_bar">
                        <MyForm addCampo={this.props.addCampo}></MyForm>
                    </div>
                </div>
            </div>

            
        );
    }


    /*render(){
        return(
            <div className="cadastra_app">
                <div className="header">
                    <Link to="/" className="voltar">Voltar</Link>
                    <h2>Cadastre seu Campo</h2>
                </div>
                <div className="bottom_container">
                    <div className="left_bar">
                        <MyForm addCampo={this.props.addCampo}></MyForm>
                    </div>
                   <div className="right_bar">
                        <div className="value_div">
                            <div className="input_box">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        );
    }*/
}

function ListaCampos(props) {


    const listItems = props.campos.map((item) =>
        <Campo info={item}></Campo>
    );

    return(
        <div className="app">
            <Header>
            </Header>
            <div className="listador_de_campos">
                {listItems}
            </div>
            
        </div>

    );
}

function Campo(props) {
    return(
        <div className="campo">
        <div className="img_campo">
            <img src={field1} id="img_field1" alt=""></img>
        </div>
        <div className="titulo_card">{props.info.nome}</div>
        <div className="info">
            <div>Telefone: {props.info.telefone}</div>
            <div>Endereço: {props.info.bairro+","+props.info.rua + " " + props.info.numero + ","+ props.info.cep}</div>
            <div>Valor: R${props.info.valor} /hora</div>
        </div>
    </div>
    );
}

ReactDOM.render(
    <App />
    , document.getElementById("root"));

