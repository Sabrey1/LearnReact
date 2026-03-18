import api from "/index.js"

export const getStudent = async ()=>{
    const res = await api.get("student")
    return res.data
}

export const getStudentById = async (id)=>{
    const res = await api.get(`student/${id}`)
    return res.data
}

export const createStudent = async (data)=>{
    const res = await api.post("student",data)
    return res.data
}

export const updateStudent = async (id,data)=>{
    const res = await api.put(`student/${id}`,data)
    return res.data
}

export const deleteStudent = async (id)=>{
    const res = await api.delete(`student/${id}`)
    return res.data
}