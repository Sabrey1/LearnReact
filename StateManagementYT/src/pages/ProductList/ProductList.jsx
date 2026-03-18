import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'

import { getStudents, deleteStudentById } from "../../store/student.js"; 

const ProductList = () => {

        const dispatch = useDispatch();
        const [q, setQ] = useState('');

        // normalize to array
        const studentList = useSelector((state)=>{
                const s = state.student?.student;
                if(Array.isArray(s)) return s;
                if(s) return [s];
                return [];
        })

        useEffect(()=>{
                dispatch(getStudents())
        },[]);

    const filtered = studentList.filter(s => s.name?.toLowerCase().includes(q.toLowerCase()));

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4 className="mb-0">Products</h4>
                    <small className="text-muted">List of students</small>
                </div>
                <div className='d-flex gap-2'>
                    <input className='form-control form-control-sm' placeholder='Search by name' value={q} onChange={e=>setQ(e.target.value)} />
                    <Link to="/" className='btn btn-primary btn-sm'>Add New</Link>
                </div>
            </div>

            <div className='card shadow-sm'>
                <div className='card-body p-0'>
                    <div className='table-responsive'>
                        <table className='table table-hover mb-0'>
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Subject</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.length === 0 && (
                                    <tr><td colSpan={6} className='text-center py-4 text-muted'>No products found</td></tr>
                                )}
                                {filtered.map((students, index)=> (
                                    <tr key={students.id || index}>
                                        <td className='align-middle'>{students.id}</td>
                                        <td className='align-middle'>{students.name}</td>
                                        <td className='align-middle'>{students.age}</td>
                                        <td className='align-middle'>{students.gender}</td>
                                        <td className='align-middle'>
                                            {students.subject?.map((subject, i)=> (
                                                <span key={i} className='badge bg-secondary rounded-pill me-1 px-2 py-1'>{subject}</span>
                                            ))}
                                        </td>
                                        <td className='align-middle'>
                                            <Link to={`/edit/${students.id}`} className='btn btn-outline-primary btn-sm me-2'>Edit</Link>
                                            <button className='btn btn-outline-danger btn-sm' onClick={()=>{ if(window.confirm('Delete this item?')) dispatch(deleteStudentById(students.id))}}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
