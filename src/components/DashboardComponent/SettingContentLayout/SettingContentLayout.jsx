import Image from 'next/image'
import React from 'react'

const SettingContentLayout = () => {
  return (
    <div className='p-10 text-center'>
        <h2 className='text-xl lg:text-4xl 2xl:tex-6xl pb-10'>Setting page coming soon....</h2>
        <Image
        src="/settingpage.jpg"
        alt="settingpage Image"
        width={600}
        height={600}
        className="mx-auto rounded-xl"
      />
    </div>
  )
}

export default SettingContentLayout