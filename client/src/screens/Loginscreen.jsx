import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../components/Loader';
import Error from '../components/Error';

function Loginscreen() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    async function Login() {
        const user = {
            email,
            password,
        }
        try {
            setloading(true);
            const result = (await axios.post('/api/users/login', user)).data
            setloading(false);

            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href = '/home'

        } catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)
        }
    }
    return (
        <div>
            {loading && (<Loader />)}

            <div className="row justify-content-center mt-5">
                <div className="col-md-5">

                    {error && (<Error message = 'Wrong email or password' />)}

                    <div className='bs'>
                        <h4>Login</h4>
                        <input type="text" className='form-control' placeholder='Email' value={email}
                            onChange={(e) => (setemail(e.target.value))} />
                        <input type="text" className='form-control' placeholder='Password' value={password}
                            onChange={(e) => (setpassword(e.target.value))} />

                        <button type="button" class="btn btn-outline-secondary mt-3" onClick={Login}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loginscreen

