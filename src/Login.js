import React, {useState, useEffect} from "react";
import axios from "axios";

function Login() {
	const [inputId, setInputId] = useState('');
	const [inputPw, setInputPw] = useState('');

	const handleInputId = (e) => {
		setInputId(e.target.value)
	}

	const handleInputPw = (e) => {
		setInputPw(e.target.value)
	}

	const onClickRegister = () => {
		axios.post('/v1/register', {
			username: inputId,
			password: inputPw,
		})
		//성공시 then 실행
		.then(function (response) {
			console.log(response);
		})
		//실패 시 catch 실행
		.catch(function (error) {
			console.log(error);
		});
		console.log('click login')
	}
	const onClickLogin = () => {

	}
	useEffect(() => {
		axios.get('/info')
		.then(res => console.log(res))
		.catch()
	},
	[])

	return(
		<div>
			  <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
			<div>
                <button type='button' onClick={onClickRegister}>Register</button>
            </div>
		</div>
	)
}

export default Login;
