import React from 'react'

import Filterbyexpertise from './ui/Filterbyexpertise.ui'
import Filterbyfocus from './ui/Filterbyfocus.ui'
import Filterbyrating from './ui/Filterbyrating.ui'
import Filterbyprice from './ui/Filterbyprice.ui'
import Filterbysession from './ui/Filterbysession.ui'
import Filterbylanguage from './ui/Filterbylanguage.ui'

const Filter = () => {

	return(
		<div className="container-fluid m-0 pl-3">
			<h5 className="text-left font-weight-bold py-3">Filters</h5>
			<div className="container bg-white px-0 py-3 rounded shadow-sm">
				<Filterbyexpertise />
				<Filterbyfocus />
				<Filterbyrating />
				<Filterbyprice />
				<Filterbysession />
				<Filterbylanguage />
			</div>
		</div>
		)
}

export default Filter