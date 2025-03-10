// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../../Components/Header/Header'
import LatestCollection from '../../Components/Latest_Collection/LatestCollection'
import BestSellerProduct from '../../Components/Best_Seller/BestSellerProduct'
import Policy from '../../Components/Policy/Policy'
import Subscribe from '../../Components/Subscribe/Subscribe'

const Layout = () => {
    return (
        <div>
            <Header />
            <LatestCollection />
            <BestSellerProduct />
            <Policy />
            <Subscribe />
        </div>
    )
}

export default Layout