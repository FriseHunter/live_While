import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


function FormatData(props){
  return(
    <h2>It is 
          <div className="beforeTime">
            <span className="time">{props.date.toLocaleTimeString()}</span>
          </div>
        </h2>
  );
}
class Clock extends React.Component {
  constructor (props) {
  super (props);
  this.state = {
    date : new Date(),
    caption : "Hello, World",
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
  if(this.state.caption === 'Hello, World'){
    this.setState({
      date: new Date(),
      caption : "I'm studying React now!!" 
    });
  }else{
    this.setState({
      date: new Date(),
      caption : "Hello, World" 
    });
  }
}
  render(){
    return (
      <div className="container">
        <h1 className="caption">{this.state.caption}!</h1>
        <FormatData date={this.state.date}/>
      </div>
    );
  }
}

  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );