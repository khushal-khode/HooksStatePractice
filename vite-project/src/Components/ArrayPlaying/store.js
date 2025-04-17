import { hookstate, useHookstate } from '@hookstate/core'

const userProfileStore = hookstate({
  name: 'John Doe',
  age: 30,
  email: 'khushalkhode486@gmail.com',
  address: {
    city: 'New York',
    state: 'NY',
    country: 'USA'
  }
})

export const useUserProfileStore = () => {
  const state = useHookstate(userProfileStore)

  return {
    getState: () => {
      return state.get()
    },

    // setName: (name) => {
    //   state.name.set(name)
    // },

    // setAge: (age) => {
    //   state.age.set(age)
    // },
    // setEmail: (email) => {
    //   state.email.set(email)
    // },
    // setAddress: (address) => {
    //   state.address.set(address)
    // },
    // setCity: (city) => {
    //   state.address.city.set(city)
    // },
    // setState: (state) => {
    //   state.address.state.set(state)
    // },
    // setCountry: (country) => {
    //   state.address.country.set(country)
    // },

    setState: (s) => {
      state.set(s)
    },
  }
}