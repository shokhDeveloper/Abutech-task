import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCloseLoader, setOpenLoader } from "../redux/slice"

export const useLoader = () => {
    const {loader} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const openLoader = () => {
        dispatch(setOpenLoader())
    }
    const closeLoader = () => {
        dispatch(setCloseLoader())
    }
    useEffect(() => {
        if(loader){
            setTimeout(() => {
                closeLoader()
            },2000) 
        }
    },[loader])
    return {openLoader}
}