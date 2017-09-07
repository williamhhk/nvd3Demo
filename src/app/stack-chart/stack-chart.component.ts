import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'stack-chart',
  templateUrl: './stack-chart.component.html',
  styleUrls: ['./stack-chart.component.css']
})
export class StackChartComponent implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
    chart: {
      type: 'multiBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 45,
        left: 45
      },
      clipEdge: true,
      //staggerLabels: true,
      duration: 500,
      stacked: true,
      xAxis: {
        axisLabel: 'Time (ms)',
        showMaxMin: false,
        tickFormat: function(d){
          return d3.format(',f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: -20,
        tickFormat: function(d){
          return d3.format(',.1f')(d);
        }
      }
    }
  };
    // this.data = [
    //         {
    //             key: "One",
    //             y: 5
    //         },
    //         {
    //             key: "Two",
    //             y: 2
    //         },
    //         {
    //             key: "Three",
    //             y: 9
    //         },
    //         {
    //             key: "Four",
    //             y: 7
    //         },
    //         {
    //             key: "Five",
    //             y: 4
    //         },
    //         {
    //             key: "Six sadfsadfsa",
    //             y: 3
    //         },

    //     ];

    this.data = generateDataMultiBar();

// MultiBarChart
/* Random Data Generator (took from nvd3.org) */
function generateDataMultiBar() {
  return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
    return {
      key: 'Stream' + i,
      values: data
    };
  });
}

/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.1 + Math.random()),
      y = 2 * Math.random() - .5,
      z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
    var a = [], i;
    for (i = 0; i < m; i++) a[i] = o + o * Math.random();
    for (i = 0; i < 5; i++) bump(a);
    return a.map(stream_index);
  });
}

function stream_index(d, i) {
  return {x: i, y: Math.max(0, d)};
}        
  }
}
