import './ThirdSlide.css'
import keyMessage from './imagesThirdSlide/titleTwo.png'
import brendTitle from './imagesThirdSlide/titleOne.png'
import keyTitleOne from './imagesThirdSlide/txt1.png'
import keyTitleTwo from './imagesThirdSlide/txt2.png'
import buttonMore from './imagesThirdSlide/buttonMore.png'
import bottle from './imagesThirdSlide/bottle.png'
import bubble1 from './imagesThirdSlide/b2.png'
import bubble2 from './imagesThirdSlide/b4.png'
import bubble3 from './imagesThirdSlide/b7.png'
import bubble4 from './imagesThirdSlide/b5.png'
import bubble5 from './imagesThirdSlide/b1.png'
import bubble6 from './imagesThirdSlide/b3.png'
import bubble7 from './imagesThirdSlide/b6.png'
import keysBackground from './imagesSecondSlide/body_txt.png'
import advTitle from './imagesThirdSlide/advTitle.png'
import advOne from './imagesThirdSlide/adv1.png'
import advTwo from './imagesThirdSlide/adv2.png'


export default function ThirdSlide () {
	
	function switchAdv () {
		const advOne = document.getElementById('advOne')
		const advTwo = document.getElementById('advTwo')
		const switchOne = document.querySelector('.switchOne')
		const switchTwo = document.querySelector('.switchTwo')

		if (advOne.classList.contains('visible')) {
			advOne.classList.remove('visible')
			advTwo.classList.add('visible')
			switchOne.classList.remove('light')
			switchTwo.classList.add('light')
		} else {
			advOne.classList.add('visible')
			advTwo.classList.remove('visible')
			switchOne.classList.add('light')
			switchTwo.classList.remove('light')
		}
	}

	function modalCall () {
		setTimeout(() => {
			document.getElementById('switchPanel').classList.add('visible')
			document.querySelector('.btnClose').classList.remove('hidden')
		}, 1000)
		document.getElementById('modalWindow').classList.add('open')
		document.querySelector('.buttonMore').classList.add('hidden')
	}

	function modalClose () {

		setTimeout(() => {
			document.getElementById('modalWindow').classList.remove('open')
			document.querySelector('.buttonMore').classList.remove('hidden')
		}, 500)
		document.querySelector('.btnClose').classList.add('hidden')
		document.getElementById('switchPanel').classList.remove('visible')
	}

	return (
		<div className='thirdSlide'>
			<img src={buttonMore} alt="" className='buttonMore' onClick={modalCall}/>	
			<img src={brendTitle} alt="" className='brendTitle'/>
			<button className='btnClose hidden' onClick={modalClose}>X</button>

			<div className='visibleImages' id='visibleImages'>
				<img src={keyMessage} alt="" className='keyMessage'/>
				<img src={brendTitle} alt="" className='brendTitle'/>
				<img src={keyTitleOne} alt="" className='keyTitleOne'/>
				<img src={keysBackground} alt="" className='keysBackgroundOne'/>
				<img src={keyTitleTwo} alt="" className='keyTitleTwo'/>
				<img src={keysBackground} alt="" className='keysBackgroundTwo'/>
			</div>

			<div className='bottleIndex'>
				<img src={bottle} alt="" className='bottle'/>
				<img src={bubble1} alt="" className='bubble1'/>
				<img src={bubble2} alt="" className='bubble2'/>
				<img src={bubble3} alt="" className='bubble3'/>
				<img src={bubble4} alt="" className='bubble4'/>
				<img src={bubble5} alt="" className='bubble5'/>
				<img src={bubble6} alt="" className='bubble6'/>
				<img src={bubble7} alt="" className='bubble7'/>

				<div className='switchPanel' id='switchPanel'>
					<button className='arrowLeft' onClick={switchAdv}>&lt;</button>
					<span className='switchOne light'></span>
					<span className='switchTwo'></span>
					<button className='arrowRight' onClick={switchAdv}>&gt;</button>
				</div>
			</div>

			<div className='modalWindow' id='modalWindow'>
				<div className='modalBox'>
					<img src={advTitle} alt="" className='advTitle'/>
					<img src={advOne} alt="" className='advOne visible' id='advOne'/>
					<img src={advTwo} alt="" className='advTwo' id='advTwo'/>
				</div>
			</div>
		</div>
	)
}