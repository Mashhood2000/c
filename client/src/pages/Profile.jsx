import React from 'react';

export default function Profile() {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form>
        <img src ="" alt =""/>
      </form>
      <img src ={currentUser.avatar} alt ="profile"
      className='rounded-full h-24 w-24 object-cover cursor=pointer'/>
    </div>
  )
}
