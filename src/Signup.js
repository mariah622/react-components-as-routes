import React from 'react'

class Signup extends React.Component{
    render(){
        return (
            <div>
              <h1>Sign Up!</h1>
              <form>
                <div>
                  <input type="text" name="firstname" placeholder="Firstname" />
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" name="lastname" placeholder="Lastname" />
                  <label htmlFor="firstname">Last Name</label>
                </div>
        
                <div>
                  <input type="text" name="username" placeholder="Username" />
                  <label htmlFor="username">Username</label>
                </div>
        
                <div>
                  <input type="password" name="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                </div>
        
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          );
    }
}

export default Signup