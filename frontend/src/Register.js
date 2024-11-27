import React from 'react'
import { useForm } from "react-hook-form";
import { registration } from './store/userSlice';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const response = await axios.post(process.env.REACT_APP_URL+'/register', data)
        if (response.data?.data) {
            localStorage.setItem('isLoggedIn', true);
            navigate('/baneficry')
        }
    }
  
    return (
    <>
        <div className='container'>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label>Full name</label>
                    <input {...register("fullname", { required: true} )} className='form-control' />
                </div>
                <div className='mb-3'>
                    <label>Address</label>
                    <input {...register("Address", { required: true })} className='form-control' />
                </div>
                <div className='mb-3'>
                    <label>Pincode</label>
                    <input {...register("pincode", { required: true })} className='form-control' />
                </div>
                <div className='mb-3'>
                    <label>Select Country</label>
                    <select {...register("country", { required: true })} className='form-control'>
                        <option value="India">India</option>
                        <option value="U.S.">U.S.</option>
                        <option value="Ausralia">Australia</option>
                        <option value="Russia">Russia</option>
                        <option value="China">China</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <input type="submit" className='btn btn-primary' />
                </div>
            </form>
        </div>
    </>
  )
}

export default Register