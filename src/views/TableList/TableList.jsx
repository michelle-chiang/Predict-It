import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import {thArray, tdArray, generateTableSet} from 'variables/Variables.jsx';

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '2018/04/15',
            endDate: '2018/04/21',
            // database: 'catPred', // start off with categories graph
            // predictor: '',
        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        // this.updateGraphData = this.updateGraphData.bind(this);
        // this.renderGraphData = this.renderGraphData.bind(this);
    }

    // updateGraphData() {
    //     // reset predictor if not applicable
    //     if (this.state.database !== 'ingPred') {
    //         this.state.predictor = '';
    //     }
    //     // TODO: reset label?
    //     var newData = generateDataSet(this.state.startDate, this.state.endDate, this.state.database, this.state.predictor)
    //     if (newData) {
    //         this.state.graphData = newData[0];
    //         this.state.legend = newData[1];
    //     }
    // }

    // renderGraphData(graphData) {
    //     this.updateGraphData();
    //     return this.state.graphData;
    // }

    handleStartDateChange(event) {
        // TODO: add red warning if date not formatted correctly
        this.setState({startDate: event.target.value});
    }

    handleEndDateChange(event) {
        // TODO: add red warning if date not formatted correctly
        this.setState({endDate: event.target.value});   
    }

    render() {
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <label> Dates:&nbsp;
                        <input type="text" placeholder="YYYY/MM/DD" value={this.state.startDate} onChange={this.handleStartDateChange}/>
                        &nbsp;-&nbsp;
                        <input type="text" placeholder="YYYY/MM/DD" value={this.state.endDate} onChange={this.handleEndDateChange}/>
                    </label>&nbsp;
                    <input type="submit" value="Submit"/>
                </form>
                <Grid fluid>
                <h1>Ingredient Purchases</h1>
                <h3>(If you pick a date after today, we're showing you our predictions for how much you'll need.)</h3>
                    <Row>
                        <Col md={12}>
                            <Card
                                plain
                                title="Vegetables"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Vegetables')[0].map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Vegetables')[1].map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                if (typeof prop === "string") {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <td  key={key}>{prop} lb</td>
                                                                    );
                                                                }
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                            <Card
                                plain
                                title="Fruits"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Fruits')[0].map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Fruits')[1].map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                if (typeof prop === "string") {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <td  key={key}>{prop} lb</td>
                                                                    );
                                                                }
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                            <Card
                                plain
                                title="Proteins"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Proteins')[0].map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Proteins')[1].map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                if (typeof prop === "string") {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <td  key={key}>{prop} lb</td>
                                                                    );
                                                                }
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                            <Card
                                plain
                                title="Beverages"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Beverages')[0].map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Beverages')[1].map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                if (typeof prop === "string") {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <td  key={key}>{prop} lb</td>
                                                                    );
                                                                }
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                            <Card
                                plain
                                title="Other"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Other')[0].map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Other')[1].map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                if (typeof prop === "string") {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <td  key={key}>{prop} lb</td>
                                                                    );
                                                                }
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                        <Col md={12}>
                            <h1>Menu Items Sold</h1>
                            <h3>(If you pick a date after today, we're showing you our predictions for how many you'll sell.)</h3>
                            <Card
                                plain
                                title="Numbers represent units sold."
                                category=""
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    generateTableSet(this.state.startDate, this.state.endDate, 'itemsSold')[0].map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                generateTableSet(this.state.startDate, this.state.endDate, 'itemsSold')[1].map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                if (typeof prop === "string") {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                }
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
