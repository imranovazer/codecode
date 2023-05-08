import React from 'react'
import { Link } from 'react-router-dom'

function UsersData({ datas }) {
    return (
        <>
            {datas.data.map(
                ({id, name, email, company: { name: companyName } }, i) => (
                    <tr>
                        <th scope="row">{i}</th>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{companyName}</td>
                        <td><Link className='btn btn-primary ' to={`/users/userPost/${id}`}>See Post</Link></td>
                    </tr>
                )
            )}</>
    )
}

export default UsersData