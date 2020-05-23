import axios from "axios";

export async function postNotificationService(token, data) {
    const result = await axios.post("http://localhost:5000/api/notifications",
        data,
        {
            headers: {
                'x-auth-token': token,
                'content-type': 'multipart/form-data'
            }
        })

    return result;

};
export async function getYourCreatedNotification(token) {
    console.log("mm")
    const result = await axios.get("http://localhost:5000/api/notifications/your-created-notification",

        {
            headers: {
                'x-auth-token': token,

            }
        })

    return result;

};

