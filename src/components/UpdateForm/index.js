import { useState } from 'react';
import './index.css'


const UpdateForm = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [errorMsg, setErrorMsg] = useState('')


    const onSubmit = async (event) => {
        event.preventDefault()

        const userDetails = {
            firstName,
            lastName,
            email,
            department
        }

        const {match} = props
        const {params} = match
        const {id} = params

        const url = `https://user-management-backend-1vuh.onrender.com/user/${id}`

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })

        if (response.ok){
            setErrorMsg(true)
            setDepartment('')
            setEmail('')
            setFirstName('')
            setLastName('')
        } else {
            setErrorMsg(false)
        }
        


    }


    return (
        <div className="edit-form-container">
            <h2>Edit User</h2>
            <form onSubmit={onSubmit} className="edit-form">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    
                />

                <label htmlFor="department">Department</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                    
                />

                <button type="submit" className="save-button">
                    Save
                </button>
            </form>
            {
                errorMsg !== '' && errorMsg === false && <p className='error-msg'>Enter atleast one field</p>
            }

            {
                errorMsg !== '' && errorMsg === true && <p className='success-msg'>Successfully Updated</p>
            }
            
            
        </div>
    );
}

export default UpdateForm