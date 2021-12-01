import React from "react";
import Wrapper_test from "./Wrapper_test";
function Hello({name, color, isReal}){
	const test = 'ddd';
	return (
	<>

		<div>
			{isReal ? <div>Is Real</div> : null}
		</div>
	</>
	);
}
Hello.defaultProps={
	name: 'nobody',
	color: 'pink'
}
export default Hello;
