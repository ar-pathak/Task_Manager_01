import React from 'react'

function Navbar() {
    return (
        <div className='flex items-center justify-between h-15 w-4/5  mx-auto px-5 bg-amber-50 shadow-xl rounded-b-lg'>
            <div>
                <div id="Logo"><img className='h-10 w-10' src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" alt="Logo" /></div>
            </div>
            <div>
                <input className='outline-none border border-black rounded-xl px-2' type="search" name="search" id="search" placeholder="Search here..." />
            </div>
        </div>
    )
}

export default Navbar