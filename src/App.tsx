import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
	return (
		<main>
			<Container
				as={Button}
				onClick={() => {
					console.log('ok');
				}}>
				Click me
			</Container>
			<p>
				<Button>A Button</Button>
			</p>
			<p>
				<Button href='https://google.com'>A Link</Button>
			</p>
			<Input id='name' label='Your name' type='text' />
			<Input id='age' label='Your age' type='number' />
		</main>
	);
}

export default App;
