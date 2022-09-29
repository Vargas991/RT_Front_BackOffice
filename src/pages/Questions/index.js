import Button from '../../components/Button'
import QuestionsComponent from '../../components/questions/QuestionsComponent'

function Questions() {
	return <div className='container'>
		<div>
			<h2>Sections</h2>
			<Button styles='primary'> Add Section</Button>
			<QuestionsComponent />
		</div>
	</div>
}

export default Questions
