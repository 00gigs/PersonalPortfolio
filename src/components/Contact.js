import React from 'react'
import axios from 'axios'
const Contact = () => {

  const email = (e)=>{
    e.preventDefault()
const forumData = new FormData(e.target)

const data = Object.fromEntries(forumData.entries())
    
axios.post('http://localhost:3001/send-email',data)
  .then((response)=>{
  console.log('Success:', response.data);
})
  .catch((error)=>{
console.error('Error',error)
})

};



  return (
    <div className='mt-14 flex justify-center '>
        <div className='bg-white h-[40em] w-[40em] rounded-xl shadow-xl flex justify-center items-center'>
            <form onSubmit={email} className='flex flex-col gap-10'>
                <p className='font-Roboto'>If you made it this far , we can go further.</p>
            <input className='border-b' placeholder='Name' name='name' type='text'/>
            <input className='border-b' placeholder='Email' name='email' type='email'/>
            <input className='border-b' placeholder='Phone' name='phone' type='text'/>
            <button type='submit' className='border-2 border-black rounded-lg bg-[#2c5d63c3] hover:bg-[#3d7177b1]'>Contact</button>
            </form>
        </div>
    </div>
  )
}

export default Contact