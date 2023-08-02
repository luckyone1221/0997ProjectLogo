import axios from 'axios';
import {generateCV} from "../HooksAndFuncs/API/ApiFuncs";

// const baseUrl = process.env.REACT_APP_API_URL

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
  constructor() {
    super();
  }

  static registerUser = async (userRegisterData) => {
    let self = this;

    const response = await axios.post(
      `${self.baseUrl}users/`,
      userRegisterData
    )
    return response.data
  }

  static loginUser = async (userLoginData) => {
    let self = this;

    const response = await axios.post(
      `${self.baseUrl}login-user/`,
      userLoginData
    )
    return response.data
  }
}

export default UserService