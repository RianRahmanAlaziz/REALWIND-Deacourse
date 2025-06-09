import React from 'react'

function HeroBanner() {
    return (
        <section className='relative h-[460px] w-full rounded-b-4xl'>
            <img src="/images/bg-1.jpg" className='h-full w-full rounded-4xl object-cover shadow-md' />
            <div className='absolute bg-(--bg-primary-cray) h-32 w-32 rounded-full' />
        </section>
    )
}

export default HeroBanner