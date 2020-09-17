import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
	return (
		<div className='loading-container'>
			<Spinner animation='grow' variant='danger' />
			<Spinner animation='grow' variant='danger' />
			<Spinner animation='grow' variant='danger' />
		</div>
	);
}
