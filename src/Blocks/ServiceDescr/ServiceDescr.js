import stab from "../../img/svg/service-cv-generator.svg"
import {Link} from "react-router-dom";
import {TagIcon} from "../../SvgSprites";
import {PlanBox} from "./PlanBox";

export const ServiceDescr = (props) => {
  const {theme, description, configKey, children} = props;

  return(
    <section className={`section sDescr ${theme}`}>
      <div className="container">
        {children}
        <div className="sDescr__top-row row align-items-center">
          <div className="col-lg">
            <div className="sDescr__name-row row align-items-center">
              <div className="col-auto">
                <div className="sDescr__img">
                  <img src={stab} alt=""/>
                </div>
              </div>
              <div className="col-auto">
                <h1 className="sDescr__name">CV Generator</h1>
              </div>
              <div className="col-auto">
                <div className="info-tag">
                  <TagIcon/>
                  <span>{description}</span>
                </div>
              </div>
              <div className="col-12">
                <div className="sDescr__descr">
                  Verify people's identities using a photo-based identity document, a selfie and artificial intelligence algorithms.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-auto">
            <Link className="sDescr__generate-btn" to={`${window.location.pathname}/workspace`}>
              Generate CV
            </Link>
          </div>
        </div>
        <div className="sDescr__main-row row">
          <div className="col-lg-8">
            <div className="sDescr__content-box">
              <h4>What is CV Generator?</h4>
              <p>The CV Generator is an advanced AI tool designed to revolutionize the way you create and refine your curriculum vitae (CV) or resume. With its powerful features and intuitive interface, it empowers job seekers, professionals, and students to effortlessly generate impressive resumes tailored to their unique skills and experiences.</p>
              <ul>
                <li>Intelligent Resume Creation: The CV Generator harnesses the power of artificial intelligence to assist you in creating a compelling and professional resume. Through its smart algorithms, it analyzes your input and suggests appropriate sections, formats, and designs to ensure your resume stands out in a competitive job market.</li>
                <li>Tailored to Your Profile: This AI tool recognizes that every individual has distinct qualifications and career objectives. By leveraging machine learning capabilities, it customizes your resume based on your specific skills, work history, education, and industry. It offers a personalized approach, ensuring that your CV accurately represents your unique professional profile.</li>
                <li>Dynamic Templates and Formatting: CV Generator offers an extensive collection of visually appealing and modern resume templates. From classic to contemporary designs, it provides a range of options to suit different industries and roles. Additionally, it offers flexible formatting features, allowing you to easily adjust font styles, colors, and layouts to create a polished and eye-catching document.</li>
                <li>Keyword Optimization: In today's digital age, many companies utilize applicant tracking systems (ATS) to filter resumes based on specific keywords. The CV Generator optimizes your resume by suggesting relevant keywords and phrases commonly sought after by recruiters and employers. This ensures that your CV aligns with the requirements of the desired job, increasing your chances of getting noticed.</li>
                <li>Real-time Suggestions and Editing: As you construct your resume, the CV Generator provides real-time suggestions to enhance the content and structure of your CV. It assists in organizing your information, improving sentence structure, and highlighting accomplishments. These suggestions help you craft a persuasive and well-written document that effectively showcases your qualifications.</li>
                <li>Language and Grammar Enhancement: With its built-in natural language processing capabilities, the CV Generator enhances the language and grammar of your resume. It helps eliminate typos, grammatical errors, and awkward phrasing, ensuring your document appears professional and error-free. This feature ensures that your CV makes a positive and polished impression on potential employers.</li>
                <li>Easy Export and Sharing: Once you've created your CV, the CV Generator allows you to export it in multiple formats such as PDF, Word, or plain text, ensuring compatibility with various application processes. It also provides seamless integration with popular cloud storage platforms, enabling easy sharing and collaboration with others.</li>
              </ul>
              <p>
                In summary, the CV Generator is an indispensable AI tool that empowers you to create compelling and tailored resumes effortlessly. By leveraging the power of artificial intelligence, it saves you time, optimizes your CV, and increases your chances of landing your dream job. With its intelligent features and user-friendly interface, it is your ultimate assistant in crafting outstanding resumes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 order-first order-lg-0">
            <PlanBox configKey={configKey}/>
          </div>
        </div>
      </div>
    </section>
  )
}