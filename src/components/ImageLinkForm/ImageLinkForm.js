import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
	
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='center form pa4 br4 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button 
						className='w-20 grow f4 link pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;