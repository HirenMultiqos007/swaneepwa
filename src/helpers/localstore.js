export const getLocalStore =(key)=>{
    if(key){
            return JSON.parse(window.localStorage.getItem(key))
    }else{
        return false
    }
}
export const setLocalStore =(key,value)=>{
    if(key && value){
            window.localStorage.setItem(key,JSON.stringify(value))
    }else{
        return false
    }
}
export const removeLocalStore =(key)=>{
    if(key){
           return window.localStorage.removeItem(key)
    }else{
        return false
    }
}
export const checkLocalStore =(key)=>{
    if(key){
           if(key in localStorage){
                return true
           }
           else{
                return false
           }
    }else{
        return false
    }
}