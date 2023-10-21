import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loader: localStorage.getItem("loader-task") ? false: true,
    languagesBox: false,
    defaultLanguage: "en",
    flag: null,
    status: 0,
    error: {},
    links : [
        { name: "google", link: "https://www.google.com/" },
        { name: "yandex", link: "https://ya.ru/" },
        { name: "instagram", link: "https://www.instagram.com/" },
        { name: "vk", link: "https://www.vk.com/" },
        { name: "twitter", link: "https://twitter.com/" },
        { name: "twitter1", link: "https://twitter1.com/" },
      ]
}
const slice = createSlice({
    name: "abutech-task",
    initialState,
    reducers:{
        setOpenLoader(state){
            state.loader = true
            localStorage.removeItem("loader-task")
        },
        setCloseLoader(state){
            state.loader = false
            localStorage.setItem("loader-task", "loader-end")
        },
        setLanguageBox(state, action){
            state.languagesBox = action.payload
        },
        setCountryFlag(state, action){
            state.flag = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        },
        setError(state, action){
            state.error = action.payload
        }
    }
})
export const {setOpenLoader, setCloseLoader, setLanguageBox, setLanguageChange, setCountryFlag, setStatus, setError} = slice.actions
export const Reducer = slice.reducer