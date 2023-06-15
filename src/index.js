import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card';
import reportWebVitals from './reportWebVitals';
import "tachyons";
import CardList from "./components/CardList";
import App from "./containers/App";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>  
//     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>  
//     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>  
//     <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>  
//     <Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>  
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>  
  </React.StrictMode>
);
//si no tiene extension toma por defecto que es .js (Card.js)

//una vez terminado se puede correr npm run build en el terminal para que react minimice y optimice todo el codigo en una nueva carpeta "build"



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
