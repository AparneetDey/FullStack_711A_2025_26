import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <form action="">
        <input className='bg-white' type="text" placeholder='Name' />
        <input className='bg-white' type="email" placeholder='Email' />
        <input className='bg-white' type="password" placeholder='Password' />
        <Button type={"submit"} />
    </form>
  )
}

export default Form