import './App.css';
import Hello from './hello';
import Wrapper from './Wrapper';

function App() {
  return(
	<Wrapper>
  		<Hello name="Seunggi" color="blue" isReal={true}/>
  		<Hello/>
	</Wrapper>
	);
}

export default App;
