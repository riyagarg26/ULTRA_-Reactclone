import React from 'react'
import {GoogleLogin} from 'react-google-login'


const responseGoogle =response =>{
  console.log(response)
}

function SignUp(){

  return (
    <div>
    
      <GoogleLogin
      clientId="524487618539-rhksvaicgm47h9ovvrfkenbuse2oo57j.apps.googleusercontent.com"
     onSuccess={responseGoogle}
     onFailure={responseGoogle}
    
      />
  
    </div>
  )
}


export default SignUp