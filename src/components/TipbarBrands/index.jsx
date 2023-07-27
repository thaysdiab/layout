import './styles.css'
import Comma from '../../assets/images/comma.png'
import Melissa from '../../assets/images/melissa.png'
import Forever21 from '../../assets/images/forever21.png'
import Zara from '../../assets/images/zaraa-brand.png'
import AnnTaylor from '../../assets/images/anntaylorr.png'

export const TipbarBrands = () => {

    return (
        <div className='tipbar-brands'>
            <div className='tipbar-brands-title'>
                <h1>Marcas Parceiras</h1>
            </div>
            <div className='brands-images-container'>
                <div className='brand-images'>
                    <img src={Comma} alt="Comma Brand" />
                </div>
                <div className='brand-images'>
                    <img src={Melissa} alt="Melissa Brand " />
                </div>
                <div className='brand-images'>
                    <img src={Forever21} alt="Forever21 Brand " />
                </div>
                <div className='brand-images'>
                    <img src={Zara} alt=" Zara Brand " />
                </div>
                <div className='brand-images'>
                    <img src={AnnTaylor} alt="Ann Taylor Brand" />
                </div>
            </div>
        </div>
    )
}