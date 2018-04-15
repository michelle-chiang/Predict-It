import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import { Grid, Row, Col } from 'react-bootstrap';
// import $ from 'jquery';

import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
// import Button from 'elements/CustomButton/CustomButton.jsx';

import {
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    today,
    optionsBar,
    responsiveBar,
    legendBar,
    vegetablesNeeded
} from 'variables/Variables.jsx';

class Dashboard extends Component {
    createLegend(json){
        var graphColor = ["a","b","c","d","e"];
        var legend = [];
        var num_items = json["names"].length;

        function changeChartData() {
            var chart = document.getElementById("chartHours");
            var parent = chart.parentNode;
            parent.removeChild(chart);
            new Chartist.Line(parent, {
                labels: vegetablesNeeded.labels,
                series: vegetablesNeeded.series
            })
        }

        for(var i = 0; i < num_items; i++){
            var type="fa fa-circle legend-"+graphColor[i];
            legend.push(
                <button key={i} onClick={changeChartData}>
                    <i className={type} ></i>
                    <span>{json["names"][i]}</span>
                </button>
            );
            // legend.push(
            //     <a href="#" className="legend" key={i + num_items}>{json["names"][i]}</a>
            // );
            // legend.push(" ");
            // legend.push(
            //     json["names"][i]
            // );
        } 
        return legend;
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-date text-warning"></i>}
                                statsText="Today is..."
                                statsValue={today}
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                                statsText="Revenue"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph1 text-danger"></i>}
                                statsText="Customers"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-twitter text-info"></i>}
                                statsText="Followers"
                                statsValue="+45"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                // statsIcon="fa fa-history"
                                // id="chartHours"
                                title="Food purchases prediction"
                                category="Weekly Prediction"
                                content={
                                    <div className="ct-chart" id="chartHours">
                                        <ChartistGraph
                                            data={dataSales}
                                            type="Line"
                                            options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendSales)}
                                    </div>
                                }
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Card
                                id="chartActivity"
                                title="2017 Sales"
                                category="Sales per month"
                                // stats="in thousands of dollars"
                                // statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataBar}
                                            type="Bar"
                                            options={optionsBar}
                                            responsiveOptions={responsiveBar}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendBar)}
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        );
    }
}

export default Dashboard;

// <Button bsStyle="default" block onClick={() => this.props.handleClick('tl')}>Top Left</Button>
