import Cookies from 'js-cookie'

export const getCookieToken = () => {
    const token = Cookies.get('userToken');
    return token ? token : null;
}
    
export const setCookieToken = (token) => {
    const userToken = Cookies.set('userToken', token, { expires: 100 });
    return userToken;
}

export const removeCookieToken = () => {
    const userToken = Cookies.remove('userToken');
    return userToken;
}