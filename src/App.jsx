import './App.scss'
import background from './components/imagesFirstSlide/background.jpg'
import homeLogo from './components/imagesFirstSlide/homeLogo.png'
import FirstSlide from './components/FirstSlide'
import SecondSlide from './components/SecondSlide'
import ThirdSlide from './components/ThirdSlide'
import { useState } from 'react'
import buttonImg from './components/imagesFirstSlide/Button.png'
import onpointLogo from './components/imagesFirstSlide/onpointLogo.png'
import projectLogo from './components/imagesFirstSlide/projectLogo.png'


function App() {

	const slides = [
		{ id: 1, content: <FirstSlide /> },
		{ id: 2, content: <SecondSlide /> },
		{ id: 3, content: <ThirdSlide /> },
	];

	const [currentSlide, setCurrentSlide] = useState(0);
	let startX = 0;

	const handleTouchStart = (e) => {
		startX = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		if (!startX) return;

		const currentX = e.touches[0].clientX;
		const diffX = startX - currentX;

		if (diffX > 50) {
				nextSlide();
				startX = 0;
		} else if (diffX < -50) {
				prevSlide();
				startX = 0;
		}
	};

	const goHome = () => {
		if (currentSlide > 0) {
			setCurrentSlide(0);
	}}

	const nextSlide = () => {
		if (currentSlide < slides.length - 1) {
				setCurrentSlide(currentSlide + 1);
		}
	};

	const prevSlide = () => {
			if (currentSlide > 0) {
					setCurrentSlide(currentSlide - 1);
			}
	};
	console.log(currentSlide)

	return (
		<>
		<img src={homeLogo} className='homeBtn' alt="" onClick={goHome}/>
		<img src={projectLogo} className='projectLogo' alt="" />
		<img src={onpointLogo} className='onpointLogo' alt="" />
			<div
					className="mainDiv"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					style={{ transform: `translateX(-${currentSlide * 100}vw)`, transition: 'transform 0.5s ease' }}>
					<img src={background} className='background' alt="" />
					<img src={buttonImg} className='buttonImg' alt="" onClick={nextSlide}/>

					{slides.map((slide) => (
							<div className="slide" key={slide.id}>
									{slide.content}
							</div>
					))}
			</div>
		</>
);
}

export default App
