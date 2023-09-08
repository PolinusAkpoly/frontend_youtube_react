import { httpClient } from "./httpClient";
import { environment } from '../environments/environment';
import { User } from "../models/user";



export default class EntityManager{

    apiUrl = environment.apiUrl

    http = new httpClient()
    
    constructor(){}

    getDatas(entity: string){
        return this.http.get(this.apiUrl+"/"+entity)
    }

    getDataById(entity: string, id: string){
        return this.http.get(this.apiUrl+"/"+entity+"/"+id)
    }

    createData(entity: string,data: any){
        return this.http.post(this.apiUrl+"/"+entity, data)
    }
    signup(user: User){
        return this.http.post(this.apiUrl+"/user/signup", user)
    }
    signin(user: User){
        return this.http.post(this.apiUrl+"/user/signin", user)
    }
    searchData(entity: string,params: string){
        return this.http.get(this.apiUrl+"/"+entity+"/search?"+params)
    }

    updateData(entity: string,id: string, data: any){
        return this.http.put(this.apiUrl+"/"+entity+"/"+id, data)
    }

    deleteData(entity: string,id: string){
        return this.http.delete(this.apiUrl+"/"+entity+"/"+id)
    }

}