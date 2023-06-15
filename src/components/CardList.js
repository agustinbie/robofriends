import React from "react";
import Card from "./Card";


//los () despues de un return se usan si queres poner varias lineas, si va todo en una sola como en el siguiente map no hace


// const CardList = ({robots}) => {
// 	const cardsArray = robots.map((user, i) => {
// 		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/> 
// 	})
// 	return (
// 		 <React.StrictMode>
// 		 	<div>
//     		{cardsArray}
//     		</div>
//   		</React.StrictMode>
// 		);
// }

const CardList = ({robots}) => {
	return (
		<div>
			{robots.map((user, i) => {
							return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
						})//todo lo que esté dentro de {} es javascript
		}
		</div>
		)
}

export default CardList;