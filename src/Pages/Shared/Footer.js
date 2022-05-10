import React from "react";
import footerImg from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="width-container footer justify-between p-10">
        <div>
          <span className="footer-title uppercase">Services</span>
          <a className="link link-hover" href="/">
            Emergency Checkup
          </a>
          <a className="link link-hover" href="/">
            Monthly Checkup
          </a>
          <a className="link link-hover" href="/">
            Weekly Checkup
          </a>
          <a className="link link-hover" href="/">
            Deep Checkup
          </a>
        </div>
        <div>
          <span className="footer-title uppercase">Oral HEALTH</span>
          <a className="link link-hover" href="/">
            Fluoride Treatment
          </a>
          <a className="link link-hover" href="/">
            Cavity Filling
          </a>
          <a className="link link-hover" href="/">
            Teeth Whitening
          </a>
        </div>
        <div>
          <span className="footer-title uppercase">Our address</span>
          <a className="link link-hover" href="/">
            New York - 101019 Hudson
          </a>
        </div>
      </div>
      <p className="text-center">
        copyright &copy; by 2022 best doctors portal
      </p>
    </footer>
  );
};

export default Footer;
