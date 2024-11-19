import { useState, } from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'


const AddUserDetails = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const history = useHistory()


    const onSubmitForm = async (event) => {
        event.preventDefault()

        const userDetails = {
            firstName,
            lastName,
            email,
            department
        }

        const url = 'https://user-management-backend-1vuh.onrender.com/users'

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })

        if (response.ok){
            history.push('/users')
        }else{
            setErrorMsg('User already Exist')
        }
    }

    return (
        <div className="create-form-container">
        <h2>Create New User</h2>
        <form className="create-form" onSubmit={onSubmitForm}>
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={e => setFirstName(e.target.value)} name="firstName" placeholder="Enter first name" required />
            </div>

            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={e => setLastName(e.target.value)} name="lastName" placeholder="Enter last name" required />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={e => setEmail(e.target.value)} name="email" placeholder="Enter email" required />
            </div>

            <div className="form-group">
            <label htmlFor="department">Department</label>
            <input type="text" id="department" onChange={e => setDepartment(e.target.value)} name="department" placeholder="Enter department" required />
            </div>

            <button type="submit" className="add-button">Add User</button>
        </form>
        {
            errorMsg && <p className='error-msg'>{errorMsg}</p>
        }
        </div>

    )
}


export default AddUserDetails