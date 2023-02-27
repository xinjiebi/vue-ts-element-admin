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
            console.log("信息不完善");

        } else {
            console.log("该跳转了");
        }


    }
}