import React, { useState } from "react";
import Styles from "./styles.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	
	const [selectedColor, setSelectedColor] = useState('')



	return (
		<div>
			<div className="container" style={Styles} id="TF-Top">
				<div className=" bg-black">
				</div>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="">
					<div>
						<div className="col-12 bg-black text-black d-flex justify-content-center">
							<div className="col-6 bg-black rounded-circle">
								margin top
							</div>
						</div>
						<div className="col-12 bg-black text-black d-flex justify-content-center pb-3 position-relative">
							<div className="col-6 bg-danger rounded-circle">
								<figure className="figure">
									<img src="..." className="figure-img img-fluid rounded" alt="" />
								</figure>
							</div>
							<div onClick={() => {setSelectedColor('red')}} className={`spinner-grow text-danger position-absolute w-75 h-75 opacity-${(selectedColor === 'red') ? '100' : '0'}`}  role="status">
							</div>
						</div>
						<div className="col-12 bg-black text-black d-flex justify-content-center pb-3 position-relative">
							<div className="col-6 bg-warning rounded-circle">
								<figure className="figure">
									<img src="..." className="figure-img img-fluid rounded" alt="" />
								</figure>
							</div>
							<div onClick={() => {setSelectedColor('yellow')}} className={`spinner-grow text-warning position-absolute w-75 h-75 opacity-${(selectedColor === 'yellow') ? '100' : '0'}`} role="status">
							</div>
						</div>
						<div className="col-12 bg-black text-black d-flex justify-content-center pb-3 position-relative">
							<div className="col-6 bg-success rounded-circle">
								<figure className="figure">
									<img src="..." className="figure-img img-fluid rounded" alt="" />
								</figure>
							</div>
							<div onClick={() => {setSelectedColor('green')}} className={`spinner-grow text-success position-absolute w-75 h-75 opacity-${(selectedColor === 'green') ? '100' : '0'}`} role="status">
							</div>
						</div>
						<div className="col-12 bg-black text-black d-flex justify-content-center">
							<div className="col-6 bg-black rounded-circle">
								margin bottom
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
