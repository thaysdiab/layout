import './styles.css';
import BannerDesktop from '../../assets/images/banner-desktop.png';
import BannerMobile from '../../assets/images/banner-mobile.png';

export const Banner = () => {
    return (
        <>
        <div className='banner-desktop'>
            <img src={BannerDesktop} alt="Banner" width={600} />
            <img src={BannerDesktop} alt="Banner" width={600}/>
            <img src={BannerDesktop} alt="Banner" width={600}/>
        </div>
        <div className='banner-mobile'>
            <img src={BannerMobile} alt="Banner" width={320} />
            <img src={BannerMobile} alt="Banner" width={320}/>
            <img src={BannerMobile} alt="Banner" width={320}/>
        </div>
        </>
    )
}