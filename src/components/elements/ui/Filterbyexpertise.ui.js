import React from 'react'

const Filterbyexpertise = () => {

	return(
		<div className="container d-flex flex-column text-left mb-4">
			<p className="small text-gray font-weight-bold">EXPERTISE</p>
			<div className="input-group mb-3">
			    <input type="text" className="form-control border-right-0" placeholder="Select Expertise" />
			    <div className="input-group-append">
			      <span className="input-group-text bg-white border-left-0"><i className="fa fa-search text-turquoise" aria-hidden="true"></i>
</span>
			    </div>
			</div>
		</div>
		)
}

export default Filterbyexpertise