import moment from "moment"

export const getCurrentUserId = ()=>{
    try {
        const authData: any = JSON.parse(localStorage.getItem("authData") || '')
        if(authData &&  authData.userId){
            return authData.userId
        }else{
            return false
        }
        
    } catch (error) {
        return null
    }
 
}

export const convertDateToString = (date: any ): string =>{
    const newDate = new Date()
    const result = moment(newDate).fromNow()

    return result
}