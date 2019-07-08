import React, { Component } from 'react';
import logojca from './logojca.svg';
import { InputField } from './components/InputField/InputFieldView';
import { TestSelection } from './components/TestSelection/TestSelectionView'
import { Link } from 'react-router-dom'
import axios from 'axios';
const HttpService = require('./service/http-service');

export default class NewComponent extends Component {
  constructor(props){
    super(props);
    this.handlePost = this.handlePost.bind(this)
  }

  handlePost(event) {
    event.preventDefault();
    axios.post(HttpService.url)
      .then(response => {
        this.setState(response.data.data)
      })
  }

  render() {
      console.log(this.props);
      return (
      <div>
      <div className="container">
        <div className="py-5 text-center">
          <img className="d-block mx-auto mb-4" src={logojca} alt="" width={300} height={150} />
          <h2>Formulário de Parâmetros</h2>
          <p className="lead">Formulário com parâmetros para automatização dos testes nos sites do grupo JCA.
                                Para utilizar os parâmetros preenchidos no formulário, pressione o botão "Testar",
                                ou altere os campos desejados, pressione o botão "Salvar" e em seguida "Testar".
        </p>
        </div>
        <form className="needs-validation" noValidate onSubmit={this.props.handleSubmit}>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">URL Base</span>
              </h4>
              <label htmlFor="baseUrl">Url do ambiente a ser testado</label>
              <input type="text" className="form-control" id="baseUrl" defaultValue={this.props.data.baseUrl}/>
              {/*<ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="custom-control custom-radio">
                  <h6>
                    <input id="cometa" name="baseUrl" type="radio" className="custom-control-input" checked="cometa" defaultChecked  />
                    <label className="custom-control-label" htmlFor="cometa">Cometa</label>
                  </h6>
                    <input type="text" className="form-control" if  disabled defaultValue="http://jca.ifactory.com.br/content/jca/cometa/en.html"></input>
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="custom-control custom-radio">
                  <h6>
                    <input id="rapido" name="baseUrl" type="radio" className="custom-control-input"  />
                    <label className="custom-control-label" htmlFor="rapido">Rápido Ribeirão</label>
                  </h6>
                  <small className="text-muted">http://jca.ifactory.com.br/content/jca/rapido-ribeirao/en.html</small>
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="custom-control custom-radio">
                  <h6>
                    <input id="catarinense" name="baseUrl" type="radio" className="custom-control-input"  />
                    <label className="custom-control-label" htmlFor="catarinense">Catarinense</label>
                  </h6>
                  <small className="text-muted list-group">http://jca.ifactory.com.br/content/jca/catarinense/en.html</small>
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="custom-control custom-radio">
                  <h6>
                    <input id="1001" name="baseUrl" type="radio" className="custom-control-input"  />
                    <label className="custom-control-label" htmlFor="1001">1001</label>
                  </h6>
                  <small className="text-muted">http://jca.ifactory.com.br/content/jca/viacao1001/en.html</small>
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="custom-control custom-radio">
                  <h6>
                    <input id="expresso" name="baseUrl" type="radio" className="custom-control-input"  />
                    <label className="custom-control-label" htmlFor="expresso">Expresso do Sul</label>
                  </h6>
                  <small className="text-muted">http://jca.ifactory.com.br/content/jca/expresso-sul/en.html</small>
                </div>
            </li>
          </ul>*/}
              <hr className="sm-1"></hr>
              <TestSelection/>
              <div className="container botoes">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-primary btn-block" type="submit">Salvar</button>
                        </div>
                        <div className="col-6">
                            <button
                                className="btn btn-success btn-block"
                                type="button"
                                onClick={this.handlePost}>Testar</button>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-12">
                            <Link to='/about'>
                                <button
                                    className="btn btn-secondary btn-lg btn-block"
                                    type="button"
                                    onClick={this.props.verRelatorio}>Ver Relatorio</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-8 order-md-1">

              <h4 className="mb-3">Dados de Login</h4>
              <div className="row">
                <InputField label="CPF do usuário" id="userCPF" defaultValue={this.props.data.userCPF}/>
                <InputField label="Senha login CPF" id="passCPF" defaultValue={this.props.data.passCPF}/>
                <InputField label="CNPJ do usuário" id="userCNPJ" defaultValue={this.props.data.userCNPJ}/>
                <InputField label="Senha login CNPJ" id="passCNPJ" defaultValue={this.props.data.passCNPJ}/>
                <InputField label="Passaporte do usuário" id="userPassport" defaultValue={this.props.data.userPassport}/>
                <InputField label="Senha login Passaporte" id="passPassport" defaultValue={this.props.data.passPassport}/>
                <InputField label="CPF inválido" id="userCPFWrong" defaultValue={this.props.data.userCPFWrong}/>
                {/* <InputField label="Email de login do usuário" id="username" isEmail={true} defaultValue={this.props.data.username}/> */}
              </div>

              <h4 className="mb-3">Dados de passageiros</h4>
              <div className="row">
                <InputField label="Passageiro 1" id="passenger1" defaultValue={this.props.data.passenger1}/>
                <InputField label="Documento do passageiro 1" id="docPassenger1" defaultValue={this.props.data.docPassenger1}/>
                <InputField label="Passageiro 2" id="passenger2" defaultValue={this.props.data.passenger2}/>
                <InputField label="Documento do passageiro 2" id="docPassenger2" defaultValue={this.props.data.docPassenger2}/>
                <InputField label="Passageiro 3" id="passenger3" defaultValue={this.props.data.passenger3}/>
                <InputField label="Documento do passageiro 3" id="docPassenger3" defaultValue={this.props.data.docPassenger3}/>
                <InputField label="Passageiro 4" id="passenger4" defaultValue={this.props.data.passenger4}/>
                <InputField label="Documento do passageiro 4" id="docPassenger4" defaultValue={this.props.data.docPassenger4}/>
                <InputField label="Passageiro 5" id="passenger5" defaultValue={this.props.data.passenger5}/>
                <InputField label="Documento do passageiro 5" id="docPassenger5" defaultValue={this.props.data.docPassenger5}/>
                <InputField label="Passageiro 6" id="passenger6" defaultValue={this.props.data.passenger6}/>
                <InputField label="Documento do passageiro 6" id="docPassenger6" defaultValue={this.props.data.docPassenger6}/>
                <InputField label="CPF do estudante" id="studentCpf" defaultValue={this.props.data.studentCpf}/>
              </div>
              <h4 className="mb-3">Dados do cartão de crédito</h4>
              <div className="row">
                <InputField label="Número do cartão de crédito" id="numCard" defaultValue={this.props.data.numCard}/>
                <InputField label="Data de validade" colSize='4' id="valDate" defaultValue={this.props.data.valDate}/>
                <InputField label="Código" colSize='3' id="codCard" defaultValue={this.props.data.codCard}/>
              </div>
              <h4 className="mb-3">Dados do usuário</h4>
              <div className="row">
                <InputField label="Nome" id="name" defaultValue={this.props.data.name}/>
                <InputField label="Data de nascimento" id="birth" defaultValue={this.props.data.birth}/>
                <InputField label="CPF" id="cpf" defaultValue={this.props.data.cpf}/>
                <InputField label="CNPJ" id="cnpj" defaultValue={this.props.data.cnpj}/>
                <InputField label="Passaporte" id="passport" defaultValue={this.props.data.passport}/>
                <InputField label="Email cadastro CPF" id="emailCpf" isEmail={true} defaultValue={this.props.data.emailCpf}/>
                <InputField label="Email cadastro CNPJ" id="emailCnpj" isEmail={true} defaultValue={this.props.data.emailCnpj}/>
                <InputField label="Email cadastro PASSAPORTE" id="emailPass" isEmail={true} defaultValue={this.props.data.emailPass}/>
                <InputField label="Senha" id="pass" defaultValue={this.props.data.pass}/>
                <InputField label="DDD" id="ddd" colSize='2' defaultValue={this.props.data.ddd}/>
                <InputField label="Telefone" id="phoneNumber" colSize='4' defaultValue={this.props.data.phoneNumber}/>
              </div>
              <h4 className="mb-3">Dados de endereço</h4>
              <div className="row">
                <InputField label="Endereço" id="address" defaultValue={this.props.data.address}/>
                <InputField label="Número" id="number" colSize='2' defaultValue={this.props.data.number}/>
                <InputField label="CEP" id="zip" colSize='4' defaultValue={this.props.data.zip}/>
                <InputField label="Complemento" id="complement" defaultValue={this.props.data.complement}/>
                <InputField label="Bairro" id="neigh" defaultValue={this.props.data.neigh}/>
                <InputField label="Cidade" id="city" defaultValue={this.props.data.city}/>
                <InputField label="País" id="country" defaultValue={this.props.data.country}/>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2019 Copyright
          <a href="http://www.jcaholding.com.br/"> JCA Holding</a>
        </div>
      </footer>
    </div>
    )
  }
}