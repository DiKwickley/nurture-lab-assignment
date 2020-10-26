import React from 'react'

import Filter from './elements/Filter.element'
import Featuredexpert from './elements/Featuredexpert.element'

const Findexpert = () => {

	return(
		<div className="container-fluid d-flex flex-column p-0 bg-smoke">
			<div className="container-fluid d-flex my-5 flex-md-row flex-column p-0">
				<div className="col-4">
					<Filter />
				</div>
				<div className="flex-grow-1">
					<Featuredexpert />
				</div>
			</div>
		</div>
		)
}

export default Findexpert