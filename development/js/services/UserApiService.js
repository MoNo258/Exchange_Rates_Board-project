export class UserApiService {
    API_URL = "http://localhost:3000";

    addUser = (user, successCallback, errorCallback) => {
        fetch(`${this.API_URL}/users`,{
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then( resp => resp.json())
            .then( data => successCallback(data) )
            .catch( err => errorCallback(err));
    }

    getUserById = (id, successCallback, errorCallback) => {
        fetch(`${this.API_URL}/users/${id}`,{
            method: "GET"
        })
            .then( resp => resp.json())
            .then( data => successCallback(data))
            .catch( err => errorCallback(err));
    }

    getAll = (successCallback, errorCallback) => {
        fetch(`${this.API_URL}/users`,{
            method: "GET",
        })
            .then( resp => resp.json())
            .then( data => successCallback(data))
            .catch( err => errorCallback(err));
    }
}