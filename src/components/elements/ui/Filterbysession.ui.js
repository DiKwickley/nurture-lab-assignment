import React from 'react'

const Filterbysession = () => {

	return(
		<div className="container d-flex flex-column text-left my-4">
			<p className="small text-gray font-weight-bold">SESSION AVAILABLITY</p>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />15 min
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />30 min
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />60 min
			  </label>
			</div>

		</div>
		)
}

export default Filterbysession