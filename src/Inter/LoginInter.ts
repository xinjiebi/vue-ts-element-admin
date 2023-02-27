interface ILoginForm {
    username:string,
    password:string
}

export class signIn {
    signInDate:ILoginForm = {
        username: "",
        password: ""
    }
    constructor(username:string, password:string){
        this.signInDate.username = username
        this.signInDate.password = password
    }

    get username(){
        return this.signInDate.username
    }

    get password(){
        return this.signInDate.password
    }
    
    set username(value){
        this.signInDate.username = value
    }

    set password(value){
        this.signInDate.password = value
    }

    signIn(){
        if(this.signInDate.username == '' || this.signInDate.password == ''){
            console.log("账号密码没有输入")
        }else{
            console.log("账号密码已经输入");
            
        }
    }
}