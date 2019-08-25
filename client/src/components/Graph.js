import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

class Graph extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">

					<form
						onSubmit={
              this.props.handleSubmit(values => {
                console.log(values);
              })
            }
					>
						<Field type="" name="searchbar" component={SearchBar} />
						<button
							className="col s2 btn waves-effect waves-light brown darken-1 right"
							type="submit"
							name="action"
						>
							Submit
							<i className="material-icons right">send</i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}

Graph = reduxForm({
	form: 'Graph'
})(Graph);



export default connect(null, actions)(Graph);
