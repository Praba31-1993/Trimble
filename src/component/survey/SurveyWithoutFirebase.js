import React from 'react'
import GoogleLogin from 'react-google-login'
export default function SurveyWithoutFirebase() {
   const responseGoogle=(response)=>{
    console.log("response",response)
   }
  return (
    <div>
      {/* 201482755809-h1hbl35437a2eh3vmgndsdiqudg6ourp.apps.googleusercontent.com*/}
      <GoogleLogin
      clientId='201482755809-h1hbl35437a2eh3vmgndsdiqudg6ourp.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy= {'single_host_origin'}
      ></GoogleLogin>
    </div>
  )
}
