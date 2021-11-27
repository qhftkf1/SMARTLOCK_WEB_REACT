import React from "react";

function Wrapper_test({children, test}){
	const style = {
		border : '2px solid red',
		padding : '2px'
	}
	return (
		<div style={style}>
			{children}
			{test}
		</div>
	);
}

export default Wrapper_test;
