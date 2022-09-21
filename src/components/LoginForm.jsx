import { Divider, FormHelperText, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
export default function LoginForm({ name, password, handleChange }) {
	const navigate = useNavigate()

	return (
		<div className="login-inputs">
			<h1>Recruiting Tool</h1>
			<Divider light />
			<p>Insert your credentials for access to dashboard</p>
			<TextField
				size="small"
				id="outline-name"
				label="Username"
				value={name}
				fullWidth
				onChange={handleChange}
			/>
			<TextField
				size="small"
				id="outlined-password-input"
				label="Password"
				type="password"
				value={password}
				fullWidth
				onChange={handleChange}
			/>
			<div className="helper-text">
				<FormHelperText>
					Forgot your password? <Link to="/">Click Here</Link>
				</FormHelperText>
			</div>
			<Button styles="primary" onClick={() => navigate('/survey/list')}>
				LogIn
			</Button>
		</div>
	)
}
