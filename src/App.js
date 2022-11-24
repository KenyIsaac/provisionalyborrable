import Clock from "./Clock"
import Home from './Home'
import Hekatomb from './Hekatomb.jpg'

function App() {
	return (
		<div className='container' style={{ backgroundImage: `url("${Hekatomb}")` }}>
			<Home />
			<Clock />
		</div>
	)
}

export default App
