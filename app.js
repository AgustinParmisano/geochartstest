'use strict';

var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope) {

  $scope.chartTypes = [
    //{"id": "line", "title": "Line"},
    //{"id": "spline", "title": "Smooth line"},
    //{"id": "area", "title": "Area"},
    //{"id": "areaspline", "title": "Smooth area"},
    //{"id": "column", "title": "Column"},
    //{"id": "bar", "title": "Bar"},
    //{"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];

  $scope.createChart = function () {
    $scope.chartSeries = [
      {"name": "Datos",
        "data": []
    }
    ];
  };

  $scope.chartSeries = [
    {"name": "Some data", "data": [1.1, 2, 10.3, 2, 1]},
  ];

  $scope.chartStack = [
    {"id": '', "title": "No"},
    {"id": "normal", "title": "Normal"},
    {"id": "percent", "title": "Percent"}
  ];

  $scope.addPoints = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  };

  $scope.addSeries = function () {
    var rnd = []
    for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }
    $scope.chartConfig.series.push({
      data: rnd
    })
  }

  $scope.addParametedSerie = function (xini, xfin, p) {
    var rnd = []
    console.log("Xini: " + $scope.chartConfig.xini.text);
    console.log("Xfin: " + $scope.chartConfig.xfin.text);
    console.log("P: " + $scope.chartConfig.p.text);
    xini = $scope.chartConfig.xini.text;
    xfin = $scope.chartConfig.xfin.text;
    p = $scope.chartConfig.p.text;
    var geoCalc = (xfin - xini) / p;
    console.log("GC: " + geoCalc);
    var x = 1;
    
    //SIMULANDO LA CURVA
    for (var i = 0; i < geoCalc; i++) {
      if ((i>2) && (i<5)){ 
        x = x*2;
      }else{
        x = 1;
      };     
      rnd.push(x);
    }

    $scope.chartConfig.series.push({
      data: rnd
    })
  }

  $scope.removeRandomSeries = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
  }

  $scope.removeSeries = function (id) {
    var seriesArray = $scope.chartConfig.series;
    seriesArray.splice(id, 1)
  }

  $scope.toggleHighCharts = function () {
    this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
  }

  $scope.replaceAllSeries = function () {
    var data = [
      { name: "first", data: [10] },
      { name: "second", data: [3] },
      { name: "third", data: [13] }
    ];
    $scope.chartConfig.series = data;
  };

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'spline'
      },
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
    series: $scope.chartSeries,
    title: {
      text: 'Hello'
    },
    x: {
      text: 10
    },
    credits: {
      enabled: true
    },
    loading: false,
    size: {}
  }

  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };


});