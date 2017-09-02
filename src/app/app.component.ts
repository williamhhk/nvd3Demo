import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let d3: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  '../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None

})

export class AppComponent implements OnInit {
  options;
  data;
  ngOnInit() {
    this.options = {
            chart: {
              type: 'pieChart',
              height: 350,
            
              donut: true,
              x: function(d) {
                if (d.key.length > 30) {
                  return d.key.substr(0, 30) + "...";
                } else {
                  return d.key + '   ' + d.y;
                }
              },
              y: function(d){return d.y;},
              showLabels: true,
              //pieLabelsOutside : true,
              labelType : "value",
              // useInteractiveGuideline: true, 
              //showLegend : false,               

              // pie: {
              //     startAngle: function(d) { return d.startAngle -Math.PI/2 },
              //     endAngle: function(d) { return d.endAngle -Math.PI/2 }
              // },
              // duration: 500,
              // legend: {
              //     margin: {
              //         top: 50,
              //         right: 0,
              //         bottom: 50,
              //         left: 0
              //     }
              // }

              transitionDuration: 500,
              legend: {
                vers : 'furious',
                  margin: {
                      top: 60,
                      right: 0,
                      bottom: 0,
                      left: 0
                  }                
              },

              legendPosition: 'right',
              valueFormat: function(d) {
                return d;
              }
        } 
    };

    this.data = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six sadfsadfsa",
                y: 3
            },

        ];

  }

}
