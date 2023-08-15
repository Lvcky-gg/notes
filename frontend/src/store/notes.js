import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"
import Cookies from "js-cookie"

export const noteSlice = createSlice({
    name:'notes',
    initialState:{
        allNotes:[],
        errors:null,
        note:null
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
            state.note = action.payload
            state.errors = null

        })
        .addCase(getANote.rejected, (state, action)=>{
            state.note = null
            state.errors = action.payload

        })
        .addCase(updateANote.fulfilled, (state, action)=>{
            const updateNote = action.payload;
            const idx = state.allNotes.findIndex((note)=> note.id === updateNote.id)
            state.allNotes[idx] = updateNote
            state.errors = null
        })
        .addCase(updateANote.rejected, (state, action)=>{
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
export const updateANote = createAsyncThunk(
    "notes/getANote",
    async ({noteId, body}, {rejectWithValue}) => {
        try {
            const res = await axios.put(
                `/api/notes/${noteId}`,
                JSON.stringify({body}),
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