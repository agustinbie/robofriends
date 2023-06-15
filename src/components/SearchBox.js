import	React from "react";


//es muy importante recibir los props entre {} sino tira error, ejemplo ({searchfield, searchChange})
const SearchBox = ({searchfield, searchChange}) => {
return (
	<div className="pa2">
	<input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={searchChange}/>
	</div>
	);

}
//los parametros de className son de tachyon

export default SearchBox;