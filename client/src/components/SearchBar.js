import React from 'react';

export default ({ input }) => {

  return(
    <div className="col s10">
			<nav>
				<div className="nav-wrapper">
					<div className="input-field brown lighten-1">
						<input {...input} placeholder="Enter an Australian City" />
						<label className="label-icon" htmlFor="search">
							
						</label>

					</div>
				</div>
			</nav>
		</div>);
};
