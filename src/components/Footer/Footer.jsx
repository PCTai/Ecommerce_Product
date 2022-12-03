import "./Footer.css";

function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="footer wrapper">
        <div className="contact">
          <h3 className="contact-title">Contact Us</h3>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <span> abc@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span> 1800 000 252</span>
          </div>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://twitter.com/?lang=vi">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="footer-text">
          <span>Info</span>
          <span>Support</span>
          <span>Marketing</span>
        </div>
        <div className="footer-text">
          <span>Term of user</span>
          <span>Privacy Police</span>
        </div>
        <span className="design">@ 2022 TaiPhan</span>
      </div>
    </div>
  );
}

export default Footer;
