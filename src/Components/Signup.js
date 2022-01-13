import { useState } from "react";
import { useHistory } from "react-router-dom";
const Signup = () => {

    const [name ,setName]=useState('');
    const [dob ,setDOB]=useState('');
    const [email ,setEmail]=useState('');
    const history =useHistory();

    const handleSignup =(e) => {
        e.preventDefault();
        const details ={name , dob, email};
        fetch(' ')
        //history.go(-1);    
          history.push('/');

    }     

    return (  
         <div className="signup">
                <h2> Sign Up </h2>
                <form onSubmit={handleSignup}>
                    <label>Enter Name</label> 
                    <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label>Date Of Birth</label>
                    <input 
                    type="text"
                    required
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                    />
                    <label>Enter E-mail</label>
                    <input 
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <button >Sign Up!</button>
                    <p>{name}</p>
                    <p>{dob}</p>
                    <p>{email}</p>
                 </form>
         </div>

    );
}
 
export default Signup;
