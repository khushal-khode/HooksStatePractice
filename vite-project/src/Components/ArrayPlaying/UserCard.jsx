import React from 'react'
import { useUserProfileStore } from './store'

export const UserCard = () => {
  const userProfile = useUserProfileStore()

  // Logic
  const handleFormData = (e) => {
    e.preventDefault()
        userProfile.setState({
          name: e.target.name.value,
          age: e.target.age.value,
          email: e.target.email.value,
          address: {
            city: e.target.city.value,
            state: e.target.state.value,
            country: e.target.country.value
          }
        })
      }
  
  return (
    <>
       <form onSubmit={handleFormData}>
        <input type="text" name="name" placeholder='Name' /> <br />
        <input type="number" name="age" placeholder='Age' /><br />
        <input type="email" name="email" placeholder='Email' /><br />
        <input type="text" name="city" placeholder='City' /><br />
        <input type="text" name="state" placeholder='State' /><br />
        <input type="text" name="country" placeholder='Country' /><br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

