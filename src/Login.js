import React, {useState, useEffect} from "react";
import axios from "axios";

function Login() {
	const [inputId, setInputId] = useState('id');
	const [inputPw, setInputPw] = useState('password');

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
		<div class="row">
			<div class="col-12" id="topbar"></div>
			<div class="col-12 row" id="loginPageContent">
				<div class="col-12">
					<img id="birdLogo" src="img/birdhouse-logo.png"></img>
				</div>
				<div class="col-12" id="loginFormStyle">
					<h2 id="loginTitle">Login</h2>
				</div>
				<div class="col-12" id="idForm">
					<label htmlFor='input_id'></label>
					<input type='text' name='input_id' value={inputId} onChange={handleInputId} />
				</div>
				<div class="col-12" id="pwForm">
					<label htmlFor='input_pw'></label>
					<input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
				</div>
				<div class="col-12" id="loginButtonGroup">
					<button id='loginButton'type='button' onClick={onClickLogin}>Login</button>
					<button id='registerButton' type='button' onClick={onClickRegister}>Register</button>
				</div>
			</div>
		</div>
	)
}

export default Login;
