import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


class Clock extends React.Component {
  constructor (props) {
  super (props);
  this.state = {
    date : new Date(),
    caption : "World",
  };
}

//Запуск setInterval() после создания компонента

componentDidMount() {
  this.timerId = setInterval(() => this.tick(), 1000);

}

// очистка интервала перед удалением компонента 

componentWillUnmount() {
  clearInterval(this.timerId);
}

//алгоритм исполняющий обновление setInterval() раз в секунду

tick() {
  if(this.state.caption === 'World'){
    this.setState({
      date: new Date(),
      caption : "React" 
    });
  }else{
    this.setState({
      date: new Date(),
      caption : "World" 
    });
  }
}
  render(){
    return (
      <div className="container">
        <h1 className="caption">Hello, {this.state.caption}!</h1>
        <h2>It is 
          <div className="beforeTime">
            <span className="time">{this.state.date.toLocaleTimeString()}</span>
          </div>
        </h2>
      </div>
    );
  }
}

  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );