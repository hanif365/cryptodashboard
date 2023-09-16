import Image from 'next/image'
import React from 'react'

const TransactionContentLayout = () => {
  return (
    <div className='p-10 text-center'>
        <h2 className='text-xl lg:text-4xl 2xl:tex-6xl pb-10'>Transaction page coming soon....</h2>
        <Image
        src="/transactionpage.jpg"
        alt="transactionpage Image"
        width={600}
        height={600}
        className="mx-auto rounded-xl"
      />
    </div>
  )
}

export default TransactionContentLayout