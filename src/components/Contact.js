import React from 'react'

const Contact = () => {

  const email = (e)=>{
    e.preventDefault()
    console.log('email')
  }
  return (
    <div className='mt-14 flex justify-center '>
        <div className='bg-white h-[40em] w-[40em] rounded-xl shadow-xl flex justify-center items-center'>
            <form className='flex flex-col gap-10'>
                <p className='font-roboto'>If you made it this far , we can go further.</p>
            <input className='border-b' placeholder='Name' name='' type='text'/>
            <input className='border-b' placeholder='Email' name='' type='email'/>
            <input className='border-b' placeholder='Phone' name='' type='text'/>
            <button onClick={email} className='border-2 border-black rounded-lg bg-[#2c5d63c3] hover:bg-[#3d7177b1]'>Contact</button>
            </form>
        </div>
    </div>
  )
}

export default Contact