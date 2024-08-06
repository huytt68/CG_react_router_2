import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="navbar text-center">
				<Link to="/user">Home</Link> |
				<Link to="/user/hot-product">Hot</Link> |
				<Link to="/user/category">Category</Link>
			</div>
		</>
	)
}

export default Navbar;