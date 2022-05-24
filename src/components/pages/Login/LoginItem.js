import React from 'react'

export const LoginItem = ({ handleLogin, user, img }) => {
  return (
    <div className="cursor-links m-2" onClick={() => handleLogin(user)}>
      <img src={img} className="img-thumbnail" alt="" />
      <h5 className="mt-2">{user.name}</h5>
    </div>
  )
}
