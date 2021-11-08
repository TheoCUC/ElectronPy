// renderer.js

var thrift = require('thrift');

var userService = require('./gen-nodejs/userService.js');
var ttypes = require('./gen-nodejs/test_types.js');
var thriftConnection = thrift.createConnection('127.0.0.1', 8000, {
  transport: thrift.TBufferedTransport(),
  protocol: thrift.TBinaryProtocol()
  });
var thriftClient = thrift.createClient(userService,thriftConnection);



thriftConnection.on("error",function(e)
{
    console.log(e);
});

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        label:"data",
        data:[],
        fill: false,
      },
    ],
  },
  // Configuration options go here
  options: {
    title: {
      display: true,
      text: "A test chartjs",
    },
  },
});

chart.data.labels = [];
chart.data.datasets.forEach(element => {
  element.data=[];
});

chart.update();
function refreshdata(datas) {
  // Clean
  chart.data.labels = [];
  chart.data.datasets.forEach(element => {
    element.data=[];
  });
  for (let i = 0; i < datas.length; i++) {
    const element = datas[i];
    // console.log('i',i,'data',element)
    chart.data.labels.push(i);
    chart.data.datasets.forEach(element => {
      element.data.push(datas[i]);
    });
  }
  chart.update();
}
/* var client = new zerorpc.Client();
client.connect("tcp://127.0.0.1:4242"); */
let sinBtn = document.querySelector('#sinBtn')
sinBtn.addEventListener('click',() => {
  console.log("Draw sin function!");
  thriftClient.test1(0, (error, res) => {
    if(error) {
      console.error(error);
    } else {
      refreshdata(res);
    }
  })
})
sinBtn.dispatchEvent(new Event('click'))

let expBtn = document.querySelector('#expBtn')
expBtn.addEventListener('click',() => {
  console.log("Draw exp function!");
  thriftClient.test1(1, (error, res) => {
    if(error) {
      console.error(error);
    } else {
      refreshdata(res);
    }
  })
})
expBtn.dispatchEvent(new Event('click'))