import React, { useState } from 'react';

const Form = props => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Confirm, setConfirm] = useState("");
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" name="FirstName" className="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" name="LastName" className="form-control" value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" className="form-control" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Confirm">Confirm Password</label>
                    <input type="text" name="Confirm" className="form-control" value={Confirm} onChange={(e) => setConfirm(e.target.value)}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            <hr />
            <h3>Your Form Data</h3>
            <h4>First Name: {FirstName}</h4>
            <h4>Last Name: {LastName}</h4>
            <h4>Email: {Email}</h4>
            <h4>Password: {Password}</h4>
            <h4>Confirm Password: {Confirm}</h4>
        </div>
    )
}

export default Form;