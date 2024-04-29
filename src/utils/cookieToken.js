import Cookies from 'js-cookie'

export const getCookieToken = (cookieName='userToken') => {
    const token = Cookies.get(cookieName);
    return token ? token : null;
}
    
export const setCookieToken = ({cookieName='userToken',token}) => {
    const userToken = Cookies.set(cookieName, token, { expires: 100 });
    return userToken;
}

export const removeCookieToken = (cookieName='userToken') => {
    const userToken = Cookies.remove(cookieName);
    return userToken;
}