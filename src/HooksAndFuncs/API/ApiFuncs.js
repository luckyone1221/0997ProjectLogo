import axios from "axios";

export const generateCV = async (data) => {

  try {
    const response = await axios({
      url : `${process.env.REACT_APP_API_URL}ai/generate-cv/`,
      method: 'Get',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${window.localStorage.getItem("jwt_session")}`,
        "Accept": "application/json"
      },
      data: {
        ...data,
      }
    })

    console.log(response.data);

    return response.data
  }
  catch (e){
    // console.log(e);
    // console.log("catch");

    return `
      <h4>Tailored to Your Profile</h4>
      <p>The CV Generator is an advanced AI tool designed to revolutionize the way you create and refine your curriculum vitae (CV) or resume. With its powerful features and intuitive interface, it empowers job seekers, professionals, and students to effortlessly generate impressive resumes tailored to their unique skills and experiences.</p>
      <p>Intelligent Resume Creation: The CV Generator harnesses the power of artificial intelligence to assist you in creating a compelling and professional resume. Through its smart algorithms, it analyzes your input and suggests appropriate sections, formats, and designs to ensure your resume stands out in a competitive job market.</p>
      <h4>Tailored to Your Profile</h4>
      <p>Tailored to Your Profile: This AI tool recognizes that every individual has distinct qualifications and career objectives. By leveraging machine learning capabilities, it customizes your resume based on your specific skills, work history, education, and industry. It offers a personalized approach, ensuring that your CV accurately represents your unique professional profile.</p>
      <ol>
        <li>Dynamic Templates and Formatting:</li>
        <li>CV Generator offers an extensive collection of visually appealing and modern resume templates. From classic to contemporary designs, it provides a range of options to suit different industries and roles.</li>
        <li>Additionally, it offers flexible formatting features, allowing you to easily adjust font styles, colors, and layouts to create a polished and eye-catching document.</li>
        <li>Keyword Optimization: In today's digital age, many companies utilize applicant tracking systems (ATS) to filter resumes based on specific keywords. The CV Generator optimizes your resume by suggesting relevant keywords and phrases commonly sought after by recruiters and employers. This ensures that your CV aligns with the requirements of the desired job, increasing your chances of getting noticed.</li>
      </ol>      
      <h4>Tailored to Your Profile</h4>
      <p>Tailored to Your Profile: This AI tool recognizes that every individual has distinct qualifications and career objectives. By leveraging machine learning capabilities, it customizes your resume based on your specific skills, work history, education, and industry. It offers a personalized approach, ensuring that your CV accurately represents your unique professional profile.</p>
    `
  }
}