import React from 'react';
import logojca from './logojca.svg';

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
                        <small className="text-muted list-group">http://jca.ifactory.com.br/content/jca/cometa/en.html</small>
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
                    <input type="text" className="form-control" id="userCPF" defaultValue="270.220.058-34" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passCPF">Senha login CPF</label>
                    <input type="text" className="form-control" id="passCPF" defaultValue="123456" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userCNPJ">CNPJ do usuário</label>
                    <input type="text" className="form-control" id="userCNPJ" defaultValue="03.884.716/0001-97" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passCNPJ">Senha login CNPJ</label>
                    <input type="text" className="form-control" id="passCNPJ" defaultValue="/?-+={}[]#(" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userPassport">Passaporte do usuário</label>
                    <input type="text" className="form-control" id="userPassport" defaultValue="PAS123" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passPassport">Senha login Passaporte</label>
                    <input type="text" className="form-control" id="passPassport" defaultValue="123456" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="userCPFWrong">CPF inválido</label>
                    <input type="text" className="form-control" id="userCPFWrong" defaultValue="122.222.222-88" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                  <label htmlFor="username">Email de login do usuário</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input type="text" className="form-control" id="username" defaultValue="jullianamartins@gmail.com" />                    
                    </div>                   
                  </div> 
                </div>

                <h4 className="mb-3">Dados de passageiros</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger1">Passageiro 1</label>
                    <input type="text" className="form-control" id="passenger1" defaultValue="Francisco Anthony Mendes" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger1">Documento do passageiro 1</label>
                    <input type="text" className="form-control" id="docPassenger1" defaultValue="359.245.261-43" />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger2">Passageiro 2</label>
                    <input type="text" className="form-control" id="passenger2" defaultValue="Theo Cauê Moraes" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger2">Documento do passageiro 2</label>
                    <input type="text" className="form-control" id="docPassenger2" defaultValue="16.703.153-3" />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger3">Passageiro 3</label>
                    <input type="text" className="form-control" id="passenger3" defaultValue="Daniela Nina Santos" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger3">Documento do passageiro 3</label>
                    <input type="text" className="form-control" id="docPassenger3" defaultValue="30.988.353-2" />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger4">Passageiro 4</label>
                    <input type="text" className="form-control" id="passenger4" defaultValue="Caroline Agatha Yasmin Teixeira" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger4">Documento do passageiro 4</label>
                    <input type="text" className="form-control" id="docPassenger4" defaultValue="024.692.438-15" />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger5">Passageiro 5</label>
                    <input type="text" className="form-control" id="passenger5" defaultValue="Márcia Beatriz Maya Porto" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger5">Documento do passageiro 5</label>
                    <input type="text" className="form-control" id="docPassenger5" defaultValue="240.556.753-99" />                    
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="passenger6">Passageiro 6</label>
                    <input type="text" className="form-control" id="passenger6" defaultValue="Cauê Sérgio Pires" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="docPassenger6">Documento do passageiro 6</label>
                    <input type="text" className="form-control" id="docPassenger6" defaultValue="PAS123456" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="studentCpf">CPF do estudante</label>
                    <input type="text" className="form-control" id="studentCpf" defaultValue="34624470842" />                    
                  </div>
                </div>

                <h4 className="mb-3">Dados do cartão de crédito</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="numCard">Número do cartão de crédito</label>
                    <input type="text" className="form-control" id="numCard" defaultValue="4111 1111 1111 1111" />                    
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="valDate">Data de validade</label>
                    <input type="text" className="form-control" id="valDate" defaultValue="10/20" />                    
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="codCard">Código de segurança</label>
                    <input type="text" className="form-control" id="codCard" defaultValue="737" />                    
                  </div>
                </div>

                <h4 className="mb-3">Dados do usuário</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" id="name" defaultValue="Bruno Samuel Raimundo Pires" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="birth">Data de nascimento</label>
                    <input type="text" className="form-control" id="birth" defaultValue="03/11/1984" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" className="form-control" id="cpf" defaultValue="024.692.438-67" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" className="form-control" id="cnpj" defaultValue="03.884.716/0001-97" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passport">Passaporte</label>
                    <input type="text" className="form-control" id="passport" defaultValue="fghj5678" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input type="text" className="form-control" id="email" defaultValue="luizviana@publiconsult.com.rm" />                    
                    </div>
                  </div> 
                  <div className="col-md-6 mb-3">
                    <label htmlFor="pass">Senha</label>
                    <input type="text" className="form-control" id="pass" defaultValue="123456" />                    
                  </div> 
                  <div className="col-md-2 mb-3">
                    <label htmlFor="ddd">DDD</label>
                    <input type="text" className="form-control" id="ddd" defaultValue="85" />                    
                  </div> 
                  <div className="col-md-4 mb-3">
                    <label htmlFor="phoneNumber">Telefone</label>
                    <input type="text" className="form-control" id="phoneNumber" defaultValue="997932664" />                    
                  </div>                   
                </div>


                <h4 className="mb-3">Dados de endereço</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="address">Endereço</label>
                    <input type="text" className="form-control" id="address" defaultValue="Rua Silva Paulet" />                    
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="number">Número</label>
                    <input type="text" className="form-control" id="number" defaultValue="665" />                    
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="zip">CEP</label>
                    <input type="text" className="form-control" id="zip" defaultValue="60120020" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="complement">Complemento</label>
                    <input type="text" className="form-control" id="complement" defaultValue="ap 802F" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="neigh">Bairro</label>
                    <input type="text" className="form-control" id="neigh" defaultValue="Meireles" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city">Cidade</label>
                    <input type="text" className="form-control" id="city" defaultValue="Fortaleza" />                    
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="country">País</label>
                    <input type="text" className="form-control" id="country" defaultValue="Brasil" />                    
                  </div>
                </div>
              </form>
            </div>
          </div>     
        </div>
              
  );

  export default NewComponent;