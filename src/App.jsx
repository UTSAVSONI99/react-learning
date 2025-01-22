/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useState } from 'react'


function App() {

  // const [counter, setCounter] = useState()
  const [user, setUser] = useState([])

  useEffect(() => {
    async function featchUserInfo() {
      const featchedUser = await fetch("https://jsonplaceholder.tyicode.com/users")
        .then(res => {
          console.log(res)
          return res.json()
        })
        .catch(e => console.log(e))
      return featchedUser
    }

    featchUserInfo()
      .then(user => {
        console.log(user)
        setUser(user)
      }).catch(e => {
        console.log(e)
      })
  }, [])
  // const addValue = () => setCounter(counter)
  // const removeValue = () => setCounter(counter - 1)

  return (
    <>
      {user.length} users

      <UserFancyDisplay user={user} />
    </>
  )
}

export default App


function UserFancyDisplay({ user }) {
  return <>
    {user.map(u => {
      <div key={u.id}>
        {u.id}-  {u.name}
      </div>
    })}
  </>
}