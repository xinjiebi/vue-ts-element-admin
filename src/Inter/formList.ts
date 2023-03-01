interface IForm {
    name: string,
    region: string,
    date1: string,
    date2: string,
    delivery: boolean,
    type: Array<string>,
    resource: string,
    desc: string,
}

export class FormData {
    form: IForm = {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
    }

    get formData(){
        return this.form
    }

    set formData(data:IForm){
        this.form = data
    }

    toSubmin(form:IForm){
        console.log(form);
    }
}