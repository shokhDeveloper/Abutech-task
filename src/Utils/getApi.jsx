import axios from "axios"

export const Api = {
    getCountryFlag(value){
        return(
            axios.get(`https://restcountries.com/v3.1/name/${value}`)
        )
    }
}