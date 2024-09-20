import './FirstSlide.scss'
import backgroundText from './/imagesFirstSlide/background-text.png'
import mainText from './imagesFirstSlide/text.png'
import home from './imagesFirstSlide/home.png'
import layer7 from './imagesFirstSlide/layer_7.png'
import pinkTwo from './imagesFirstSlide/pink_two.png'
import layer4c2 from './imagesFirstSlide/layer_4_copy_2.png'
import pinkOne from './imagesFirstSlide/pink_one.png'
import layer4c from './imagesFirstSlide/layer_4_copy.png'
import bakti_one from './imagesFirstSlide/bakti_anim.png'
import bakti_two from './imagesFirstSlide/bakti_anim2.png'
import layer8 from './imagesFirstSlide/Layer_8.png'
import layer4 from './imagesFirstSlide/layer_4.png'


export default function FirstSlide () {



	return (
		<div className='firstSlide'>
				<img src={mainText} className='mainText' alt="" />
				<img src={layer7} className='layer7' alt="" />
				<img src={pinkTwo} className='pinkTwo' alt="" />
				<img src={layer4c2} className='layer4c2' alt="" />
				<img src={pinkOne} className='pinkOne' alt="" />
				<img src={layer4c} className='layer4c' alt="" />
				<img src={bakti_one} className='bakti_one' alt="" />
				<img src={bakti_two} className='bakti_two' alt="" />
				<img src={layer8} className='layer8' alt="" />
				<img src={layer4} className='layer4' alt="" />
			</div>
	)
}