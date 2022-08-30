
export default function Button({
	submit = false,
	styles,
	children,
	onChange,
	onClick,
}) {
	return (
		<button
			type={submit ? 'submit' : 'button'}
			className={`btn ${styles}`}
			onChange={onChange}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
