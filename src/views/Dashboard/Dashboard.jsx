import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import { Grid, Row, Col } from 'react-bootstrap';
// import $ from 'jquery';

import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
// import Button from 'elements/CustomButton/CustomButton.jsx';

import {
    // dataSales,
    optionsSales,
    responsiveSales,
    // legendSales,
    dataBar,
    today,
    optionsBar,
    responsiveBar,
    legendBar,
    // vegetablesNeeded,

    generateDataSet,
    daysOfWeek, 
    monthsOfYear

} from 'variables/Variables.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '04/15/18',
            endDate: '04/21/18'
        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleStartDateChange(event) {
        // TODO: add red warning if date not formatted correctly
        this.setState({startDate: event.target.value});
    }

    handleEndDateChange(event) {
        // TODO: add red warning if date not formatted correctly
        this.setState({endDate: event.target.value});
    }

    handleSubmit(event) {
        // TODO: update data object by using generate dataset function
        console.log(this.state.startDate, this.state.endDate)
        event.preventDefault();
    }

    // TODO: use state to remember what chart just got drawn
    createLegend(json, id="") {
        function changeChartData(dataSeries) {
            var chart = document.getElementById(id);
            if (chart) {
                var parent = chart.parentNode;
                parent.removeChild(chart);

                parent.setAttribute("id","chart-" + dataSeries.name)
                new Chartist.Line("#chart-" + dataSeries.name, {
                    labels: dataSeries.labels,
                    series: dataSeries.series,
                    options: optionsSales
                })
                // // TODO: add footer / legend
                // <div className="legend">
                //     {this.createLegend(legendSales, "chartHours")}
                // </div>
            }  
        };

        var graphColor = ["a","b","c","d","e"];
        var legend = [];
        var num_items = json["names"].length;

        for(var i = 0; i < num_items; i++){
            var type="fa fa-circle legend-"+graphColor[i];
            // if (id) {
            //    legend.push(
            //         <button key={i} onClick={() => changeChartData(vegetablesNeeded)}>
            //             <i className={type} ></i>
            //             <span>{json["names"][i]}</span>
            //         </button>
            //     ); 
            // } else {
                legend.push(
                    <i className={type} key={i}></i>
                );
                legend.push(" ");
                legend.push(
                    json["names"][i]
                ); 
            }
        // } 
        return legend;
    }
    render() {
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <label> Dates:&nbsp;
                        <input type="text" placeholder="MM/DD/YY" value={this.state.startDate} onChange={this.handleStartDateChange}/>
                        &nbsp;-&nbsp;
                        <input type="text" placeholder="MM/DD/YY" value={this.state.endDate} onChange={this.handleEndDateChange}/>
                    </label>&nbsp;
                    <input type="submit" value="Submit"/>
                </form>
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
                                id="chartHours"
                                title={"Ingredients Needed: " + this.state.startDate + " - " + this.state.endDate}
                                category="Past Data and Predicted Future Needs (lb)"
                                // startDate, endDate, database, labels, predictor=""
                                content={
                                    <div className="ct-chart" id="chartHours">
                                        <ChartistGraph
                                            data={generateDataSet(this.state.startDate, this.state.endDate, 'catPred', daysOfWeek)[0]}
                                            type="Line"
                                            options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(generateDataSet(this.state.startDate, this.state.endDate, 'catPred', daysOfWeek)[1])}
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
