const data = [
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 3723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 45723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 3723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 45723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 3723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 45723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 3723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 45723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 3723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 45723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 3723
        }
    },
    {
        image:require("@/assets/signImg.jpg"),
        title: "This is item title",
        display: {
            play: "27.33 k",
            comment: "8.25 k",
            liked: "20.3 k",
            income: 45723
        }
    }
]

interface IItem {
    image:string,
    title: string,
    display: {
        play: string,
        comment: string,
        liked: string,
        income: number,
        // [propName: string]:string
        newIncome?:string
    }
}

export class ChangeNum {
    // 修改数字展现样式  1234567 ->  1,234,567
    change(num: number) {
        const str = num.toString()
        const reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
        return str.replace(reg, "$1,")
    }
}

export class ItemData {
    newItem:Array<IItem>
    changNum = new ChangeNum().change
    constructor(){
        this.newItem = data
        for (let index = 0; index < this.newItem.length; index++) {
            const newIncome = this.changNum(this.newItem[index].display.income)
            this.newItem[index].display.newIncome = `$ ${newIncome}`
        }
    }
    
}