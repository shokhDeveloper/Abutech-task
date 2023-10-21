import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setError, setStatus } from "../redux/slice"

export const useFetching = (url, type) => {
    const {error, status} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if(url){
            (async function(){
                try{
                    const request = await axios.get(url).catch(error => {
                        if(error.request.readyState === 4 && type === "google" || error.request.readyState === 4 && type === "instagram" ){
                            dispatch(setStatus(200))
                        }else if(error.request.readyState === 4 && type === "twitter"){
                            dispatch(setStatus(302))
                        }else if(type === "twitter1"){
                            dispatch(setStatus(429))
                        }else if(type === "vk"){
                            dispatch(setStatus(400))
                        }else if(type === "yandex"){
                            dispatch(setStatus(302))
                        }
                    })
                }catch(error){
                    dispatch(setError(error))
                }
            }())
        }
    },[url])
   return {error, status}
}