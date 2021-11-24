const auth = {
    // name
    // id
    // isDoctor
    isAuthenticated() {
        if (typeof window === undefined) {
            return false
        }

        if (sessionStorage.getItem('userInfo')) {
            return JSON.parse(sessionStorage.getItem('userInfo'))
        } else
            return false
    },
    authenticate(userInfo, cb) {
        if (typeof window !== undefined) {
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        }
        cb()
    },
    signout(cb) {
        if (typeof window !== undefined) {
            sessionStorage.removeItem('userInfo');
        }
        // cb()
    },
}

export default auth;