import React, {Component} from 'react';
import Navbar from './Navbar';
import './App.css';
import Sidenav from './Sidenav';
import Card from './Card';

export default class App extends Component {
  state = {
    name: 'Admin Fodão',
    email: 'admin@admin.net',
    nusp: '',
    gameJam: true,
    presence: 7,
    totalPresence: 15, 
    presenceEmpresarial: 5,
    totalPresenceEmpresarial:10
  }

  componentDidMount(){
    //Pegar dados do backend
    //this.setState({dados})
  }

  render(){
    return (
      <main>
        <Navbar/>
        <Sidenav/>
        <section>
          <div className="row container">
            <div className="s12 col title"><h4>{`Olá, ${this.state.name.split(' ')[0]}`}</h4></div>
            <div className="m6 s12 col">
              <Card title="Informações" icon="edit" action="Editar" link = "#">
                <p><span class="label">Nome: </span>{this.state.name}</p>
                <p><span class="label">Email: </span>{this.state.email}</p>	
                <p><span class="label">Nº USP: </span>{this.state.nusp ? this.state.nusp : "Não Informado"}</p>
                <br/>
                <div ><label>*Note que, para os alunos da USP, o controle de presença é feito pelo nº USP, portanto é necessário que ele seja informado para que a presença seja corretamente contabilizada.</label></div>
              </Card>

              <Card title="Presença nos eventos" icon="visibility" action="Ver Detalhes" link="#">
                <p><span class="label">Presença total:</span>{` ${this.state.presence}/${this.state.totalPresence} (${(this.state.presence / this.state.totalPresence * 100).toFixed(1)}%)`}</p>
                <div class="progress">
                  <div class="determinate"></div>
                </div>
                <p><span class="label">Palestras empresariais:</span>{` ${this.state.presenceEmpresarial}/${this.state.totalPresenceEmpresarial} (${(this.state.presenceEmpresarial / this.state.totalPresenceEmpresarial * 100).toFixed(1)}%)`}</p>
                <div class="progress">
                  <div class="determinate"></div>
                </div>
              </Card>

              <Card title="Pagamento" icon="send" action="Enviar Pagamento" link="#">
                <p>Você ainda não realizou seu pagamento</p>
                <p>Os pagamentos poderão ser enviados a partir de DATA</p>
              </Card>
            </div>
            <div className="m6 s12 col">
              <Card title="Minicursos">
                <p>Minicursos vão abrir dia DATA as HORA</p>
              </Card>
              
              { this.state.gameJam ?
              <Card title="Game Jam" icon="edit" action="Editar" link="#">
                <p>Inscrição: Está inscrito</p>
              </Card>
              : 
              <Card title="Game Jam" icon="input" action="Inscrever-se" link="#">
                <p>Inscrição: Não está inscrito</p>
              </Card>
              }

              <Card title="Semcomp Overflow">
                <p>Procure um chapéu seletor</p>
              </Card>

              
            </div>
          </div>
        </section>
      </main>
    )
  }
}
