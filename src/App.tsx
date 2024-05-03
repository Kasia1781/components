import './App.css';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';
import Button from './components/Button';
import { useRef } from 'react';

function App() {
	const customRef = useRef<FormHandle>(null);

	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: number };
		console.log(extractedData);

		customRef.current?.clear();
	}

	return (
		<main>
			<Form onSave={handleSave}>
				<Input id='name' label='Your name' type='text' name='name' />
				<Input id='age' label='Your age' type='number' name='age' />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
		</main>
	);
}

export default App;
