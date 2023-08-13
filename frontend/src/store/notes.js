import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"
import Cookies from "js-cookie"

export const noteSlice = createSlice({
    name:'notes',
    initialState:{
        allNotes:[],
        errors:null
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        .addCase(getAllNotes.fulfilled, (state, action)=>{
            state.allNotes = action.payload
            state.errors = null

        })
        .addCase(getAllNotes.rejected, (state, action)=>{
            state.allNotes = null
            state.errors = action.payload

        })
        .addCase(getANote.fulfilled, (state, action)=>{
            state.allNotes = action.payload
            state.errors = null

        })
        .addCase(getANote.rejected, (state, action)=>{
            state.allNotes = null
            state.errors = action.payload

        })

    }
})

export const getAllNotes = createAsyncThunk(
    "notes/getAllNotes",
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios.get(
                "/api/notes",
                   {
                    headers: {
                        "Content-Type": "application/json",
                        "XSRF-Token": Cookies.get("XSRF-TOKEN"),
                      },
                   });
            if(res.data)return res.data
        }catch(err){
            return rejectWithValue({errors:err.response.data.errors})
        }
    }
)

export const getANote = createAsyncThunk(
    "notes/getANote",
    async (noteId, {rejectWithValue}) => {
        try {
            const res = await axios.get(
                `/api/notes/${noteId}`,
                   {
                    headers: {
                        "Content-Type": "application/json",
                        "XSRF-Token": Cookies.get("XSRF-TOKEN"),
                      },
                   });
            if(res.data)return res.data
        }catch(err){
            return rejectWithValue({errors:err.response.data.errors})
        }
    }
)

export default noteSlice.reducer