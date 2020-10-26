import React from 'react'

const Filterbyprice = () => {
	return(
		<div className="container d-flex flex-column text-left my-4">
			<p className="small text-gray font-weight-bold">PRICE</p>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />Free
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />Less than $25
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />$25 - $50
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />$50 - $100
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />More than $100
			  </label>
			</div>
		</div>
		)
}


export default Filterbyprice