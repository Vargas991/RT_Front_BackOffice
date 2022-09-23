import { Divider, IconButton, TextareaAutosize } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { CheckCircle, Cancel } from '@mui/icons-material'
function ResultTest() {
	const { id, idTest } = useParams()
	useEffect(() => {
		console.log(id, idTest)
	}, [id, idTest])

	return (
		<div className="container">
			<div className="title-test">
				<h1>Survey #idSurvey</h1>
				<div>
					<Button styles="secondary">Decline</Button>
					<Button styles="primary">Approve</Button>
				</div>
			</div>
			<p>Date of Creation: 2022/09/23</p>
			<Divider />
			<div>
				<div className="surveyed-data">
					<h2>Pedro Perez #idTest</h2>
					<p>Phone:+1 4545 1212 454</p>
					<p>Email: email@test.com</p>
				</div>
				<div className="container-section-references">
					<h3>References</h3>
					<div className="container-references">
						<div className="reference">
							<h4>Reference #1</h4>
							<p>Phone: +1 4545 1212 454</p>
							<p>Title: Engineer</p>
						</div>
						<div className="reference">
							<h4>Reference #2</h4>
							<p>Phone: +1 4545 1212 454</p>
							<p>Title: Engineer</p>
						</div>
						<div className="reference">
							<h4>Reference #3</h4>
							<p>Phone: +1 4545 1212 454</p>
							<p>Title: Engineer</p>
						</div>
					</div>
				</div>
				<Divider />
				<div className="section-container">
					<h3 className="margin-title">Section Title #1</h3>
					<h4 className="margin-title">Questions</h4>
					<div className="container-questions">
						<div className="question-card">
							<div className="question-header">
								<p>
									QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
									nesciunt non #1
								</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit amet
								consectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.
							</p>
						</div>
						<div className="question-card">
							<div className="question-header">
								<p>Question #1</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa.
							</p>
						</div>
						<div className="question-card">
							<div className="question-header">
								<p>Question #1</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa.
							</p>
						</div>
					</div>
				</div>
				<Divider />
				<div className="section-container">
					<h3 className="margin-title">Section Title #2</h3>
					<h4 className="margin-title">Questions</h4>
					<div className="container-questions">
						<div className="question-card">
							<div className="question-header">
								<p>
									QuestionLorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
									nesciunt non #1
								</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa. Lorem, ipsum dolor sit amet
								consectetur adipisicing elit. Quasi nesciunt non sequi quis odio ipsa.
							</p>
						</div>
						<div className="question-card">
							<div className="question-header">
								<p>Question #1</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa.
							</p>
						</div>
						<div className="question-card">
							<div className="question-header">
								<p>Question #1</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa.
							</p>
						</div>
						<div className="question-card">
							<div className="question-header">
								<p>Question #1</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa.
							</p>
						</div>
						<div className="question-card">
							<div className="question-header">
								<p>Question #1</p>
								<div className="flex-center">
									<IconButton>
										<Cancel color="warning" />
									</IconButton>
									<IconButton>
										<CheckCircle color="success" />
									</IconButton>
								</div>
							</div>
							<Divider />
							<p className="answer-text">
								A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
								nesciunt non sequi quis odio ipsa.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Divider />
			<div className="observation-section">
				<h4>Observations</h4>
				<TextareaAutosize
					minRows={3}
					placeholder="Please add a remark about this test"
					style={{
						width: '100%'
					}}
				/>
			</div>
			<Divider />
			<div className="final-buttons">
				<Button styles="secondary">Back</Button>
				<Button styles="primary">Save</Button>
			</div>
		</div>
	)
}

export default ResultTest
