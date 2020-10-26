import React from 'react'

const Filterbyrating = () => {

	return(
		<div className="container d-flex flex-column text-left my-4">
			<p className="small text-gray font-weight-bold">RATINGS</p>
			<div className="flex-row">
				<div className="form-check-inline">
				  <label className="form-check-label">
				    <input type="checkbox" className="form-check-input" value="" />
				    <span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
				  </label>
				</div>
				<div className="form-check-inline">
				  <label className="form-check-label">
				    <input type="checkbox" className="form-check-input" value="" />
				    <span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-unchecked"></span>

				  </label>
				</div>
			</div>
			<div className="flex-row flex-fill">
				<div className="form-check-inline">
				  <label className="form-check-label">
				    <input type="checkbox" className="form-check-input" value="" />
				    <span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-unchecked"></span>
					<span className="fa fa-star star-unchecked"></span>
				  </label>
				</div>
				<div className="form-check-inline">
				  <label className="form-check-label">
				    <input type="checkbox" className="form-check-input" value="" />
				    <span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-checked"></span>
					<span className="fa fa-star star-unchecked"></span>
					<span className="fa fa-star star-unchecked"></span>
					<span className="fa fa-star star-unchecked"></span>
				  </label>
				</div>
			</div>
		</div>
		)
}


export default Filterbyrating