import React,{Component} from 'react';
import pic from './pic.jpg'
import './Details.css'
class Details extends Component {
	
	// state={
	// 	info:["data management","data collection","data virsualisation","data prediction",
	// 	{
	// 		services:["how is it going"]
	// 	}]
	// };
	// {this.state.info.map(service=>{
	// 					return <div> {service}</div>
	// 				})}
	render() {


		return (

			<React.Fragment>
			<div>
				<div className="service" >
					<img src={pic} alt=""/><p>kl;fsdkfl;sdk</p>
				</div>
				<div className="service">
					<p>kl;fsdkfl;sdk</p><img src={pic} alt=""/>
				</div>
				<div className="service">
					<img src={pic} alt=""/><p>kl;fsdkfl;sdk</p>
				</div>
				<div className="service">
					<p>kl;fsdkfl;sdk</p><img src={pic} alt=""/>
				</div>
				
			</div>
				</React.Fragment>
		);
	}
};
export default Details;