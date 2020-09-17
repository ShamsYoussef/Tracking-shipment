import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';

const ProgressSteper = () => {
	const trackedOrder = useSelector(state => state.TrackOrder.trackedOrder);
	// transitEvents

	const [progress, setProgress] = useState(0);
	const [color, setColor] = useState('');


	useEffect(() => {
		trackedOrder.transitEvents.map(row => {
			setProgress(row.state.progress);
			setColor(row.state.color);
		});
	});
	return (
		<ProgressBar
			className='progressBar'
			percent={progress}
			filledBackground={color}
			width='90%'>
			{/* Delivered step */}
			<Step transition='scale'>
				{({ accomplished }) =>
					accomplished ? (
						<i
							style={{ backgroundColor: `${color}` }}
							className='fa fa-check rounded-circle'
						/>
					) : (
						<i className='fa fa-floppy-o rounded-circle' />
					)
				}
			</Step>
			<Step transition='scale'>
				{({ accomplished }) =>
					accomplished ? (
						<i
							style={{ backgroundColor: `${color}` }}
							className='fa fa-check rounded-circle'
						/>
					) : (
						<i className='fa fa-check rounded-circle' />
					)
				}
			</Step>
			<Step transition='scale'>
				{({ accomplished }) =>
					accomplished ? (
						<i
							style={{ backgroundColor: `${color}` }}
							className='fa fa-check rounded-circle'
						/>
					) : (
						<i className='fa fa-truck rounded-circle' />
					)
				}
			</Step>
			<Step transition='scale'>
				{({ accomplished }) =>
					accomplished ? (
						<i
							style={{ backgroundColor: `${color}` }}
							className='fa fa-check rounded-circle'
						/>
					) : (
						<i className='fa fa-inbox rounded-circle' aria-hidden='true'></i>
					)
				}
			</Step>
		</ProgressBar>
	);
};

export default ProgressSteper;
