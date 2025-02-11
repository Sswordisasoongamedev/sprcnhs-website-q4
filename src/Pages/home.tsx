import { asset_registry } from "../asset-registry"

export default function Home(){
    const img_url_1 = asset_registry.__fetchAssetPath("asset://images/1");

    return (
    <>
      {/** Navbar Section */}
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo"><i className="fas fa-gem"></i>NEXT</a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links">Home</a>
          </li>
          <li className="navbar__item">
            <a href="/tech.html" className="navbar__links">Tech</a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__links">Products</a>
          </li>
          <li className="navbar__btn"><a href="/" className="button">Sign Up</a></li>
        </ul>
      </div>
    </nav>

    {/** Hero Section */}
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <h1>NEXT GENERATION</h1>
          <h2>TECHNOLOGY</h2>
          <p>See what makes up different.</p>
          <button className="main__btn"><a href="#">Get Started</a></button>
        </div>
        <div className="main__img--container">
          <img id="main__img" src={img_url_1} />
        </div>
      </div>
    </div>

    {/** Services Section */}
    <div className="services">
      <h1>See what the hype is about</h1>
      <div className="services__container">
        <div className="services__card">
          <h2>Experience Bliss</h2>
          <p>AI Powered technology</p>
          <button>Get Started</button>
        </div>
        <div className="services__card">
          <h2>Are you Ready?</h2>
          <p>Take the leap</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>

    {/** Footer Section */}
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>About Us</h2>
            <a href="/sign__up">How it works</a> <a href="/">Testimonials</a>
            <a href="/">Careers</a> <a href="/">Investments</a>
            <a href="/">Terms of Service</a>
          </div>
          <div className="footer__link--items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a> <a href="/">Support</a>
            <a href="/">Destinations</a> <a href="/">Sponsorships</a>
          </div>
        </div>
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
            <a href="/">Agency</a> <a href="/">Influencer</a>
          </div>
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a> <a href="/">Facebook</a>
            <a href="/">Youtube</a> <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media--wrap">
          <div className="footer__logo">
            <a href="/" id="footer__logo"><i className="fas fa-gem"></i>NEXT</a>
          </div>
          <p className="website__rights">© NEXT 2020. All rights reserved</p>
          <div className="social__icons">
            <a
              className="social__icon--link"
              href="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="social__icon--link"
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social__icon--link"
              href="//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="social__icon--link"
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social__icon--link"
              href="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>

    </>
  )
}