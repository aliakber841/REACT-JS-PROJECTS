import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const ReactTostify = () => {
    const notify=()=>{
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
  return (
    <div className='toast'>
        <button onClick={notify}>LOGIN</button>
        <ToastContainer />
    </div>
  )
}

export default ReactTostify