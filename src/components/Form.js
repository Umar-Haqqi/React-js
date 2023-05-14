import React from 'react';
import "../App.css";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Form() {
    const schema = yup.object().shape({
        FullName: yup.string().required("please enter your full name"),
        email: yup.string().email().required("please enter your correct email"),
        phone: yup.number().integer().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "password don't match").required(),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        // integration b/w yup and react-hook-form
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <h1>Create your new account</h1>

                <input type="text" placeholder="Full Name..." {...register("FullName")} />
                <p className="error">{errors.FullName?.message}</p>

                <input type="text" placeholder="Email..." {...register("email")} />
                <p className="error">{errors.email?.message}</p>

                <input type="number" placeholder="Phone number..." {...register("phone")} />
                <p className="error">{errors.phone?.message}</p>

                <input type="number" placeholder="age..." {...register("age")} />
                <p className="error">{errors.age?.message}</p>

                <input type="password" placeholder="Password..." {...register("password")} />
                <p className="error">{errors.password?.message}</p>

                <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
                <p className="error">{errors.confirmPassword?.message}</p>

                <input type="submit" className="form-btn" />
            </form>
        </>
    )
}
