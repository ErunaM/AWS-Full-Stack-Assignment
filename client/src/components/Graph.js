import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import VirtualizedSelect from 'react-virtualized-select'
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button'
import LineChart from '@bit/recharts.recharts.line-chart';
import XAxis from '@bit/recharts.recharts.x-axis';
import YAxis from '@bit/recharts.recharts.y-axis';
//
import Line from '@bit/recharts.recharts.line';
import Tooltip from '@bit/recharts.recharts.tooltip';
import Legend from '@bit/recharts.recharts.legend';
 // import CartesianGrid from '@bit/recharts.recharts.cartesian-grid';
import "react-datepicker/dist/react-datepicker.css";
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import SearchBar from './SearchBar';

class Graph extends Component {
	constructor (props) {
		super(props)

		this.state = {
			places: [],
			startDate: new Date(),
			endDate: new Date(),
			station: ""
		}
		this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
		this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.plotGraph = this.plotGraph.bind(this)

	}

	plotGraph(){
		// console.log(this.state)
		var postJson = {
			station : this.state.station,
			startDate : this.state.startDate,
			endDate : this.state.endDate
		}
		console.log(postJson)
		var postJson = JSON.parse(JSON.stringify(postJson))
		this.props.fetchTempData(postJson)
		console.log(this.props.temp)

	}
	handleChangeStartDate(date) {
		this.setState({
			startDate: date
		});
	}
	handleChangeEndDate(date) {
		this.setState({
			endDate: date
		});

	}
	handleLocationChange(e){
		console.log(e.value)
		this.setState({
			station: e.value,
			selectValue: e

		})
	}

	componentDidMount() {

			this.props.fetchData()

	}
	render() {

		console.log(this.props.temp)
		var temp = this.props.temp

		const data = []
		for(i = 0; i < temp.length; i++){
			console.log(temp[i].date)
			//Max Temp
			console.log(temp[i].variables[0].value)
			//Min Temp
			console.log(temp[i].variables[1].value)
			data.push({
				name: temp[i].date, maxTemp: temp[i].variables[0].value, minTemp: temp[i].variables[1].value, amt: 2400,
			})
		}
		// const data = [
		// 	{
		// 		name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
		// 	},
		// 	{
		// 		name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
		// 	},
		// 	{
		// 		name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
		// 	},
		// 	{
		// 		name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
		// 	},
		// 	{
		// 		name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
		// 	},
		// 	{
		// 		name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
		// 	},
		// 	{
		// 		name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
		// 	},
		// ];

		var name;
		var station;
		var options = []
		for (var i=0; i < this.props.places.length; i++){
			name = this.props.places[i][1]
			station = this.props.places[i][0]
			var jsonstuff = {}
			jsonstuff.label = name
			jsonstuff.value = station
			options.push(jsonstuff)
		}

		return (
			<div className="container">
				<VirtualizedSelect
					 options={options}
					 onChange={(selectValue) => this.handleLocationChange(selectValue)}
					 value={this.state.selectValue}

				 />
				 <label>
			    Start Date:
			  </label>
				 <DatePicker
					 selected={this.state.startDate}
					 onChange={this.handleChangeStartDate}
				 />
				 <label>
					 End Date:
				 </label>
				 <DatePicker
					 selected={this.state.endDate}
					 onChange={this.handleChangeEndDate}
				 />
				 <br/>
				 <Button variant="primary" size="lg" onClick={this.plotGraph.bind(this.state)}>
					 Plot Graph
				 </Button>
				 <LineChart
					 width={500}
					 height={300}
					 data={data}
					 margin={{
						 top: 5, right: 30, left: 20, bottom: 5,
					 }}
				 >

					 <XAxis dataKey="name" />
					 <YAxis />
					 <Tooltip />
					 <Legend />
					 <Line type="monotone" dataKey="maxTemp" stroke="#8884d8" strokeDasharray="5 5" />
					 <Line type="monotone" dataKey="minTemp" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
				 </LineChart>
			</div>
		);
	}
}

Graph = reduxForm({
	form: 'Graph'
})(Graph);

function mapStateToProps({ places, temp }) {
	return { places, temp };
}



export default connect(mapStateToProps, actions)(Graph);
