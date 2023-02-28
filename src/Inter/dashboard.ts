import * as echarts from 'echarts';
const weekData = {
    musical:{
        title:'New musical',
        number:5,
        percent:15.8
    },
    videoData:{
        title:"New musical",
        subTitle:"No video update this week",
        percent:0
    },
    income:{
        title:"Weekly Income",
        money:24652,
        percent:2.3
    },
    listen:{
        title:'Listen to numbers',
        number:128465671,
        percent:16
    }
}

const workData = {
    income:18923892,
    music:9128,
    video:82172,
    ad:56728,
    other:3186
}

const stackedLine = {
    title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
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
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
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
    title: {
        text: 'Basic Radar Chart'
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
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

export class DashboardData{
    weekData = weekData
    workData = workData
}

export class StackedLine{
    element: HTMLElement
    constructor(){
        this.element = document.getElementById('stackedLine')!
        this.drawPage()
    }
    drawPage(){
        echarts.init(this.element).setOption(stackedLine)
    }
}

export class Category{
    element:HTMLElement
    constructor(){
        this.element = document.getElementById('category')!
        this.drawPage()
    }
    drawPage(){
        echarts.init(this.element).setOption(category)
    }
}

export class CategoryArea{
    element:HTMLElement
    constructor(){
        this.element = document.getElementById('categoryArea')!
        this.drawPage()
    }
    drawPage(){
        echarts.init(this.element).setOption(categoryArea)
    }
}

export class Radar{
    element:HTMLElement
    constructor(){
        this.element = document.getElementById('radar')!
        this.drawPage()
    }
    drawPage(){
        echarts.init(this.element).setOption(radar)
    }
}