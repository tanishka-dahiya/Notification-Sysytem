import axios from "axios";

export async function postNotificationService(data, token) {
    console.log(token, "token")
    // const result = await axios.post("http://localhost:5000/api/notifications", {
    //     title: data.title, Description: data.description, image: data.image, RecipientType: data.TypeOfRecipent, RecipientAddress: data.recipentDetails
    // }, {
    //     headers: {
    //         'x-auth-token': token
    //     }
    // })

    // return result;

};
