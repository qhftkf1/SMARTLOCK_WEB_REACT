import React from "react";
import Wrapper_test from "./Wrapper_test";
function Hello({name, color}){
	const test = 'ddd';
	return (
	<Wrapper_test test={test}>
		<div style={{color: color}}>hello! {test}</div>
	</Wrapper_test>
	);
}
Hello.defaultProps={
	name: 'nobody',
	color: 'pink'
}
export default Hello;
