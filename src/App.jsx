import { useState } from 'react'
import './App.css'
import ProfileList from './Component/ProfileList'
import Search from './Component/Search'
import users from './database/Users.json'

function App()  {
    return (
    <div className='main-app'>
      <Search/>
      <div className='user-list'>
      {users.map(user =>
      <ProfileList key = {user.id} userData = {user}
      />
   )}

      </div>
      
    </div>
    
  )
}

export default App
