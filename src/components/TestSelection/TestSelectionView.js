import React from 'react';
import { InputCheckbox } from '../InputCheckbox/InputCheckboxView';

export class TestSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suite : {}
        }
    }
    handleChecked = (value) => {
        if(value.file)
            this.state.suite[value.id] = value.file
        else
            delete this.state.suite[value.id]
        console.log(this.state)
    }
    render() {
        return (
            <React.Fragment>
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Seleção de Testes</span>
                </h4>
                <div className="row">
                    <InputCheckbox
                        id="loginCPF"
                        file="spec/login/loginCPF_spec.js"
                        label="Login CPF"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="loginCNPJ"
                        file="spec/login/loginCNPJ_spec.js"
                        label="Login CNPJ"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="loginPassport"
                        file="spec/login/loginPassport_spec.js"
                        label="Login Passaporte"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="loginInvalid"
                        file="spec/login/loginInvalid_spec.js"
                        label="Login Inválido"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="forgotPassword"
                        file="spec/login/forgotPass_spec.js"
                        label="Esqueceu Senha"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="accountExistent"
                        file="spec/login/accountExistent_spec.js"
                        label="Conta Inexistente"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="cnpjAccount"
                        file="spec/login/cnpjAccount_spec.js"
                        label="Conta com CNPJ"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="cpfAccount"
                        file="spec/login/cpfAccount_spec.js"
                        label="Conta com CPF"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="passportAccount"
                        file="spec/login/passportAccount_spec.js"
                        label="Conta com Passaporte"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="fluxoAutAntes"
                        file="spec/login/fluxoAutAntes_spec.js"
                        label="Fluxo Antes"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="fluxoAutDurante"
                        file="spec/login/fluxoAutDurante_spec.js"
                        label="Fluxo Durante"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="fluxoUserEPassageiro"
                        file="spec/login/fluxoUserEPassageiro_spec.js"
                        label="Fluxo Passageiro"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="fluxoUserEstudante"
                        file="spec/login/fluxoUserEstudante_spec.js"
                        label="Fluxo Estudante"
                        handler={this.handleChecked}/>
                    <InputCheckbox
                        id="fluxoIdaVoltaUserEPassageiro"
                        file="spec/login/fluxoIdaVoltaUserEPassageiro_spec.js"
                        label="Fluxo Ida e Volta"
                        handler={this.handleChecked}/>
                </div>
            </React.Fragment>
        );
    }
}