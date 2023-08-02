import axios from "axios";

export const generateCV = async (inputValues) => {

  try {
    const response = await axios({
      url : `${process.env.REACT_APP_API_URL}ai/generate-cv/`,
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${window.localStorage.getItem("jwt_session")}`,
        "Accept": "application/json"
      },
      data: {
        ...inputValues,
      }
    })

    console.log(response.data);

    return response.data
  }
  catch (e){
    console.log(e);
  }
}