import { CreateOrEdit } from '../components/CreateOrEdit'
import { useNavigate } from 'react-router-dom'

function Create() {
	const navigate = useNavigate()
	return (
		<div className="container">
			<CreateOrEdit navigate={navigate} />
		</div>
	)
}

export default Create
