import React, {useState} from 'react'

const Filterbylanguage = () => {

	const [more, setMore] = useState(false)

	let changeMoreHanler = () => {
		more?setMore(false):setMore(true);
	}

	return(
		<div className="container d-flex flex-column text-left my-4">
			<p className="small text-gray font-weight-bold">LANGUAGE</p>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />English
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />French
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />German
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />Hindi
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />Arabic
			  </label>
			</div>

			<div className="form-check">
			  <label className="form-check-label small font-weight-bold">
			    <input type="checkbox" className="form-check-input" value="" />Mandrin Chinese
			  </label>
			</div>

			{
				more===false?(
					<p onClick={changeMoreHanler} className="small text-turquoise font-weight-bold cursor-pointer m-4">More</p>
					):(
						<div>
						<div className="form-check">
						  <label className="form-check-label small font-weight-bold">
						    <input type="checkbox" className="form-check-input" value="" />Japanese
						  </label>
						</div>

						<div className="form-check">
						  <label className="form-check-label small font-weight-bold">
						    <input type="checkbox" className="form-check-input" value="" />Spanish
						  </label>
						</div>

						<div className="form-check">
						  <label className="form-check-label small font-weight-bold">
						    <input type="checkbox" className="form-check-input" value="" />Russian
						  </label>
						</div>
						<p onClick={changeMoreHanler} className="small text-danger font-weight-bold cursor-pointer m-4">Less</p>
						</div>
						
					)
			}
			

		</div>
		)
}

export default Filterbylanguage