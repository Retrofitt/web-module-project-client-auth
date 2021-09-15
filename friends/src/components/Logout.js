
import React, { useEffect } from "react"

import axiosWithAuth from '../utils/axiosWithAuth'


const Logout = (props)=>{


    useEffect(()=>{
        axiosWithAuth()
            .post('/logout')
            .then(res =>{
                localStorage.removeItem('token');
                props.history.push('/login')

                console.log(localStorage.getItem('token'))
            })
            .catch(err=>{
                console.error(err)
            })
    },[])

    return(<div>
        logged out
    </div>)

}

export default Logout