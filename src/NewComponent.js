import React from 'react';
import logojca from './logojca.svg'

const NewComponent = () =>(    
        <div className="container">
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src={logojca} alt="" width={300} height={150} />
            <h2>Formulário de Parâmetros</h2>
            <p className="lead">Formulário com parâmetros para automatização dos testes nos sites do grupo JCA.
                                  Para utilizar os parâmetros preenchidos no formulário, pressione o botão "Testar",
                                  ou altere os campos desejados, pressione o botão "Salvar" e em seguida "Testar".
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Selecione a empresa</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="custom-control custom-radio">
                      <h6>
                        <input id="cometa" name="baseUrl" type="radio" className="custom-control-input" defaultChecked  />
                        <label className="custom-control-label" htmlFor="cometa">Cometa</label>
                      </h6>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="custom-control custom-radio">
                      <h6>
                        <input id="rapido" name="baseUrl" type="radio" className="custom-control-input"  />
                        <label className="custom-control-label" htmlFor="rapido">Rápido Ribeirão</label>
                      </h6>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="custom-control custom-radio">
                      <h6>
                        <input id="catarinense" name="baseUrl" type="radio" className="custom-control-input"  />
                        <label className="custom-control-label" htmlFor="catarinense">Catarinense</label>
                      </h6>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="custom-control custom-radio">
                      <h6>
                        <input id="1001" name="baseUrl" type="radio" className="custom-control-input"  />
                        <label className="custom-control-label" htmlFor="1001">1001</label>
                      </h6>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="custom-control custom-radio">
                      <h6>
                        <input id="expresso" name="baseUrl" type="radio" className="custom-control-input"  />
                        <label className="custom-control-label" htmlFor="expresso">Expresso do Sul</label>
                      </h6>
                    </div>
                </li>
                <hr className="md-2"></hr>
                <div className="container">
                  <div className="row"> 
                    <div className="col">     
                      <button className="btn btn-primary btn-block" type="submit">Salvar</button>
                    </div>
                    <div className="col"> 
                      <button className="btn btn-success btn-block" type="submit">Testar</button>
                    </div>
                  </div>
                </div>                  
              </ul>
            </div>


            <div className="col-md-8 order-md-1">              
              <form className="needs-validation" noValidate>
              <h4 className="mb-3">Dados de Login</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userCPF">CPF do usuário</label>
                    <input type="text" className="form-control" id="userCPF"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passCPF">Senha login CPF</label>
                    <input type="text" className="form-control" id="passCPF"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userCNPJ">CNPJ do usuário</label>
                    <input type="text" className="form-control" id="userCNPJ"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passCNPJ">Senha login CNPJ</label>
                    <input type="text" className="form-control" id="passCNPJ"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userPassport">Passaporte do usuário</label>
                    <input type="text" className="form-control" id="userPassport"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passPassport">Senha login Passaporte</label>
                    <input type="text" className="form-control" id="passPassport"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userCPFWrong">CPF inválido</label>
                    <input type="text" className="form-control" id="userCPFWrong"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                  <label htmlFor="username">Email de login do usuário</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input type="text" className="form-control" id="username"  />                    
                    </div>                   
                  </div> 
                </div>

                <h4 className="mb-3">Dados de passageiros</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger1">Passageiro 1</label>
                    <input type="text" className="form-control" id="passenger1"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger1">Documento do passageiro 1</label>
                    <input type="text" className="form-control" id="docPassenger1"  />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger2">Passageiro 2</label>
                    <input type="text" className="form-control" id="passenger2"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger2">Documento do passageiro 2</label>
                    <input type="text" className="form-control" id="docPassenger2"  />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger3">Passageiro 3</label>
                    <input type="text" className="form-control" id="passenger3"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger3">Documento do passageiro 3</label>
                    <input type="text" className="form-control" id="docPassenger3"  />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger4">Passageiro 4</label>
                    <input type="text" className="form-control" id="passenger4"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger4">Documento do passageiro 4</label>
                    <input type="text" className="form-control" id="docPassenger4"  />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger5">Passageiro 5</label>
                    <input type="text" className="form-control" id="passenger5"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger5">Documento do passageiro 5</label>
                    <input type="text" className="form-control" id="docPassenger5"  />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger6">Passageiro 6</label>
                    <input type="text" className="form-control" id="passenger6"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger6">Documento do passageiro 6</label>
                    <input type="text" className="form-control" id="docPassenger6"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="studentCpf">CPF do estudante</label>
                    <input type="text" className="form-control" id="studentCpf"  />                    
                  </div>
                </div>

                <h4 className="mb-3">Dados do cartão de crédito</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="numCard">Número do cartão de crédito</label>
                    <input type="text" className="form-control" id="numCard"  />                    
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="valDate">Data de validade</label>
                    <input type="text" className="form-control" id="valDate"  />                    
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="codCard">Código de segurança</label>
                    <input type="text" className="form-control" id="codCard"  />                    
                  </div>
                </div>

                <h4 className="mb-3">Dados do usuário</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" id="name"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="birth">Data de nascimento</label>
                    <input type="text" className="form-control" id="birth"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" className="form-control" id="cpf"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" className="form-control" id="cnpj"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passport">Passaporte</label>
                    <input type="text" className="form-control" id="passport"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input type="text" className="form-control" id="email"  />                    
                    </div>
                  </div> 
                  <div className="col-md-6 mb-3">
                    <label htmlFor="pass">Senha</label>
                    <input type="text" className="form-control" id="pass"  />                    
                  </div> 
                  <div className="col-md-2 mb-3">
                    <label htmlFor="ddd">DDD</label>
                    <input type="text" className="form-control" id="ddd"  />                    
                  </div> 
                  <div className="col-md-4 mb-3">
                    <label htmlFor="phoneNumber">Telefone</label>
                    <input type="text" className="form-control" id="phoneNumber"  />                    
                  </div>                   
                </div>


                <h4 className="mb-3">Dados de endereço</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="address">Endereço</label>
                    <input type="text" className="form-control" id="address"  />                    
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="number">Número</label>
                    <input type="text" className="form-control" id="number"  />                    
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="zip">CEP</label>
                    <input type="text" className="form-control" id="zip"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="complement">Complemento</label>
                    <input type="text" className="form-control" id="complement"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="neigh">Bairro</label>
                    <input type="text" className="form-control" id="neigh"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city">Cidade</label>
                    <input type="text" className="form-control" id="city"  />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="country">País</label>
                    <input type="text" className="form-control" id="country"  />                    
                  </div>
                </div>
              </form>
            </div>
          </div>     
        </div>      
  );

  export default NewComponent;