import React, {Component} from "react";  
import CardList from "../components/CardList"; //   ./ indica el mismo directorio;  ../ indica el directorio padre o anterior
import {robots} from "../robots";  //  solo hace falta volver a src para seleccionar robots.js
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";


// const App =() => {
// 	return (
// 		<div className="tc">
// 			<h1>RoboFriends</h1>
// 			<SearchBox />
// 			<CardList robots={robots}/>
// 		</div>
// 		);
// }



class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
	}

	// onSearchChange(event) {
	// 	console.log(event.target.value);
	// 	const filteredRobots = this.state.robots.filter(robot => {return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
	// } //pero si creas la funcion asi onSearchChange(event) {}  el this va a hacer referencia al input que esta en el SearchBox component y no al state de App.js

// 	onSearchChange = (event) => {

// 		this.setState({searchfield: event.target.value})  //cambia el state para cada vez que se produzca el evento para que haga la comparacion .includes con cada tecla que se presione
// 		const filteredRobots = this.state.robots.filter(robots => {
// 			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
// 		});
// 		console.log(filteredRobots);
		
// 	} 
// //

// 	render(){
// 		return (
// 		<div className="tc">
// 			<h1>RoboFriends</h1>
// 			<SearchBox  searchChange={this.onSearchChange}/>
// 			<CardList robots={this.state.robots}/>
// 		</div>
// 		);
// 	}

// Ahora filteredRobots se puede usar como props en lugar de this.state.robots en el render()

	onSearchChange = (event) => {

		this.setState({searchfield: event.target.value})  //cambia el state para cada vez que se produzca el evento para que haga la comparacion .includes con cada tecla que se presione
		
		
		
	} 
//


	// render(){

	// 	const filteredRobots = this.state.robots.filter(robot => {
	// 		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});
		
	// 	if (this.state.robots.length === 0){
	// 		return <h1 className="tc f2">Loading..</h1>
	// 	}else{//este if es por si la request del fetch de mas abajo tarda un par de segundos
	// 	return (
	// 	<div className="tc">
	// 		<h1 className="f1">RoboFriends</h1>
	// 		<SearchBox  searchChange={this.onSearchChange}/>
	// 		<Scroll>
	// 		<CardList robots={filteredRobots}/>
	// 		</Scroll>
	// 	</div>
	// 	);}


	render(){
		const {robots, searchfield} = this.state;  //usando destructuring para no repetir this.state tanto
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())});
		
		return !robots.length ?  // si robots.length es 0 equivale a false, si lo negas pasa a ser true y se ejecuta el if con el h1 loading...
			 <h1 className="tc f2">Loading..</h1> :
		 (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox  searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
				<CardList robots={filteredRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
		);  // reemplaza el if else por un ternary  a ? true : false
	}

	// componentDidMount(){
	// 	this.setState({robots: robots})// el state al principio es un array vacio, ahora pasa a ser el array de objetos robots.js
	// }// life cycle methods, react primero ejecuta constructor, luego render, luego componenDidMount, y si el state se actualiza vuelve a ejecutar el render
	componentDidMount(){
		fetch ("https://jsonplaceholder.typicode.com/users").then(response=> response.json()).then(users => this.setState({robots: users}))
	}// el metodo fetch viene con su propio metodo .json() que es parsear el json a javascript. then response devuelve una response parseada y el segundo then hace que esa nueva data "users" pase a actualizar el state

}


export default App;