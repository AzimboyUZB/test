import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Page({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
