import { type ComponentPropsWithRef, forwardRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ label, id, ...props },
	ref
) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} ref={ref} />
		</p>
	);
});

export default Input;
