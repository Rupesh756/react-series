import { useState } from 'react'

const SignUpForm = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleInputchange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <h1>Sign Up</h1>
                    <p>Please fill i this form to create an account.</p>

                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder='Enter firstName'
                        required
                        value={user.firstName}
                        onChange={handleInputchange}
                    />
                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Enter lastName'
                        required
                        value={user.lastName}
                        onChange={handleInputchange}
                    />
                    <label htmlFor="email"><b>E-mail</b></label>
                    <input
                        type="text"
                        name="email"
                        placeholder='Enter Email Address'
                        required
                        value={user.email}
                        onChange={handleInputchange}
                    />
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="text"
                        name="password"
                        placeholder='Enter Password'
                        required
                        value={user.password}
                        onChange={handleInputchange}
                    />
                    <label htmlFor="phoneNumber"><b>Phone-Number</b></label>
                    <input
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        name="phoneNumber"
                        placeholder='Enter PhoneNumber'
                        required
                        value={user.phoneNumber}
                        onChange={handleInputchange}
                    />
                </div>

            </form>
        </>
    )
}

export default SignUpForm
