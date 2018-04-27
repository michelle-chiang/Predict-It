import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import {
    today,
    oneWeekFromToday,
    get,
    generateTableSet
} from 'variables/Variables.jsx';

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: today,
            endDate: oneWeekFromToday,
        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    handleStartDateChange(event) {
        this.setState({startDate: event.target.value});
    }

    handleEndDateChange(event) {
        this.setState({endDate: event.target.value});   
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                <h1>Ingredient Purchases</h1>
                    <Row>
                        <Col md={12}>
                            <h3>Pick the date range you want to see data for.</h3>
                            <p>(If you pick a date after today, we're showing you our predictions for how much you'll need.)</p>
                            <form className="date-picker">
                                <label> Dates:&nbsp;
                                    <input type="text" placeholder="MM/DD/YY" value={this.state.startDate} onChange={this.handleStartDateChange}/>
                                    &nbsp;-&nbsp;
                                    <input type="text" placeholder="MM/DD/YY" value={this.state.endDate} onChange={this.handleEndDateChange}/>
                                </label>&nbsp;
                            </form>
                            <Card
                                plain
                                title="Vegetables"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    get([0], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Vegetables')).map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                get([1], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Vegetables')).map((prop,key) => {
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
                                                    get([0], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Fruits')).map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                get([1], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Fruits')).map((prop,key) => {
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
                                                    get([0], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Proteins')).map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                get([1], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Proteins')).map((prop,key) => {
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
                                                    get([0], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Beverages')).map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                get([1], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Beverages')).map((prop,key) => {
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
                                                    get([0], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Other')).map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                get([1], generateTableSet(this.state.startDate, this.state.endDate, 'ingPred', 'Other')).map((prop,key) => {
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
                                                    get([0], generateTableSet(this.state.startDate, this.state.endDate, 'itemsSold')).map((prop, key) => {
                                                        return (
                                                            <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                get([1], generateTableSet(this.state.startDate, this.state.endDate, 'itemsSold')).map((prop,key) => {
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

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
