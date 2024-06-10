
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit, initialValues }) => {
    const validationSchema = Yup.object({
        title: Yup.string().required('Please enter a title'),
        author: Yup.string().required('Please enter an author'),
        isbn: Yup.string().required('Please enter an ISBN'),
        publicationDate: Yup.date().required('Please enter a publication date')
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
                    <h2 className='text-center mb-3'>Add Book</h2>
                    <div className='card p-5'>
                    <div className='mb-3'>
                        <label htmlFor="title">Title</label>
                        <Field name="title" className='form-control' type="text" />
                        <ErrorMessage name="title" component="div" className='error'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="author">Author</label>
                        <Field name="author" className='form-control' type="text" />
                        <ErrorMessage name="author" component="div" className='error'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="isbn">ISBN</label>
                        <Field name="isbn" className='form-control' type="text" />
                        <ErrorMessage name="isbn" component="div" className='error'  />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="publicationDate">Publication Date</label>
                        <Field name="publicationDate"  className='form-control' type="date" />
                        <ErrorMessage name="publicationDate" component="div" className='error'  />
                    </div>
                    <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
                        Submit
                    </button>
                    </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default BookForm;
