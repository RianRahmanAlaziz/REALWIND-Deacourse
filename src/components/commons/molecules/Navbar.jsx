import React, { useState } from 'react'
import SearchInput from '../atoms/SearchInput'

function Navbar() {
    const [search, setSearch] = useState("")
    return (
        <>
            <header className='absolute top-4 z-50 mt-2 h-12 w-(--my-width-nav) flex items-center  justify-between bg-transparent px-4'>
                <section className='flex itmes-center justify-between gap-2'>
                    <div className="flex items-center gap-6 rounded-full bg-(--bg-primary-cray)">
                        <p className='font-barlow ml-3 text-sm font-semibold text-(--text-color-black)'>
                            Menu
                        </p>
                        <button className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--bg-secondary-cray) opacity-85 hover:opacity-100'>
                            <i className='fa-solid fa-bars text-(--text-color-black)'></i>
                        </button>
                    </div>
                </section>
                <section>
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e)}
                        onSearch={() => console.log(search)}
                    />
                </section>
            </header>
        </>
    )
}

export default Navbar