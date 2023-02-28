import { ElMessage } from "element-plus";
interface ILoginForm {
    username: string,
    password: string
}

export class SignInData {
    username = ""
    password = ""

    get user() {
        return this.username
    }

    set user(value) {
        this.username = value
    }

    get pass() {
        return this.password
    }

    set pass(value) {
        this.password = value
    }
}

export class SignInRule {
    required = true
    message = "Please enter "
    trigger = ['blur', 'change']
    rulesData = {}
    constructor() {
        this.rulesData = {
            username: {
                required: true,
                message: `${this.message}username`,
                trigger: this.trigger
            },
            password:{
                required: true,
                message: `${this.message}password`,
                trigger: this.trigger
            }
        }
    }
}

export class SignIn {
    loginData: ILoginForm = {
        username: "",
        password: ""
    }


    constructor(username: string, password: string) {
        this.loginData = {
            username: username,
            password: password
        }
    }

    toSign() {
        
        if (this.loginData.username === "" || this.loginData.password === "") {
            ElMessage({
                message:"账号密码不能为空",
                type:"error"
            })
            return false
        } else if(this.loginData.username === "bibi" || this.loginData.password === "123123"){
            ElMessage({
                message:"欢迎回来 BiBi",
                type:"success"
            })
            return true
        }else{
            ElMessage({
                message:"账号密码错误",
                type:"error"
            })
            return false
        }


    }
}