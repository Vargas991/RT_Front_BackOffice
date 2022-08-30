import { useRef, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export default function Copy({ value }) {
	const [copySuccess, setCopySuccess] = useState('')
	const textAreaRef = useRef(null)

	function copyToClipboard() {
		textAreaRef.current.select()
		document.execCommand('copy')
		// This is just personal preference.
		// I prefer to not show the whole text area selected.
		// e.target.focus();
		setCopySuccess('Copied!')
	}

	return (
		<div>
			{
				/* Logical shortcut for only displaying the 
          button if the copy command exists */
				document.queryCommandSupported('copy') && (
					<div>
						<ContentCopyIcon
							onClick={() => {
								navigator.clipboard.writeText(value)
							}}
						/>
						<ContentCopyIcon onClick={copyToClipboard} />
						{copySuccess}
					</div>
				)
			}
			<form>
				<textarea type="text" ref={textAreaRef} value={value} />
			</form>
		</div>
	)
}
