import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getStudent, getStudentById, updateStudent as updateStudentService, deleteStudent as deleteStudentService } from "../services/student.js"

export const getStudents = createAsyncThunk(
    'student/getStudents',
    async()=>{
        const data = await getStudent();
        return data;
    }
)

export const fetchStudentById = createAsyncThunk(
    'student/fetchStudentById',
    async(id)=>{
        const data = await getStudentById(id);
        return data;
    }
)

export const updateStudentById = createAsyncThunk(
    'student/updateStudentById',
    async({id, data}, thunkAPI)=>{
        const res = await updateStudentService(id, data);
        thunkAPI.dispatch(getStudents());
        return res;
    }
)

export const deleteStudentById = createAsyncThunk(
    'student/deleteStudentById',
    async(id, thunkAPI)=>{
        await deleteStudentService(id);
        thunkAPI.dispatch(getStudents());
        return id;
    }
)


export const studentSlice = createSlice({
    name: 'student',
    initialState:{
        student:[],
        students: null,
        status: null
    },
    extraReducers:(builder) =>{
        builder.addCase(getStudents.fulfilled,(state, action)=>{
            state.student = action.payload;
        })
        .addCase(getStudents.rejected,(state)=>{
            state.status = 'failed';
        })
        .addCase(fetchStudentById.fulfilled,(state, action)=>{
            state.student = action.payload;
        })
        .addCase(fetchStudentById.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(fetchStudentById.rejected,(state)=>{
            state.status = 'failed';
        })
        .addCase(updateStudentById.fulfilled,(state, action)=>{
            state.status = 'updated';
        })
        .addCase(updateStudentById.rejected,(state)=>{
            state.status = 'failed';
        })
        .addCase(deleteStudentById.fulfilled,(state, action)=>{
            state.status = 'deleted';
        })
        .addCase(deleteStudentById.rejected,(state)=>{
            state.status = 'failed';
        })

    }
})

export default studentSlice.reducer;