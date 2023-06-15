import React, {Component} from "react";

class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state = {hasError:false};
	}


	componentDidCatch(error, info){
		this.setState({hasError: true})   //no entendi bien, es un life cycle hook, catchea el error y cambia el state a true
	}


	render(){
		if (this.state.hasError){
			return <h1>Ooops thats not good</h1>   //si hasError es true render este h1
		}
		return this.props.children  //si no hay error render el componente que está entre <ErrorBoundry></ErrorBoundry>
	}
}

export default ErrorBoundry;