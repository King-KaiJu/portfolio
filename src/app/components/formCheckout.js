'use client'

import React from "react";
import {Formik, Field, Form} from 'formik'
import axios from "axios";

const FormCheckout = () => {
    const validateEmail = (value) => {
        let error;
        if (!value) {
          error = 'Requiredo';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalido';
        }
        return error;
    };
    
    const validateUsername = (value) => {
        let error;
        if (value === '') {
          error = 'Requerido';
        }
        return error;
    };

    const addDirection = async (values) => {
        const response = await axios.post('api/add-contact', values);
    }

    return(
        <section className='bg-[#B89748] rounded-lg p-5 pl-8'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    addDirection(values);
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className="flex flex-col justify-center items-start" noValidate>
                        <label htmlFor="firstName" className="mt-2">First Name</label>
                        {errors.firstName && touched.firstName && <p className="text-xs italic text-[#373229]">Completar campo</p>}
                        <Field name="firstName" placeholder="Jane" className='mb-2 bg-[#B87648] p-2 rounded-lg text-[#383632]' validate={validateUsername}/>

                        <label htmlFor="lastName" className="mt-2">Last Name</label>
                        {errors.lastName && touched.lastName && <p className="text-xs italic text-[#373229]">Completar campo</p>}
                        <Field name="lastName" placeholder="Doe" className='mb-2 bg-[#B87648] p-2 rounded-lg text-[#383632]' validate={validateUsername}/>

                        <label htmlFor="email" className="mt-2">Email</label>
                        {errors.email && touched.email && <p className="text-xs italic text-[#373229]">Completar o corregir campo</p>}
                        <Field name="email" placeholder="janedoe@zzz.com" type="email" className='mb-2 bg-[#B87648] p-2 rounded-lg text-[#383632]' validate={validateEmail}/>

                        <button type="submit" disabled={isSubmitting} className='text-cyan-500 bg-[#33424F] rounded-md px-4 py-2 text-lg'>Submit</button>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default FormCheckout