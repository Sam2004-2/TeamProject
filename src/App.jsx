import Card from './Components/Card.jsx'
import Pic1 from './assets/img1.jpg'
import Pic2 from './assets/img2.jpg'
import Pic3 from './assets/img3.jpg'
import Pic4 from './assets/img4.jpg'

function App() {
	return(
		<>
			<Card title="What Is Important To Me" image={Pic1} />
			<Card title="My Goals" image={Pic2} />
			<Card title="SJOG Staff" image={Pic3} />
			<Card title="My Interests" image={Pic4} />
			<Card title="How To Talk To Me" image={Pic1} />
			<Card title="Being Myself" image={Pic2} />
			<Card title="My Planning Team" image={Pic3} />
			<Card title="What Staff Do" image={Pic4} />
			<br /><br /><br /><br /><br />
		</>
	);
}

export default App
