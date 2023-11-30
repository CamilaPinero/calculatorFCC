interface ButtonI {
	id: string;
	value: number | string;
	disabled?: boolean;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ id, value, disabled, handleClick }: ButtonI) => {
	return (
		<button onClick={handleClick} id={id} disabled={disabled}>
			{value}
		</button>
	);
};
