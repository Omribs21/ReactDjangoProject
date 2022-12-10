import axios from 'axios'

const URL = "http://127.0.0.1:8000/logout/";

export function myLogout(token) {
    return new Promise((resolve) =>
    axios(URL, {
        headers: {
            'Authorization': `Bearer ${token.token}`
        }}).then((res) => resolve({ data: res.data }))
    );
}