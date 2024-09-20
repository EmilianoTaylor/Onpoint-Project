import './SecondSlide.scss'
import layer1 from './imagesSecondSlide/layer1.png'
import layer2 from './imagesSecondSlide/layer2.png'
import layer3 from './imagesSecondSlide/layer3.png'
import layer4 from './imagesSecondSlide/layer4.png'
import layer5 from './imagesSecondSlide/layer5.png'
import title from './imagesSecondSlide/title.png'
import textSecSlide from './imagesSecondSlide/textSecSlide.png'
import contentBackground from './imagesSecondSlide/body_txt.png'


export default function SecondSlide () {

	

	return (
		<div className="secondSlide">
			<img src={layer1} alt="" className='second Layer1'/>
			<img src={layer2} alt="" className='second Layer2'/>
			<img src={layer3} alt="" className='second Layer3'/>
			<img src={layer4} alt="" className='second Layer4'/>
			<img src={layer5} alt="" className='second Layer5'/>
			<img src={title} alt="" className='LoremImg'/>

			<img src={contentBackground} alt="" className='contentBackground'/>
			<div className="scroll-container">
				<div className="scroll-content">
					<img src={textSecSlide} alt="" className='textSecSlide'/>
				</div>
			</div>

		</div>
	)
}