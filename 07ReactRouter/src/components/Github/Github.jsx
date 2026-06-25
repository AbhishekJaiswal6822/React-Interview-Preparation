import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/abhishekjaiswal6822')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
       <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}</div>

        <img src={data.avatar_url} width={300} alt="" />
       </>
    )
}

export default Github

export const githubInfoloader = async ()=>{
  const response = await fetch('https://api.github.com/users/abhishekjaiswal6822')   
  return response.json()
}