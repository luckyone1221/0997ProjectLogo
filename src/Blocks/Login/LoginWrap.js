import LoginImg from "../../img/svg/LoginImg.svg"
import logo from "../../img/svg/logo.svg"

export const LoginWrap = (props) => {
  const {children} = props;

  return(
    <section className="section sLogin">
      <div className="sLogin__container container-lg-fluid">
        <div className="sLogin__logo">
          <img src={logo} alt=""/>
        </div>
        <div className="sLogin__main-row row align-items-center">
          <LoginImgBox/>
          <div className="sLogin__m-col sLogin__m-col--right col-lg-auto">
            <div className="sLogin__box">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const LoginImgBox = () => {
  return (
    <div className="sLogin__m-col sLogin__m-col--left col-lg-auto d-none d-lg-block">
      <div className="sLogin__img">
        <img src={LoginImg} alt=""/>
      </div>
    </div>
  )
}