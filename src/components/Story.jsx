export const Story = ({storyType, componentType, ...props}) =>{
  
	const SpecigicStory = componentType[storyType]
	return <SpecigicStory {...props} />
	// return <SpecigicStory itemNumber={itemNumber} question={question} options={options} />
}