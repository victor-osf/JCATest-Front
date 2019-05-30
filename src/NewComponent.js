import React, { Component } from 'react';
import logojca from './logojca.svg';

export default class NewComponent extends Component {
  render() {
    //receber checkbox
    var checkboxes = document.querySelectorAll('[name=specs]');
    for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', this.props.getValues, false);}
    //fim

    return (
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
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Seleção de Testes</span>
              </h4>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="loginCPF" defaultChecked="true"  value="'loginCPF' : 'spec/login/loginCPF_spec.js'"/>
                    <label className="custom-control-label" htmlFor="loginCPF">Login CPF</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="loginCNPJ" value="'loginCNPJ' : 'spec/login/loginCNPJ_spec.js'"/>
                    <label className="custom-control-label" htmlFor="loginCNPJ">Login CNPJ</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="loginPassport" value="'loginPassport' : 'spec/login/loginPassport_spec.js'"/>
                    <label className="custom-control-label" htmlFor="loginPassport">Login Passporte</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="loginInvalid" value="'loginInvalid' : 'spec/login/loginInvalid_spec.js'"/>
                    <label className="custom-control-label" htmlFor="loginInvalid">Login Inválido</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="forgotPassword" value="'forgotPassword' : 'spec/login/forgotPass_spec.js'"/>
                    <label className="custom-control-label" htmlFor="forgotPassword">Esqueceu Senha</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="accountExistent" value="'accountExistent' : 'spec/login/accountExistent_spec.js'"/>
                    <label className="custom-control-label" htmlFor="accountExistent">Conta Inexistente</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="cnpjAccount" value="'cnpjAccount' : 'spec/login/cnpjAccount_spec.js'"/>
                    <label className="custom-control-label" htmlFor="cnpjAccount">Conta com CNPJ</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="cpfAccount" value="'cpfAccount' : 'spec/login/cpfAccount_spec.js'"/>
                    <label className="custom-control-label" htmlFor="cpfAccount">Conta com CPF</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="passportAccount" value="'passportAccount' : 'spec/login/passportAccount_spec.js'"/>
                    <label className="custom-control-label" htmlFor="passportAccount">Conta com Passaporte</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="fluxoAutAntes" value="'fluxoAutAntes' : 'spec/flow/idaUsuarioAutenticadoAntes_spec.js'"/>
                    <label className="custom-control-label" htmlFor="fluxoAutAntes">Fluxo Antes</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="fluxoAutDurante" value="'fluxoAutDurante' : 'spec/flow/idaUsuarioAutenticadoDurante_spec.js'"/>
                    <label className="custom-control-label" htmlFor="fluxoAutDurante">Fluxo Durante</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="fluxoUserEPassageiro" value="'fluxoUserEPassageiro' : 'spec/flow/idaUsuarioAutenticadoEPassageiro_spec.js'"/>
                    <label className="custom-control-label" htmlFor="fluxoUserEPassageiro">Fluxo Passageiro</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="fluxoUserEstudante" value="'fluxoUserEstudante' : 'spec/flow/idaUsuarioAutenticadoValEstudante_spec.js'"/>
                    <label className="custom-control-label" htmlFor="fluxoUserEstudante">Fluxo Estudante</label>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" name="specs" id="fluxoIdaVoltaUserEPassageiro" value="'fluxoIdaVoltaUserEPassageiro' : 'spec/flow/idaVoltaUsuarioAutenticadoEPassageiro_spec.js'"/>
                    <label className="custom-control-label" htmlFor="fluxoIdaVoltaUserEPassageiro">Fluxo Ida e Volta</label>
                  </div>
                </div>


              </div>
                <div className="container botoes">
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-primary btn-block" type="submit">Salvar</button>
                    </div>
                    <div className="col">
                      <button className="btn btn-success btn-block" type="button" onClick={this.props.handlePost}>Testar</button>
                    </div>
                  </div>
                </div>

                <div className="container botoes">
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-secondary btn-lg btn-block" type="button" onClick={this.props.verRelatorio}>Ver Relatório</button>
                    </div>
                  </div>
                </div>

            </div>


            <div className="col-md-8 order-md-1">

              <h4 className="mb-3">Dados de Login</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="userCPF">CPF do usuário</label>
                  <input type="text" className="form-control" id="userCPF" defaultValue={this.props.data.userCPF} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="passCPF">Senha login CPF</label>
                  <input type="text" className="form-control" id="passCPF" defaultValue={this.props.data.passCPF} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="userCNPJ">CNPJ do usuário</label>
                  <input type="text" className="form-control" id="userCNPJ" defaultValue={this.props.data.userCNPJ} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="passCNPJ">Senha login CNPJ</label>
                  <input type="text" className="form-control" id="passCNPJ" defaultValue={this.props.data.passCNPJ} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="userPassport">Passaporte do usuário</label>
                  <input type="text" className="form-control" id="userPassport" defaultValue={this.props.data.userPassport} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="passPassport">Senha login Passaporte</label>
                  <input type="text" className="form-control" id="passPassport" defaultValue={this.props.data.passPassport} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="userCPFWrong">CPF inválido</label>
                  <input type="text" className="form-control" id="userCPFWrong" defaultValue={this.props.data.userCPFWrong} />
                </div>
                {/*<div className="col-md-6 mb-3">
              <label htmlFor="username">Email de login do usuário</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control" id="username" defaultValue={this.props.data.username} />                    
                </div>                   
              </div> */}
              </div>

              <h4 className="mb-3">Dados de passageiros</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="passenger1">Passageiro 1</label>
                  <input type="text" className="form-control" id="passenger1" defaultValue={this.props.data.passenger1} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="docPassenger1">Documento do passageiro 1</label>
                  <input type="text" className="form-control" id="docPassenger1" defaultValue={this.props.data.docPassenger1} />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="passenger2">Passageiro 2</label>
                  <input type="text" className="form-control" id="passenger2" defaultValue={this.props.data.passenger2} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="docPassenger2">Documento do passageiro 2</label>
                  <input type="text" className="form-control" id="docPassenger2" defaultValue={this.props.data.docPassenger2} />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="passenger3">Passageiro 3</label>
                  <input type="text" className="form-control" id="passenger3" defaultValue={this.props.data.passenger3} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="docPassenger3">Documento do passageiro 3</label>
                  <input type="text" className="form-control" id="docPassenger3" defaultValue={this.props.data.docPassenger3} />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="passenger4">Passageiro 4</label>
                  <input type="text" className="form-control" id="passenger4" defaultValue={this.props.data.passenger4} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="docPassenger4">Documento do passageiro 4</label>
                  <input type="text" className="form-control" id="docPassenger4" defaultValue={this.props.data.docPassenger4} />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="passenger5">Passageiro 5</label>
                  <input type="text" className="form-control" id="passenger5" defaultValue={this.props.data.passenger5} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="docPassenger5">Documento do passageiro 5</label>
                  <input type="text" className="form-control" id="docPassenger5" defaultValue={this.props.data.docPassenger5} />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="passenger6">Passageiro 6</label>
                  <input type="text" className="form-control" id="passenger6" defaultValue={this.props.data.passenger6} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="docPassenger6">Documento do passageiro 6</label>
                  <input type="text" className="form-control" id="docPassenger6" defaultValue={this.props.data.docPassenger6} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="studentCpf">CPF do estudante</label>
                  <input type="text" className="form-control" id="studentCpf" defaultValue={this.props.data.studentCpf} />
                </div>
              </div>

              <h4 className="mb-3">Dados do cartão de crédito</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="numCard">Número do cartão de crédito</label>
                  <input type="text" className="form-control" id="numCard" defaultValue={this.props.data.numCard} />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="valDate">Data de validade</label>
                  <input type="text" className="form-control" id="valDate" defaultValue={this.props.data.valDate} />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="codCard">Código de segurança</label>
                  <input type="text" className="form-control" id="codCard" defaultValue={this.props.data.codCard} />
                </div>
              </div>

              <h4 className="mb-3">Dados do usuário</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="form-control" id="name" defaultValue={this.props.data.name} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="birth">Data de nascimento</label>
                  <input type="text" className="form-control" id="birth" defaultValue={this.props.data.birth} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" className="form-control" id="cpf" defaultValue={this.props.data.cpf} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cnpj">CNPJ</label>
                  <input type="text" className="form-control" id="cnpj" defaultValue={this.props.data.cnpj} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="passport">Passaporte</label>
                  <input type="text" className="form-control" id="passport" defaultValue={this.props.data.passport} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="emailCpf">Email cadastro CPF</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="emailCpf" defaultValue={this.props.data.emailCpf} />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="emailCnpj">Email cadastro CNPJ</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="emailCnpj" defaultValue={this.props.data.emailCnpj} />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="emailPass">Email cadastro PASSAPORTE</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="emailPass" defaultValue={this.props.data.emailPass} />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="pass">Senha</label>
                  <input type="text" className="form-control" id="pass" defaultValue={this.props.data.pass} />
                </div>
                <div className="col-md-2 mb-3">
                  <label htmlFor="ddd">DDD</label>
                  <input type="text" className="form-control" id="ddd" defaultValue={this.props.data.ddd} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="phoneNumber">Telefone</label>
                  <input type="text" className="form-control" id="phoneNumber" defaultValue={this.props.data.phoneNumber} />
                </div>
              </div>


              <h4 className="mb-3">Dados de endereço</h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="address">Endereço</label>
                  <input type="text" className="form-control" id="address" defaultValue={this.props.data.address} />
                </div>
                <div className="col-md-2 mb-3">
                  <label htmlFor="number">Número</label>
                  <input type="text" className="form-control" id="number" defaultValue={this.props.data.number} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="zip">CEP</label>
                  <input type="text" className="form-control" id="zip" defaultValue={this.props.data.zip} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="complement">Complemento</label>
                  <input type="text" className="form-control" id="complement" defaultValue={this.props.data.complement} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="neigh">Bairro</label>
                  <input type="text" className="form-control" id="neigh" defaultValue={this.props.data.neigh} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="city">Cidade</label>
                  <input type="text" className="form-control" id="city" defaultValue={this.props.data.city} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="country">País</label>
                  <input type="text" className="form-control" id="country" defaultValue={this.props.data.country} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}