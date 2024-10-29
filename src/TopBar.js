import './App.css'
import MenuButtons from './MenuButtons.js'
import Title from './Title.js'

export default function TopBar() {
	return (
		<>
			<div id='top-bar'>
				<Title />
				<MenuButtons />
			</div>
		</>
	)
}
