import React, { useState } from "react";
import Styles from "./styles.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [buttonLabel, setButtonLabel] = useState('Lights ON')
	const [selectedColor, setSelectedColor] = useState('')

	const changeLight = () => {
		
		((selectedColor) === 'red') ? setSelectedColor('yellow') : '';
		((selectedColor) === 'yellow') ? setSelectedColor('green') : '';
		((selectedColor) === 'green') ? setSelectedColor('red') : ''		

	};

	const lightsOnAndOff = () => {

		((selectedColor) === '') ? setSelectedColor('red') : '';
		((selectedColor) === 'red') ? setSelectedColor('') : '';
		((selectedColor) === 'yellow') ? setSelectedColor('') : '';
		((selectedColor) === 'green') ? setSelectedColor('') : '';
		((buttonLabel) === 'Lights ON') ? setButtonLabel('Lights OFF') : '';
		((buttonLabel) === 'Lights OFF') ? setButtonLabel('Lights ON') : '';		

	};

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
							<div onClick={() => { setSelectedColor('red') }} className={`spinner-grow text-danger position-absolute w-75 h-75 opacity-${(selectedColor === 'red') ? '100' : '0'}`} role="status">
							</div>
						</div>
						<div className="col-12 bg-black text-black d-flex justify-content-center pb-3 position-relative">
							<div className="col-6 bg-warning rounded-circle">
								<figure className="figure">
									<img src="..." className="figure-img img-fluid rounded" alt="" />
								</figure>
							</div>
							<div onClick={() => { setSelectedColor('yellow') }} className={`spinner-grow text-warning position-absolute w-75 h-75 opacity-${(selectedColor === 'yellow') ? '100' : '0'}`} role="status">
							</div>
						</div>
						<div className="col-12 bg-black text-black d-flex justify-content-center pb-3 position-relative">
							<div className="col-6 bg-success rounded-circle">
								<figure className="figure">
									<img src="..." className="figure-img img-fluid rounded" alt="" />
								</figure>
							</div>
							<div onClick={() => { setSelectedColor('green') }} className={`spinner-grow text-success position-absolute w-75 h-75 opacity-${(selectedColor === 'green') ? '100' : '0'}`} role="status">
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
			<div className="container d-flex justify-content-center mt-3">
				<button onClick={changeLight} type="button" className="btn btn-info m-auto">Change Light</button>
				<button onClick={lightsOnAndOff} type="button" className="btn btn-secondary m-auto">{buttonLabel}</button>
			</div>
		</div>
	);
};

export default Home;
