import React, { useState } from "react";
import Styles from "./styles.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	// Setting initial values
	const [selectedColor, setSelectedColor] = useState('');
	const [buttonOnOffLights, setButtonOnOffLights] = useState('Lights ON');
	const [hideNewLight, setHideNewLight] = useState(' d-none');
	const [labelButtonNewLight, setLabelButtonNewLight] = useState('Add a Light')

	// Here I set how to change the lights
	const changeLight = () => {
		// To change it, has to be already on	
		((selectedColor) === 'red') ? setSelectedColor('yellow') : '';
		((selectedColor) === 'yellow') ? setSelectedColor('green') : '';
		// If it's showing the new one, it will change to it also, but if it's not, it will continue changing between the starters ones 
		((selectedColor) === 'green') ? ((hideNewLight) === '' ? setSelectedColor('info') : setSelectedColor('red')) : '';
		((selectedColor) === 'info') ? setSelectedColor('red') : '';
		


	};

	// We can start it by clicking by ourself in any color, or choose starting it by the LightsON button
	const lightsOnAndOff = () => {
		// The button always starts on the red light
		((selectedColor) === '') ? setSelectedColor('red') : '';
		// We can stop lights at any color
		((selectedColor) === 'red') ? setSelectedColor('') : '';
		((selectedColor) === 'yellow') ? setSelectedColor('') : '';
		((selectedColor) === 'green') ? setSelectedColor('') : '';
		((selectedColor) === 'info') ? setSelectedColor('') : '';
		// Changing the label on the button on & off
		((buttonOnOffLights) === 'Lights ON') ? setButtonOnOffLights('Lights OFF') : '';
		((buttonOnOffLights) === 'Lights OFF') ? setButtonOnOffLights('Lights ON') : '';
		// I wish I could change the label from the ON & OFF button when I start by myslef the Traffic Lights
		// I tryed this	
		
		// ((selectedColor) === 'red') ? ((buttonOnOffLights) === 'Lights ON' ? setButtonOnOffLights('Lights OFF') : '') : '' ;
		// ((selectedColor) === 'red') ? ((buttonOnOffLights) === 'Lights OFF' ? setButtonOnOffLights('Lights ON') : '') : '' ;
		// ((selectedColor) === 'yellow') ? ((buttonOnOffLights) === 'Lights ON' ? setButtonOnOffLights('Lights OFF') : '') : '' ;
		// ((selectedColor) === 'yellow') ? ((buttonOnOffLights) === 'Lights OFF' ? setButtonOnOffLights('Lights ON') : '') : '' ;
		// ((selectedColor) === 'green') ? ((buttonOnOffLights) === 'Lights ON' ? setButtonOnOffLights('Lights OFF') : '') : '' ;
		// ((selectedColor) === 'green') ? ((buttonOnOffLights) === 'Lights OFF' ? setButtonOnOffLights('Lights ON') : '') : '' ;
		
		// It was not what I expected hahahahahaha XD
	};

	const newLight = () => {

		((hideNewLight) === ' d-none') ? setHideNewLight('') : '';
		((hideNewLight) === '') ? setHideNewLight(' d-none') : '';
		// Changing the label on the button to show-On or show-Off the new light
		((labelButtonNewLight) === 'Add a Light') ? setLabelButtonNewLight('Hide the New Light') : '';
		((labelButtonNewLight) === 'Hide the New Light') ? setLabelButtonNewLight('Add a Light') : '';


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
						<div className={`col-12 bg-black text-black d-flex justify-content-center pb-3 position-relative ${hideNewLight}`}>
							<div className="col-6 bg-info rounded-circle">
								<figure className="figure">
									<img src="..." className="figure-img img-fluid rounded" alt="" />
								</figure>
							</div>
							<div onClick={() => { setSelectedColor('info') }} className={`spinner-grow text-info position-absolute w-75 h-75 opacity-${(selectedColor === 'info') ? '100' : '0'}`} role="status">
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
				<button onClick={lightsOnAndOff} type="button" className="btn btn-secondary m-auto">{buttonOnOffLights}</button>
				<button onClick={changeLight} type="button" className="btn btn-outline-success m-auto">Change Light</button>
				<button onClick={newLight} type="button" className="btn btn-info m-auto">{labelButtonNewLight}</button>
			</div>
		</div>
	);
};

export default Home;
