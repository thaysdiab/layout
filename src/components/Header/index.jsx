import './styles.css'
import LogoIcon from '../../assets/images/logo-maeztra-novo.png.png'
import SearchIcon from '../../assets/images/search-button.png'
import BurguerIcon from '../../assets/images/icon-menu.png'
import MinicartIcon from '../../assets/images/icon-shoppingbag.png'

export const Header = () => {
    return (
        <>
        <header>
            <div className='nav'>
            <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra</p>
            </div>

            <div className='header-desktop'>
                <div className='header-content'>
                    <div className='logo'>
                        <img src={LogoIcon} alt="Logo Maeztra" />
                    </div>

                    <div className='header-search'>
                    <input className='search-bar' type="text" placeholder='O que você busca?' />
                    <button className='button-search'>Buscar</button>
                    </div>
                    
                    <div className='header-account'>
                        <button className='my-account'>Minha Conta</button>
                        <button className='wishlist'>Favoritos</button>
                        <button className='minicart'>Meu Carrinho</button>
                        <span className='minicart-itens'>1</span>
                    </div>
                </div>
                
                <div className='header-menu'>
                <ul>
                    <li><a href="#">Novidades</a></li>
                    <li><a href="#">Vestidos</a></li>
                    <li><a href="#">Roupas</a></li>
                    <li><a href="">Sapatos</a></li>
                    <li><a href="#">Lingerie</a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Outlet</a></li>
                </ul>
            </div>
            
            </div>

            <div className='header-mobile'>
                <div className='header-content'>
                    <div className='logo-and-search'>
                        <img src={BurguerIcon} alt="Burguer Icon" />
                        <img src={LogoIcon} alt="Logo Maeztra" />
                    </div>

                    <div className='user-action'>
                        <button className='search'>
                            <img src={SearchIcon} alt="Search Icon" />
                        </button>
                        <button className='wishlist'>
                            <img src={MinicartIcon} alt="Minicart Icon" />
                        </button>
                        <span className='minicart-itens'>1</span>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}