import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreateUser from './CreateUser'
import UpdateUsers from './UpdateUsers'
import Users from './Users'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/createuser' element={<CreateUser />} />
        <Route path='/updateuser/:id' element={<UpdateUsers />} />
        <Route path='/' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App