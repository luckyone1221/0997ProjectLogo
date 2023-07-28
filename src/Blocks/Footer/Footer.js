import {Link} from "react-router-dom";

export const Footer = (props) => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__txt-row row justify-content-center align-items-center text-center">
          <div className="col-lg-auto">
            <div className="footer__all-rights">
              All Rights Reserved © {new Date().getFullYear()} Businex
            </div>
          </div>
          <div className="col-auto">
            <Link className="footer__policy">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}