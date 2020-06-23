import React from 'react';

export const UserDetails = ({user}) => {
    return (
        <ul>
            <li>{user.id}</li>
            <li>{user.fullname}</li>
            <li>{user.email}</li>
            <li>{user.sex}</li>
        </ul>
    )
}