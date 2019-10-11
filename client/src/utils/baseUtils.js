class baseUtils {
  static baseApiUrl = "http://localhost:8000/api/";

  static getAuthTokenHeaderObj() {
    return { "x-auth-token": this.getAuthToken() };
  }

  static saveAuthToken(token) {
    localStorage.setItem("reactAppToken", token);
  }

  static save(where, what) {
    localStorage.setItem(where, JSON.stringify(what));
  }

  static load(what) {
    return JSON.parse(localStorage.getItem(what));
  }

  static isUserLoggedIn() {
    return (
      localStorage.getItem("user") && localStorage.getItem("reactAppToken")
    );
  }

  static getUserFromLocal() {
    return JSON.parse(localStorage.getItem("user"))
  }

  static getAuthToken() {
    return localStorage.getItem("reactAppToken");
  }

  static onLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("reactAppToken");
  }

  static mapSearchToObject(search) {
    let temp = search.slice(1).split('&');
    
    if(temp.length < 2) return null;

    temp = temp.map(el => {
        const splitedArr = el.split('=')
        return {
            [splitedArr[0]]: splitedArr[1],
        }
    })
    .reduce((a, b) => {
        return {...a, ...b}
    }, {})
    return temp;
  }
}

export default baseUtils;