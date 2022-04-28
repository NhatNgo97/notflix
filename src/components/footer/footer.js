import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <FacebookIcon className='icon' />
        <InstagramIcon className='icon' />
        <TwitterIcon className='icon' />
        <YouTubeIcon className='icon' />
      </div>
      <div className="footer__moreInfoLinks">
        <p className='footer__moreInfoLinks__link link' >Audio Description</p>
        <p className='footer__moreInfoLinks__link link'>Help Centre</p>
        <p className='footer__moreInfoLinks__link link'>Gift Cards</p>
        <p className='footer__moreInfoLinks__link link'>Media Centre</p>
        <p className='footer__moreInfoLinks__link link'>Investor Relation</p>
        <p className='footer__moreInfoLinks__link link'>Jobs</p>
        <p className='footer__moreInfoLinks__link link'>Terms of Use</p>
        <p className='footer__moreInfoLinks__link link'>Privacy</p>
        <p className='footer__moreInfoLinks__link link'>Legal Notices</p>
        <p className='footer__moreInfoLinks__link link'>Cookies Preference</p>
        <p className='footer__moreInfoLinks__link link'>Corporate Information</p>
        <p className='footer__moreInfoLinks__link link'>Contact Us</p>
      </div>
      <div className="footer__copyright">
        @2022 Netflix clone by Minh Nhat Ngo
      </div>
    </div>
  )
}

export default Footer;