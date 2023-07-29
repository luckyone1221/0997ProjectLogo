import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL


class UserService {

    static registerUser = async (userRegisterData) => {
        const response = await axios.post(
            `${baseUrl}users/`,
            userRegisterData
        )
        return response.data
    }

    static loginUser = async (userLoginData) => {
        const response = await axios.post(
            `${baseUrl}login-user/`,
            userLoginData
        )
        return response.data
    }

}


export default UserService