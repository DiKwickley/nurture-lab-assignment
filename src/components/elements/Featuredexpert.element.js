import React, {useEffect, useState,useContext} from 'react'

import {ExpertContext} from '../../App.js'



const Expertinfo = (props) => {


	return(
		<div className="bg-white mb-4 p-2 d-flex flex-row rounded shadow-sm">

		<div className="m-2 d-flex flex-column">
			<img src={props.expert.image} className="rounded-circle" alt={props.expert.name} height="100px" />
			<p className="my-2 text-gray em-p9"> Price: <span className="font-weight-bold text-turquoise">{props.expert.price===0?"Free":'$'+props.expert.price} </span> </p>
			<div className="em-p9 text-orange">
				<span className="fa fa-star star-checked mx-2"></span> {props.expert.rating}
				<span className="text-black mx-2"> ({props.expert.numberOfRatings})</span>
			</div>

		</div>

		<div className="mx-3 my-1 flex-grow-1 ">
			<div className="d-flex border border-top-0 border-right-0 border-left-0">
				<div className="d-flex flex-column mr-auto">
					<h4 className="font-weight-bold">{props.expert.name} </h4>
					<p className="small mr-auto"> {props.expert.work} </p>
				</div>
				<i className="fa fa-heart-o text-orange mx-4 em-1p4 d-flex flex-wrap align-content-center align-self-start "></i>
				<button className="btn bg-orange text-white font-weight-bold mx-1 py-0 align-self-start">View Profile </button>
			</div>
			<div className="d-flex">
				<p className="small mr-3 text-gray"> <span className="fa fa-clock-o m-1"></span> {props.expert.session} min session </p>
				<p className="small mr-3 text-gray"> <span className="fa fa-map-marker m-1"></span>{props.expert.location} </p>
				<p className="small mr-3 text-gray"> <span className="m-1 font-weight-bold">T</span>{props.expert.languages.join(', ')} </p>
			</div>
			
			<div className="d-flex text-left">
			<p className="mt-2 em-p9 mr-auto">{props.expert.bio} </p>
			</div>
			<div className="d-flex text-left">
				{
					props.expert.expertise.map((area, index) => {
						return (
								<p className="mx-2 small py-0 pill px-4 text-gray bg-lightgray font-weight-bold">{area}</p> 
							)
					})
				}
			</div>
		</div>


		

			

			
			

		</div>
		)
}

const Featuredexpert = () => {

	const experts = useContext(ExpertContext)

	


	useEffect(()=> {
		
	})


	return(
		<div className="container-fluid m-0 pl-0 pr-4">
		<div className="d-flex">
			<h5 className="text-left font-weight-bold py-3 align-self-start">Featured Experts</h5>

			<div className="dropdown ml-auto align-self-start">
			  <button type="button" className="btn bg-white dropdown-toggle px-5 rounded" data-toggle="dropdown">
			    Best Match
			  </button>
			  <div className="dropdown-menu">
			    <a className="dropdown-item" href="#">Link 1</a>
			    <a className="dropdown-item" href="#">Link 2</a>
			    <a className="dropdown-item" href="#">Link 3</a>
			  </div>
			</div>
		</div>
			{
				experts.map((expert,index) => {
					return <Expertinfo expert={expert} key={index} />
				})
			}
		</div>
		)
}

export default Featuredexpert