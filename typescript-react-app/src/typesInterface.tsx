export interface Todo{
    todo?:string,
    id:number,
    userid?:number,
    completed: boolean,
}
export interface User{
    email:string,
    id:number,
    password:string,
    text:string,
}
export interface LUser{
    user:string,
    id:number,
    password:string
}

