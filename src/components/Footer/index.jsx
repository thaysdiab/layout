import './styles.css'
import FacebookIcon from '../../assets/images/facebook.png'
import InstagramIcon from  '../../assets/images/instagram.png'
import LinkedinIcon from  '../../assets/images/linkedin.png'
import YoutubeIcon from  '../../assets/images/youtube.png'
import VisaIcon from '../../assets/images/visa.png'
import MastercardIcon from '../../assets/images/mastercard.png'
import VtexIcon from '../../assets/images/vtex-footer.png'
import MaeztraIcon from '../../assets/images/maeztra-footer.png'

export const Footer = () => {
    return (
        <>
        <div className='footer'>

            <div className='newsletter-footer'>
                <p>Receba nossa newsletter</p>
                <form className='newsletter-footer-form' action="">
                    <input type="email" placeholder='Digite o seu e-mail' />
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className='footer-institutional'>
                <div className='footer-institutional-infos'>
                    <p>Informações</p>
                    <ul>
                        <li>
                            <a href="#">
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a href="#"> Prazo de Envio</a>
                        </li>
                        <li>
                            <a href="#">Trocas e Devoluções</a>
                        </li>
                        <li>
                            <a href="#">Promoções e Cupons</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-institutional-infos'>
                    <p>Minha conta</p>
                    <ul>
                        <li>
                            <a href="#">Minha Conta</a>
                        </li>
                        <li>
                            <a href="#">Meus Pedidos</a>
                        </li>
                        <li>
                            <a href="#">Cadastre-se</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-institutional-infos'>
                    <p>Onde nos Encontrar</p>
                    <ul>
                        <li>
                            <a href="#">Lojas</a></li>
                        <li>
                            <a href="#">Endereço</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer-copyright'>
                <div className="social">
                    <a href="https://www.facebook.com/maeztraconsultoria/?locale=pt_BR">
                        <img src={FacebookIcon} alt="Facebook Icon" />
                    </a>
                    <a href="https://br.linkedin.com/company/maeztra">
                        <img src={LinkedinIcon} alt="Linkedin Icon" />
                    </a>
                    <a href="https://www.instagram.com/maeztra_consultoria/?hl=pt">
                        <img src={InstagramIcon} alt="Instagram Icon" />
                    </a>
                    <a href="https://www.youtube.com/user/aQuatroDigital">
                        <img src={YoutubeIcon} alt="Youtube Icon" />
                    </a>
                </div>

                <div className='payments'>
                    <img src={VisaIcon} alt="Visa Icon" />
                    <img src={MastercardIcon} alt="Mastercard Icon" />
                    <img src={VisaIcon} alt="Visa Icon" />
                    <img src={MastercardIcon} alt="Mastercard Icon" />
                </div>

                <div className="copyright">
                    <div className='copyright-content'>
                        <img src={VtexIcon} alt="Vtex Icon" />
                    </div>
                    <div className='copyright-content'>
                        <img src={MaeztraIcon} alt="Maeztra Icon" />
                    </div>
                   
                </div>
            </div>
        </div>

        <div className='footer-mobile'>
            <div className='newsletter-footer'>
            <p>Receba nossa newsletter</p>
                <form className='newsletter-footer-form' action="">
                    <input type="email" placeholder='Digite o seu e-mail' />
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className='footer-institutional'>
                <div className='footer-institutional-infos'>
                    <div className='click dropdown-open-option'>
                    <p>Informações</p>
                    <p className='dropdown-open'>+</p>
                    </div>
                    
                    <ul className='dropdown-item1'>
                        <li>
                            <a href="#">
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a href="#"> Prazo de Envio</a>
                        </li>
                        <li>
                            <a href="#">Trocas e Devoluções</a>
                        </li>
                        <li>
                            <a href="#">Promoções e Cupons</a>
                        </li>
                    </ul>
                </div>
                <div className='click footer-institutional-infos'>
                    <div className='dropdown-open-option'>
                    <p>Minha conta</p>
                    <p className='dropdown-open'>+</p>
                    </div>
                    
                    <ul className='dropdown-item2'>
                        <li>
                            <a href="#">Minha Conta</a>
                        </li>
                        <li>
                            <a href="#">Meus Pedidos</a>
                        </li>
                        <li>
                            <a href="#">Cadastre-se</a>
                        </li>
                    </ul>
                </div>
                <div className='click footer-institutional-infos'>
                    <div className='dropdown-open-option'>
                    <p>Onde nos Encontrar</p>
                    <p className='dropdown-open'>+</p>
                    </div>
                   
                    <ul className='dropdown-item3'>
                        <li>
                            <a href="#">Lojas</a></li>
                        <li>
                            <a href="#">Endereço</a></li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    )

}