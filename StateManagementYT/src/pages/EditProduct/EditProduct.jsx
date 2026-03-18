import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchStudentById, updateStudentById } from '../../store/student';

const EditProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const { student } = useSelector((state)=> state.student || {});
    const [form, setForm] = useState({ name: '', age: '', gender: '', subject: [] });

    useEffect(()=>{
            dispatch(fetchStudentById(id));
    },[id]);

    useEffect(()=>{
        if(student) setForm(student);
    },[student]);

    const handleUpdate = (e)=>{
        e.preventDefault();
        dispatch(updateStudentById({ id, data: form }));
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div>
                    <h4 className='mb-0'>Edit Product</h4>
                    <small className='text-muted'>Update student details</small>
                </div>
                <div>
                    <Link to='/' className='btn btn-outline-secondary btn-sm'>Back</Link>
                </div>
            </div>

            <div className='card shadow-sm'>
                <div className='card-body'>
                    <form onSubmit={handleUpdate}>
                        <div className='row g-3'>
                            <div className='col-md-6'>
                                <label className='form-label'>Name</label>
                                <input className='form-control' value={form.name||''} onChange={e=>setForm({...form, name: e.target.value})} />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Age</label>
                                <input className='form-control' value={form.age||''} onChange={e=>setForm({...form, age: e.target.value})} />
                            </div>
                            <div className='col-md-3'>
                                <label className='form-label'>Gender</label>
                                <input className='form-control' value={form.gender||''} onChange={e=>setForm({...form, gender: e.target.value})} />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label className='form-label'>Subjects</label>
                            {form.subject?.map((subject, index)=> (
                                <div key={index} className='d-flex gap-2 align-items-center mb-2'>
                                    <input className='form-control' value={subject||''} onChange={e=>{
                                        const s = [...(form.subject||[])]; s[index]=e.target.value; setForm({...form, subject: s});
                                    }} />
                                    <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>{
                                        const s = (form.subject||[]).filter((_,i)=>i!==index); setForm({...form, subject: s});
                                    }}>Remove</button>
                                </div>
                            ))}

                            <div>
                                <button type='button' className='btn btn-outline-secondary btn-sm' onClick={()=> setForm({...form, subject: [...(form.subject||[]), '']})}>Add Subject</button>
                            </div>
                        </div>

                        <div className='mt-4 d-flex gap-2'>
                            <button className='btn btn-primary' type='submit'>Update</button>
                            <Link to='/' className='btn btn-outline-secondary'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
