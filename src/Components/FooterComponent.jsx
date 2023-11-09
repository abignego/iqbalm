const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="sb_footer section-padding">
        <div className="footer-links">
          <div className="footer-link">
            <h4>For Business</h4>
            <a href="">
              <p>Employyer</p>
            </a>
            <a href="">
              <p>Healt Plan</p>
            </a>
            <a href="">
              <p>Individual</p>
            </a>
          </div>
          <div className="footer-link">
            <h4>Resources</h4>
            <a href="">
              <p>Resources Center</p>
            </a>
            <a href="">
              <p>Testimonial</p>
            </a>
            <a href="">
              <p>STV</p>
            </a>
          </div>
          <div className="footer-link">
            <h4>Partners</h4>
            <a href="">
              <p>Swing Tech</p>
            </a>
            <a href="">
              <p>Testimonial</p>
            </a>
          </div>
          <div className="footer-link">
            <h4>@ComingSoon</h4>
            <a href="">
              <p>About</p>
            </a>
            <p>@{new Date().getFullYear()} CodeInc All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
