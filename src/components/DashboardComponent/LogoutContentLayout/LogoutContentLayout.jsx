import Image from 'next/image'
import React from 'react'

const LogoutContentLayout = () => {
  return (
    <div className='p-10 text-center'>
        <h2 className='text-xl lg:text-4xl 2xl:tex-6xl pb-10'>You are log out successfully! :)</h2>
        <Image
        src="/logoutpage.jpg"
        alt="logoutpage Image"
        width={600}
        height={600}
        className="mx-auto rounded-xl"
      />
    </div>
  )
}

export default LogoutContentLayout