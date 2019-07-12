import React, { Component } from 'react';
import logojca from '../logojca.svg';
import { Link } from 'react-router-dom'
import { InputField } from './InputField/InputFieldView';
import { InputCheckbox } from './InputCheckbox/InputCheckboxView';
import axios from 'axios';
import httpService from '../service/http-service';

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      specs: {},
      formData: {}
    };
  }

  async componentDidMount() {
    let response1 = await axios.get(httpService.url + '/property/default', httpService.config)
    let response2 = await axios.get(httpService.url + '/spec', httpService.config)
    this.setState({ formData: response1.data, specs: response2.data })
  }

  async handlePost(event) {
    event.preventDefault();
    let response = await axios.post(httpService.url + '/test/run', null, httpService.config)
    this.setState(response.data)
  }

  getValues(event) {
    event.stopImmediatePropagation();
    var specs = document.querySelectorAll('[name=specs]:checked');
    var values = '{';
    for (var i = 0; i < specs.length; i++) {
      if (i === specs.length - 1) {
        values = values + specs[i].value;
      } else {
        values = values + specs[i].value + ',';
      }
    }
    values = values + '}'
    values = values.replace(/'/g, '"')
    this.setState({ specs: JSON.parse(values) });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = event.target
    const id = this.state.formData._id
    const body = {
      baseUrl: data.baseUrl.value,
      userCPF: data.userCPF.value,
      passCPF: data.passCPF.value,
      userCNPJ: data.userCNPJ.value,
      passCNPJ: data.passCNPJ.value,
      userPassport: data.userPassport.value,
      passPassport: data.passPassport.value,
      userCPFWrong: data.userCPFWrong.value,
      passenger1: data.passenger1.value,
      docPassenger1: data.docPassenger1.value,
      passenger2: data.passenger2.value,
      docPassenger2: data.docPassenger2.value,
      passenger3: data.passenger3.value,
      docPassenger3: data.docPassenger3.value,
      passenger4: data.passenger4.value,
      docPassenger4: data.docPassenger4.value,
      passenger5: data.passenger5.value,
      docPassenger5: data.docPassenger5.value,
      passenger6: data.passenger6.value,
      docPassenger6: data.docPassenger6.value,
      studentCpf: data.studentCpf.value,
      numCard: data.numCard.value,
      valDate: data.valDate.value,
      codCard: data.codCard.value,
      name: data.name.value,
      birth: data.birth.value,
      cpf: data.cpf.value,
      cnpj: data.cnpj.value,
      passport: data.passport.value,
      emailCpf: data.emailCpf.value,
      emailCnpj: data.emailCnpj.value,
      emailPass: data.emailPass.value,
      pass: data.pass.value,
      ddd: data.ddd.value,
      phoneNumber: data.phoneNumber.value,
      zip: data.zip.value,
      address: data.address.value,
      number: data.number.value,
      complement: data.complement.value,
      neigh: data.neigh.value,
      city: data.city.value,
      country: data.country.value
    }

    await axios.put(httpService.url + `/property/${id}`, body, httpService.config)
    alert('Salvo com sucesso!')
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  async handleChange(event) {
    const { id, checked } = event.target
    await axios.put(httpService.url + `/spec/${id}`, { enabled: checked }, httpService.config)
  }

  render() {
    //receber checkbox
    var checkboxes = document.querySelectorAll('[name=specs]');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('click', this.props.getValues, false);
    }
    //fim

    const specs = this.state.specs
    const customProperties = this.state.formData.customProperties

    if (customProperties && specs) {
      return (
        <div>
          <div className="container">
            <div className="py-5 text-center">
              <img className="d-block mx-auto mb-4" src={logojca} alt="logoJCA" width={300} height={150} />
              <h2>Formulário de Parâmetros</h2>
              <p className="lead">Formulário com parâmetros para automatização dos testes nos sites do grupo JCA.
                                    Para utilizar os parâmetros preenchidos no formulário, pressione o botão "Testar",
                                    ou altere os campos desejados, pressione o botão "Salvar" e em seguida "Testar".
        </p>
            </div>
            <form className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
              <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">URL Base</span>
                  </h4>
                  <label htmlFor="baseUrl">Url do ambiente a ser testado</label>
                  <input type="text" className="form-control" id="baseUrl" defaultValue={customProperties.baseUrl} />
                  <hr className="sm-1"></hr>
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Seleção de Testes</span>
                  </h4>
                  <div className="row">

                    {
                      !this.isEmpty(specs) && specs.map((elem, key) => {
                        return <InputCheckbox key={key} id={elem._id}
                          file={elem.name} label={elem.label}
                          defaultChecked={elem.enabled} handleChange={this.handleChange.bind(this)} />
                      })
                    }

                  </div>
                  <div className="container botoes">
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-primary btn-block" type="submit">Salvar</button>
                      </div>
                      <div className="col">
                        <button className="btn btn-success btn-block" type="button" onClick={this.handlePost.bind(this)}>Testar</button>
                      </div>
                    </div>
                  </div>

                  <div className="container botoes">
                    <div className="row">
                      <div className="col">
                        <Link to='/about'> <button className="btn btn-secondary btn-lg btn-block" type="button" onClick={this.props.verRelatorio}>Ver Relatorio</button> </Link>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="col-md-8 order-md-1">

                  <h4 className="mb-3">Dados de Login</h4>
                  <div className="row">
                    <InputField label="CPF do usuário" id="userCPF" defaultValue={customProperties.userCPF} />
                    <InputField label="Senha login CPF" id="passCPF" defaultValue={customProperties.passCPF} />
                    <InputField label="CNPJ do usuário" id="userCNPJ" defaultValue={customProperties.userCNPJ} />
                    <InputField label="Senha login CNPJ" id="passCNPJ" defaultValue={customProperties.passCNPJ} />
                    <InputField label="Passaporte do usuário" id="userPassport" defaultValue={customProperties.userPassport} />
                    <InputField label="Senha login Passaporte" id="passPassport" defaultValue={customProperties.passPassport} />
                    <InputField label="CPF inválido" id="userCPFWrong" defaultValue={customProperties.userCPFWrong} />
                    {/* <InputField label="Email de login do usuário" id="username" isEmail={true} defaultValue={customProperties.username}/> */}
                  </div>

                  <h4 className="mb-3">Dados de passageiros</h4>
                  <div className="row">
                    <InputField label="Passageiro 1" id="passenger1" defaultValue={customProperties.passenger1} />
                    <InputField label="Documento do passageiro 1" id="docPassenger1" defaultValue={customProperties.docPassenger1} />
                    <InputField label="Passageiro 2" id="passenger2" defaultValue={customProperties.passenger2} />
                    <InputField label="Documento do passageiro 2" id="docPassenger2" defaultValue={customProperties.docPassenger2} />
                    <InputField label="Passageiro 3" id="passenger3" defaultValue={customProperties.passenger3} />
                    <InputField label="Documento do passageiro 3" id="docPassenger3" defaultValue={customProperties.docPassenger3} />
                    <InputField label="Passageiro 4" id="passenger4" defaultValue={customProperties.passenger4} />
                    <InputField label="Documento do passageiro 4" id="docPassenger4" defaultValue={customProperties.docPassenger4} />
                    <InputField label="Passageiro 5" id="passenger5" defaultValue={customProperties.passenger5} />
                    <InputField label="Documento do passageiro 5" id="docPassenger5" defaultValue={customProperties.docPassenger5} />
                    <InputField label="Passageiro 6" id="passenger6" defaultValue={customProperties.passenger6} />
                    <InputField label="Documento do passageiro 6" id="docPassenger6" defaultValue={customProperties.docPassenger6} />
                    <InputField label="CPF do estudante" id="studentCpf" defaultValue={customProperties.studentCpf} />
                  </div>
                  <h4 className="mb-3">Dados do cartão de crédito</h4>
                  <div className="row">
                    <InputField label="Número do cartão de crédito" id="numCard" defaultValue={customProperties.numCard} />
                    <InputField label="Data de validade" colSize='4' id="valDate" defaultValue={customProperties.valDate} />
                    <InputField label="Código" colSize='3' id="codCard" defaultValue={customProperties.codCard} />
                  </div>
                  <h4 className="mb-3">Dados do usuário</h4>
                  <div className="row">
                    <InputField label="Nome" id="name" defaultValue={customProperties.name} />
                    <InputField label="Data de nascimento" id="birth" defaultValue={customProperties.birth} />
                    <InputField label="CPF" id="cpf" defaultValue={customProperties.cpf} />
                    <InputField label="CNPJ" id="cnpj" defaultValue={customProperties.cnpj} />
                    <InputField label="Passaporte" id="passport" defaultValue={customProperties.passport} />
                    <InputField label="Email cadastro CPF" id="emailCpf" isEmail={true} defaultValue={customProperties.emailCpf} />
                    <InputField label="Email cadastro CNPJ" id="emailCnpj" isEmail={true} defaultValue={customProperties.emailCnpj} />
                    <InputField label="Email cadastro PASSAPORTE" id="emailPass" isEmail={true} defaultValue={customProperties.emailPass} />
                    <InputField label="Senha" id="pass" defaultValue={customProperties.pass} />
                    <InputField label="DDD" id="ddd" colSize='2' defaultValue={customProperties.ddd} />
                    <InputField label="Telefone" id="phoneNumber" colSize='4' defaultValue={customProperties.phoneNumber} />
                  </div>
                  <h4 className="mb-3">Dados de endereço</h4>
                  <div className="row">
                    <InputField label="Endereço" id="address" defaultValue={customProperties.address} />
                    <InputField label="Número" id="number" colSize='2' defaultValue={customProperties.number} />
                    <InputField label="CEP" id="zip" colSize='4' defaultValue={customProperties.zip} />
                    <InputField label="Complemento" id="complement" defaultValue={customProperties.complement} />
                    <InputField label="Bairro" id="neigh" defaultValue={customProperties.neigh} />
                    <InputField label="Cidade" id="city" defaultValue={customProperties.city} />
                    <InputField label="País" id="country" defaultValue={customProperties.country} />
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
    } else {
      return <div style={divStyle}>Loading...</div>;
    }
  }
}

const divStyle = {
  fontSize: '36px',
  textAlign: 'center',
};
