import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers : {'API-KEY': '31fa9cf9-b427-4f48-aed7-af1030b75775'}
})


export const requestUsers = (currentPage=1, sizeOfPage = 3) => {
    return instance.get(`users?page=${currentPage}&count=${sizeOfPage}`)
    .then(response => {
        return response.data;
    }); 
}

export const getCurrentUser = (profileID=2) => {
    return instance.get('profile/'+profileID) 
    .then(response => {
        return response.data;
    });
}

export const getStatus = (statusID=1) => {
    return instance.get('profile/status/'+statusID) 
    .then(response => {
        return response.data;
    });
}

export const updateStatus = (status) => {
    return instance.put('profile/status', {status: status}) 
    .then(response => {
        return response.data; //
    });
}

export const getAuthMe = () => {
    return instance.get(`auth/me`)
    .then(response => {
        return response.data;
    });
}

export const loginApi = (email, password, rememberMe=false) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
    .then(response => {
        return response.data;
    });
}

export const logoutApi = () => {
    return instance.delete(`auth/login`)
    // .then(response => {
    //     return response.data;
    // });
}

export const followUser = (userID) => {
    return instance.post(`follow/${userID}`)
}

export const unfollowUser = (userID) => {
    return instance.delete(`follow/${userID}`)
}


// export const getUsers = (currentPage=1, sizeOfPage = 3) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${sizeOfPage}`)
//     .then(response => response.data); 
// }



// export const getCurrentUser = (profileID=1) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/${profileID}`) 
//     .then(response => response.data);
// }

// export const getAuthMe = () => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
//     .then(response => response.data);
// }

// export const unfollowUser = (userID) => {
//     return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {withCredentials: true,
//     headers : {'API-KEY': '31fa9cf9-b427-4f48-aed7-af1030b75775'}})
// }

// export const followUser = (userID) => {
//     return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {},
//     {withCredentials: true,
//    headers : {'API-KEY': '31fa9cf9-b427-4f48-aed7-af1030b75775'}})
// }

