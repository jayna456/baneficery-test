import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

const AddBaneficry = () => {
    const navigate = useNavigate(); 
  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
      const userId = localStorage.getItem('userId');
      const dataToPass = { ...data , userId };
      const response = await axios.post(process.env.REACT_APP_URL+'/bank', dataToPass);
      if (response.data) {
        navigate('/baneficry')
      }
    }
  return (
    <div className='container'>
      <h2>Add Baneficry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label>Name</label>
            <input {...register("name", { required: true} )} className='form-control' />
        </div>
        <div className='mb-3'>
            <label>Account Number</label>
            <input {...register("accountNumber", { required: true} )} className='form-control' />
        </div>
        <div className='mb-3'>
            <label>Bank Name</label>
            <input {...register("bankName", { required: true} )} className='form-control' />
        </div>
        <div className='mb-3'>
            <label>Type of account</label>
            <input {...register("typeOfAccount", { required: true} )} className='form-control' />
        </div>
        <div className='mb-3'>
          <input type="submit" className='btn btn-primary' />
      </div>
      </form>
    </div>
  )
}

export default AddBaneficry