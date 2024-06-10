
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit, initialValues }) => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter a author name'),
        birthDate: Yup.date().required('Please enter a birth date'),
        biography: Yup.string().required('Please enter a biography')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                onSubmit(values);
                resetForm();
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                       <div className='cont'>
                    <h2 className='text-center mb-3'>Add Author</h2>
                    <div className='card p-5'>
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <Field name="name" className="form-control"  type="text" />
                        <ErrorMessage name="name"   className='error'component="div" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="birthDate">Birth Date</label>
                        <Field name="birthDate" className="form-control"  type="date" />
                        <ErrorMessage name="birthDate"  className='error'  component="div" />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="biography">Biography</label>
                        <Field name="biography" className="form-control"  as="textarea" />
                        <ErrorMessage name="biography"  className='error'  component="div" />
                    </div>
                    <button type="submit" className='btn btn-sm btn-primary' disabled={isSubmitting}>
                        Submit
                    </button>
                    </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AuthorForm;
