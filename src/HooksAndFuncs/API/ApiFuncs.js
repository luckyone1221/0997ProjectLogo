import axios from "axios";

export const generateCV = async (data) => {

  try {
    const response = await axios({
      url : `${process.env.REACT_APP_API_URL}ai/generate-cv/`,
      method: 'Get',
      headers: {
        "Content-Type": "application/json",
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
    console.log(e);
    console.log("catch");
  }
}