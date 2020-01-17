import * as axios from "axios";

// Перевести все апишки на вариативные исходы

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9ae69435-2b9a-40bc-b874-7a6c240dae36"
    }
});

export const dialogsAPI = {
    async getDialogs() {
        const response = await instance.get(`dialogs/`);
        return response
        // [
        // {
        //     "id": 1570,
        //     "userName": "Gaypt1994",
        //     "hasNewMessages": false,
        //     "lastDialogActivityDate": "2019-12-08T08:58:57.967",
        //     "lastUserActivityDate": "2019-12-07T19:12:19.397",
        //     "newMessagesCount": 0,
        //     "photos": {
        //     "small": "https://social-network.samuraijs.com/activecontent/images/users/1570/user-small.jpg?v=1",
        //         "large": "https://social-network.samuraijs.com/activecontent/images/users/1570/user.jpg?v=1"
        // }
        // }
        // ]
    },
    async initialDialog(userId) {
        const response = await instance.put(`dialogs/${userId}`);
        return response
        //{
        //     "data": {},
        //     "messages": [],
        //     "resultCode": 0
        // }
    },
    async _sendMessage(userId = 1567) {
        const response = await instance.post(`dialogs/${userId}/messages`,
        {
            body: 'Hello, Igor'
        });
        return response
    },
};

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};

let errorAuth;

instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            errorAuth()
        }
        return Promise.reject(error)
    }
);

export const setHandler = (callback) => {
    errorAuth = callback;
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
};







