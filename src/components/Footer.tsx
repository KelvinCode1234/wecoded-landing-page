import React from "react";
import wecodedLogo from "../assets/wecoded-logo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5><img className="logo" src={wecodedLogo} alt="Footer Logo" /></h5>
            <p>
              Celebrating diversity in tech through code, creativity, and community.
              Join us in shaping the future of innovation!
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled ms-2">
              <li><a href="#">Home</a></li>
              <li><a href="https://dev.to/t/wecoded">WeCoded Tag</a></li>
              <li><a href="https://dev.to/new/wecoded">Submit Entry</a></li>
              <li><a href="https://dev.to/">Dev Community</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5>About This Page</h5>
            <p>This landing page was created for the WeCoded 2025 Challenge by <a className="link-underline-light" href="https://github.com/KelvinCode1234">Precious Kelvin Nwaogu</a></p>
            <p className="mt-3 ">Built with React, TypeScript, and BootStrap.</p>
            <div className="d-flex gap-3 p-3">
              <a href="https://github.com/KelvinCode1234" className="btn btn-primary" role="button">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://dev.to/kelvincode1234" className="btn btn-primary" role="button">
                <i className="fa-brands fa-dev"></i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-4">
            <hr />
          <p>© 2025 WeCoded Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;