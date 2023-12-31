import axios from 'axios';
import {generateCV} from "../HooksAndFuncs/API/ApiFuncs";

const baseUrl = process.env.REACT_APP_API_URL

class Service {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }
}

export class GenerateServices extends Service{
  constructor() {
    super();
  }

  generateCV = async (inputValues) => {
    try{
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


}

class UserService extends Service{

  static registerUser = async (userRegisterData) => {

    const response = await axios.post(
      `${baseUrl}users/`,
      userRegisterData
    )
    return response.data
  }

  static loginUser = async (userLoginData) => {
    console.log(baseUrl)
    const response = await axios.post(
      `${baseUrl}login-user/`,
      userLoginData
    )
    console.log(response)
    return response.data
  }
}

export default UserService