import * as echarts from 'echarts';
interface IIncomeData {
  title: string,
  money: string,
  percent: number
}
interface IMusicalData {
  title: string
  number: string
  percent: number
}
interface IVideoData {
  title: string
  subTitle: string
  percent: number
}
interface IListenData {
  title: string,
  number: string,
  percent: number
}
interface IWorkData {
  income: string,
  music: string,
  video: string,
  ad: string,
  other: string
}
const weekData = {
  musical: {
    title: 'New musical',
    number: 5,
    percent: 15.8
  },
  videoData: {
    title: "New musical",
    subTitle: "No video update this week",
    percent: 0
  },
  income: {
    title: "Weekly Income",
    money: 24652,
    percent: 2.3
  },
  listen: {
    title: 'Listen to numbers',
    number: 128465671,
    percent: 16
  }
}

const workData = {
  income: 18923892,
  music: 9128,
  video: 82172,
  ad: 56728,
  other: 3186
}

const stackedLine = {


  legend: {
    data: ['Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

const category = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}

const categoryArea = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
}

const radar = {
  
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
}
export class ChangeNum {
  // 修改数字展现样式  1234567 ->  1,234,567
  change(num: number) {
    const str = num.toString()
    const reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    return str.replace(reg, "$1,")
  }
}

export class DashboardData {
  musical: IMusicalData
  videoData: IVideoData
  income: IIncomeData
  listen: IListenData
  changeNum = new ChangeNum().change

  constructor() {
    this.musical = {
      title: weekData.musical.title,
      number: this.changeNum(weekData.musical.number),
      percent: weekData.musical.percent
    }
    this.videoData = weekData.videoData
    this.income = {
      title: weekData.income.title,
      money: this.changeNum(weekData.income.money),
      percent: weekData.income.percent
    }
    this.listen = {
      title: weekData.listen.title,
      number: this.changeNum(weekData.listen.number),
      percent: weekData.listen.percent
    }


  }
}

export class DashboardWorkData {
  workData :IWorkData
  changNum =  new ChangeNum().change
  constructor(){
    this.workData = {
      income: `$${this.changNum(workData.income)}`,
      music: `$${this.changNum(workData.music)}`,
      video: `$${this.changNum(workData.video)}`,
      ad: `$${this.changNum(workData.ad)}`,
      other: `$${this.changNum(workData.other)}`
    }
  }
}  

export class StackedLine {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('stackedLine')!
    this.drawPage()
  }
  drawPage() {
    echarts.init(this.element).setOption(stackedLine)
  }
}

export class Category {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('category')!
    this.drawPage()
  }
  drawPage() {
    echarts.init(this.element).setOption(category)
  }
}

export class CategoryArea {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('categoryArea')!
    this.drawPage()
  }
  drawPage() {
    echarts.init(this.element).setOption(categoryArea)
  }
}

export class Radar {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('radar')!
    this.drawPage()
  }
  drawPage() {
    echarts.init(this.element).setOption(radar)
  }
}