import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import "./User.css"

const User = () => {
	return (
		<>
			<Navbar/>
			<div className="main">
				<Outlet/>
			</div>
			<Footer/>
		</>
	)
}

export default User;