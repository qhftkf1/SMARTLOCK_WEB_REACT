import React, {useState} from "react";
import Wrapper_test from "./Wrapper_test";
function Hello({name, color, isReal}){
	const [value, setValue] = useState('');
	const onChange =(e) => {
		setValue(e.target.value);
	}
	const onReset=()=>{
		setValue('');
	}
	return (
	<>
		<div>
			{isReal ? <div>Is Real</div> : null}
		</div>
		<input onChange={onChange} value={value}></input>
		<button onClick={onReset}>Reset</button>
		<div>{value}</div>
	</>
	);
}
Hello.defaultProps={
	name: 'nobody',
	color: 'pink'
}
export default Hello;
