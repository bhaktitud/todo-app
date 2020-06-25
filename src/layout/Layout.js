import React from 'react'
import './Layout.scss'

export const Layout = (props) => {
    const { children } = props
    return (
        <div className='wrapper'>
            {children}
        </div>
    )
}
