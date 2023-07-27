import './styles.css'
import InfocardBanner from '../../assets/images/infocard-banner.png'

export const InfoCard = () => {
    return (
        <div className='infocard'>
            <div className='infocard-text'>
                <h1>Lorem ipsum </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
                </p>
            </div>
            <div className='infocard-banner'>
                <img src={InfocardBanner} alt="Infocard Banner" />
            </div>
        </div>
    )
}