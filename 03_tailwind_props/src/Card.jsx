import React from 'react'

function Card({ username , btnText= "button text default" }) {
    return (
        <>


            <button className='bg-green-600 text-white rounded-xl text-center my-60 mx-60'>Tailwind test {username} {btnText}</button>

        </>
    )
}

export default Card