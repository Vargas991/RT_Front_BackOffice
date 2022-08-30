// // const EventForm = React.lazy(() => import('../../../views/dashboard/events'));
// // const EventList = React.lazy(() =>
//   import('../../../views/dashboard/eventList')
// );

import SurveyLayout from '../../../layout/SurveyLayout'
import Create from '../../../pages/CreateSurvey'
import Overview from '../../../pages/Overview'
import Questions from '../../../pages/Questions'
import Results from '../../../pages/Results'
import ResultTest from '../../../pages/ResultTest'
import UpdateSurvey from '../../../pages/UpdateSurvey'

export const survey = [
	{
		path: 'survey',
		children: [
			{
				path: ':id',
				name: 'Overview',
				element: <SurveyLayout />,
				children: [
					{
						path: 'overview',
						element: <Overview />
					},
					{
						path: 'results',
						element: <Results />
					},
					{
						path: 'results/:idTests',
						element: <ResultTest />
					},
					{
						path: 'questions',
						element: <Questions />
					}
				]
			},
			{
				path: ':id/update',
				name: 'update',
				element: <UpdateSurvey />
			}
		]
	},
	{
		path: 'survey/create',
		element: <Create />
	}
]
