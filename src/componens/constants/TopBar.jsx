import React from 'react'

const TopBar = (props) => {
    return (
        <section className=''>
            <h5 className='h5 mb-1'>{props.heading}</h5>
            <h2 className='h2'>{props.title}</h2>
        </section>
    )
}

export default TopBar