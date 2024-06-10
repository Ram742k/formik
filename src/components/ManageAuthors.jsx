
import React from 'react';

const ManageAuthors = ({ authors }) => {
    return (
        <div>
            <h2 className='text-center mt-5'>Manage Authors</h2>
            {
                console.log(authors)
            }
            {authors.length === 0 ? (
                <p  className='text-center mt-5' style={{ fontSize: 20, fontWeight: 400}}>No authors available. Please add some authors.</p>
            ) : (
               <div className='container card'>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth Date</th>
                                <th>Biography</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td>{author.birthDate}</td>
                                    <td>{author.biography}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
               </div>
            )}
        </div>
    );
};

export default ManageAuthors;
