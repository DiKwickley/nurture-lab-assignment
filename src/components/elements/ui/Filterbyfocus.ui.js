import React from 'react'

const Filterbyfocus = () => {

	return(
		<div className="container d-flex flex-column text-left my-4">
			<p className="small text-gray font-weight-bold">FOCUS AREA</p>
			<div className="input-group mb-3">
			    <input type="text" className="form-control border-right-0" placeholder="Select Focus Areas" />
			    <div className="input-group-append">
			      <span className="input-group-text bg-white border-left-0"><i className="fa fa-search text-turquoise" aria-hidden="true"></i>
</span>
			    </div>
			</div>
		</div>
		)
}

export default Filterbyfocus