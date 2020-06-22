import React, {useState} from 'react';
import {UserDetails} from "./UserDetails";
import {UserApiService} from "../services/UserApiService";
import {User} from "../models/User";

const userApiService = new UserApiService();

export const Register = () => {
    // const [user, setUser] = useState({
    //     fullname: '',
    //     email: '',
    //     password: '',
    //     sex: 'm',
    //     street: '',
    //     city: '',
    //     postCode: ''
    // });
    const [user, setUser] = useState(new User());
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState([]);

    const handleChangeUserData = e => {
        const {name, value} = e.target;
        setUser(prev => ({
                ...prev,
                [name]: value
            })
        );
    }

    const sendForm = () => {

        userApiService.addUser(
            user,
            data => setUser(data),
            err => console.log(err)
        )

        // fetch("http://localhost:3000/users",{
        //     method: "POST",
        //     body: JSON.stringify(user),
        //     headers:{
        //         "Content-Type": "application/json"
        //     }
        // })
        // .then( resp => resp.json())
        // .then( data => setUser(data))
        // .catch( err => console.log(err));

    }

    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = [];
        if(user.fullname.length<5){ newErrors.push("Full name too short")}
        if(user.email.length<3 && !user.email.includes("@")){ newErrors.push("Wrong email address")}
        if(user.password.length<4){ newErrors.push("Password too short")}
        if(user.password !== password2){ newErrors.push("Passwords not match")}
        if(user.street.length<3){ newErrors.push("Street too short")}
        if(user.postCode.length < 5 || user.postCode.length > 6 || !user.postCode.match("^[0-9]{2}-[0-9]{3}$")){ newErrors.push("Wrong post code")}
        if(user.city.length<2){ newErrors.push("City too short")}

        setErrors(newErrors);
        if(newErrors.length>0) return false;

        sendForm();

    }

    const formStyle = {
        display: "flex",
        flexDirection: "column"
    }

    if(user.id) return <UserDetails user={user} />

    return (
        <section>
            {errors.length > 0 && <ul> {errors.map( (err, index) => <li key={index}>{err}</li>)} </ul>}

            <form style={formStyle} onSubmit={handleSubmit}>
                <input type={"text"} name={"fullname"} placeholder={"Name & Surname"} value={user.fullname} onChange={handleChangeUserData} />
                <input type={"email"} name={"email"} placeholder={"Email"} value={user.email} onChange={handleChangeUserData}/>
                <input type={"password"} name={"password"} placeholder={"password"} value={user.password} onChange={handleChangeUserData}/>
                <input type={"password"} name={"password2"} placeholder={"repeat password"} value={password2} onChange={e=>setPassword2(e.target.value)}/>
                <select value={user.sex} onChange={handleChangeUserData} name={"sex"}>
                    <option value={"m"}>Man</option>
                    <option value={"w"}>Woman</option>
                </select>
                <input type={"text"} name={"street"} placeholder={"Street"} value={user.street} onChange={handleChangeUserData}/>
                <input type={"text"} name={"city"} placeholder={"City"} value={user.city} onChange={handleChangeUserData}/>
                <input type={"text"} name={"postCode"} placeholder={"Post Code"} value={user.postCode} onChange={handleChangeUserData}/>
                <button>Register</button>
            </form>
        </section>
    )
}