import React, { useEffect } from 'react'
import UserNav from './UserNav'

const UserMain = () => {
  useEffect(() => {
//  window.location.reload()
  }, []);
  return (
    <div>
        <UserNav/>
    </div>
  )
}

export default UserMain