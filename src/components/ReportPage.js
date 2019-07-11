import React, { Component } from 'react';
import axios from 'axios';
import httpService from '../service/http-service';

export default class ReportPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reportHTML: ''
    };
  }

  async componentDidMount() {
    var innerScript = document.createElement("script");
    innerScript.type = "text/javascript";
    innerScript.innerHTML = scriptString;
    document.head.appendChild(innerScript)

    let response = await axios.get(httpService.url + '/report')
    this.setState({ reportHTML: response.data })
  }

  render() {
    if (this.state.reportHTML) {
      return (
        <div dangerouslySetInnerHTML={{ __html: this.state.reportHTML }} />
      )
    }
    else {
      return <div style={divStyle}>Loading...</div>;
    }
  }
}

const divStyle = {
  fontSize: '36px',
  textAlign: 'center',
};

const scriptString = `
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(function() {drawChart({
                                                          "title": "TestSuites",
                                                          "passed": 1,
                                                          "failed": 0,
    })
  });
  google.charts.setOnLoadCallback(function() {drawChart({
                                                          "title": "TestCases",
                                                          "passed": 3,
                                                          "skipped": 0,
                                                          "errors": 0,
                                                          "failed": 0
    })
  });

  function drawChart(chartData) {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Project Results'],
      ['Passed', chartData.passed],
      ['Skipped', chartData.skipped],
      ['Errors', chartData.errors],
      ['Failed', chartData.failed]
    ]);

    var testsNumber = chartData.passed + chartData.failed + (chartData.skipped || 0) + (chartData.errors || 0);
    var title;

    if (testsNumber === 1) {
      title = testsNumber + ' ' + chartData.title.slice(0, -1);
    } else {
      title = testsNumber + ' ' + chartData.title;
    }
    
    var options = {
      width: '100%',
      height: 270,
      title: title,
      is3D: true,
      fontSize: '12',
      colors: ['#5cb85c', '#f0ad4e', '#5bc0de', '#d9534f'],
      pieStartAngle: 100,
      backgroundColor: 'white',
      titleTextStyle: {
        fontSize: '13',
        color: '#5e5e5e'
      }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_' + chartData.title.toLowerCase()));
    chart.draw(data, options);
  }
`