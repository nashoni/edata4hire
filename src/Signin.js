import React,{Component} from 'react';

class Signin extends Component {

	render() {
		const styles={
			backgroundColor:"rgb(14, 145, 221)",
			padding :30,
			position:"fixed",
			float:"left",
			marginTop:80,
			width:300,
			height:120
		
	}
		return (

			<div style={styles}>
				<form >
					fullname:<input type="text"/><br/>
					email:<input type="email"/><br/>
					password:<input type="password"/>
					<button type="submit">submit</button>


				</form>
			</div>
		);
	}
}
export default Signin;