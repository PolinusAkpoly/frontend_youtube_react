import { User } from "./user";

export interface Video{
    _id?: string,
    name: string,
    description?: string,
	fileUrl?: string,
	views?: number,
	userId : User,
    poster_images?: Array<string>,
    created_at : Date,
    updated_at?: Date,

}