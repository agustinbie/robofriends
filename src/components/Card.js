import React from "react";


// const Card = (props) => {
// 	return (

// 		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
// 			<img src={`https://robohash.org/${props.id}?200x200`} alt="robot photo"/>
// 			<div>
// 			<h2>{props.name}</h2>
// 			<p>{props.email}</p>
// 			</div>
// 		</div>);
// }

const Card = ({name, email, id}) => {
	return (

		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?100x100`} alt="robot photo"/>
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>);
}  //desestructurado

export default Card;

//el link de la imagen tiene el string variable con {``} para que cambie de imagen segun el id del robot