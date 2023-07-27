import { useState } from 'react'
import './styles.css'
import MailIcon from '../../assets/images/newsletter-mail-icon.png'

export const NewsletterPopup = () => {

    const [openNewsletter, setOpenNewsletter] = useState(true);

    const handleCloseNewsletter = () => {
        setOpenNewsletter(false)
    }
    return (
        <>
            <div className={openNewsletter ? 'newsletter-container' : 'hidden'} onClick={handleCloseNewsletter}>
                <div className='newsletter'>
                    <div className='newsletter-close-button'>
                        <button className='close-button' onClick={handleCloseNewsletter}>FECHAR</button>
                    </div>
                    <div className='newsletter-form'>
                        <img src={MailIcon} alt="Email" />
                        <span className='newsletter-title'>Bem vindo à Maeztra</span>
                        <span className='newsletter-paragraph'>Receba em Primeira mão <br /><b>desconto e ofertas exclusivas</b></span>
                        <form action="" id='form'>
                            <input type="email" placeholder='Digite seu e-mail' />
                            <button className='newsletter-submit'>enviar</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}