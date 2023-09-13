import React from 'react'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import CryptoStatus from './CryptoStatus/CryptoStatus'

const DashboardContentLayout = () => {
  return (
    <div>
        <DashboardHeader />
        <CryptoStatus />
    </div>
  )
}

export default DashboardContentLayout