import { Zustand } from "../libs"
import { axios, cookieToken } from "../utils"

const useAutoSignOn = () => {

    const zustand = Zustand.useStore()
    const autoSignOn = async (token) => {
        try {
            const response = await axios.createAxios().post('/user/getuserbytoken', { token })
            const responseData = response.data
            if (response && response.status === 200) {
                const { data } = responseData
                //   console.log(responseData);
                zustand.setIsLogin(true)
                zustand.setUserData(data.data)
                zustand.setIsAdmin(data.data.role)

                if (data.data.role === 'admin') {
                    cookieToken.setCookieToken({ cookieName: 'adminToken', token: 'true' })
                }
            }
        } catch (error) {
            if (error.status === 401 || error.status === 403) {
                zustand.setIsLogin(false)
                zustand.setIsAdmin(false)
                zustand.setUserData(null)
                cookieToken.removeCookieToken('userToken')
                
                if (cookieToken.getCookieToken('adminToken') === 'admin') {
                    cookieToken.removeCookieToken('adminToken')
                }
            }
        }
    }

    return { autoSignOn }
}

export default useAutoSignOn