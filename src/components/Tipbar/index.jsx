import './styles.css';
import EarthIcon from '../../assets/images/earth-icon.png'
import StockIcon from '../../assets/images/stock-icon.png'
import ChangeIcon from '../../assets/images/change-icon.png'
import DiscountIcon from '../../assets/images/discount-icon.png'
import DeliveryIcon from '../../assets/images/delivery-icon.png'


export const Tipbar = () => {

    return (
        <>
            <div className='tipbar'>
                <div className='title'>
                    <h1>Por que comprar na Maeztra?</h1>
                </div>
                <div className='tipbar-carousel'>
                    <div className='tipbar-infos'>
                        <div className='tipbar-image'>
                            <img src={EarthIcon} alt="Earth Icon" />
                        </div>
                        <div className='tipbar-text'>
                            <h1>Produtos Importados</h1>
                            <p>Produtos de Alta Qualidade</p>
                        </div>
                    </div>
                    <div className='tipbar-infos'>
                        <div className='tipbar-image'>
                            <img src={StockIcon} alt="Stock Icon" />
                        </div>
                        <div className='tipbar-text'>
                            <h1>Estoque no Brazil</h1>
                            <p>Produtos mais perto de você!</p>
                        </div>
                    </div>
                    <div className='tipbar-infos'>
                        <div className='tipbar-images'>
                            <img src={ChangeIcon} alt="Change Icon" />
                        </div>
                        <div className='tipbar-text'>
                            <h1>Trocas Garantidas</h1>
                            <p>Trocas em até 48 horas, veja as regras</p>
                        </div>
                    </div>

                    <div className='tipbar-infos'>
                        <div className='tipbar-image'>
                            <img src={DiscountIcon} alt="Discount Icon" />
                        </div>
                        <div className='tipbar-text'>
                            <h1>Ganhe 5%off</h1>
                            <p>Pagando à vista no Cartão</p>
                        </div>
                    </div>
                    <div className='tipbar-infos'>
                        <div className='tipbar-image'>
                            <img src={DeliveryIcon} alt="Delivery Icon" />
                        </div>
                        <div className='tipbar-text'>
                            <h1>Frete Grátis</h1>
                            <p>Em compras acima de R$499,00</p>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}