import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const ViewDetails = () => {
    const [userData, setUserData] = useState([])
    const [errorMsg, setErrorMsg] = useState([])


    // Getting user data from api

    useEffect(() => {
        const getUserDetails = async () => {
            const url = 'https://user-management-backend-1vuh.onrender.com/users'
            const response = await fetch(url)
            if (response.ok){
                const data = await response.json()
                setUserData(data)
            }else{
                setErrorMsg(response.errorMsg)
            }

        }

         getUserDetails()
    }, userData)


    // Delete user details from api

    const onDeleteUser = async (userId) => {
        const response = await fetch(`https://user-management-backend-1vuh.onrender.com/user/${userId}`, {
            method: 'DELETE'
        })
    }

    return(
        <div className="dashboard-container">
        <h1 className="main-heading">User Management Dashboard</h1>
        <div className='user-actions'>
            <Link to='/users/add'>
                <button type='button' className='add-button'>Add</button>
            </Link>
        </div>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        {userData.length > 0 ? (
            <ul className="user-details-container">
                {userData.map(each => (
                    <li className="each-user-details" key={each.userId}>
                        <div className="user-info">
                            <p>
                                <span className="highlight-text">Name: </span>
                                {each.firstName} {each.lastName}
                            </p>
                            <p>
                                <span className="highlight-text">Email: </span>
                                {each.email}
                            </p>
                            <p>
                                <span className="highlight-text">Department: </span>
                                {each.department}
                            </p>
                        </div>
                        <div className="user-actions">
                            <Link to={`user/${each.userId}`} className='user-actions'>
                                <button type="button" className="edit-button">Edit</button>
                            </Link>
                            

                            <button type="button" onClick={() => onDeleteUser(each.userId)} className="delete-button">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            !errorMsg && <div className='loader-container'>Loading...</div>
        )}
    </div>
    )
}

export default ViewDetails

