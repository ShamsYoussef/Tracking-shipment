import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProgressSteper from '../ProgressSteper/ProgressSteper';
const OrderReceipt = () => {
	const trackedOrder = useSelector(state => state.TrackOrder.trackedOrder);
	return (
		<div className='receipt-container '>
			<Container className='upper-section'>
				<Row className='mt-3' style={{ direction: 'rtl' }}>
					<Col>
						<p>
							رقم الشحنة <span> {trackedOrder.trackingNumber}</span>
						</p>
						<p className='label'>تم تسليم الشحنة </p>
					</Col>
					<Col>
						<p>أخر تحديث</p>
						<p className='label'>
							{trackedOrder.lastUpdated.day} | {trackedOrder.lastUpdated.date} |{' '}
							{trackedOrder.lastUpdated.time}
						</p>
					</Col>
					<Col>
						<p>اسم التاجر</p>
						<p className='label'>SOUQ.com</p>
					</Col>
					<Col>
						<p>موعد التسليم خلال</p>
						<p className='label'>
							{trackedOrder.promisedDate.day} {trackedOrder.promisedDate.month}{' '}
							{trackedOrder.promisedDate.year}
						</p>
					</Col>
				</Row>
			</Container>
			<Container className='lower-section progressBar'>
				<ProgressSteper></ProgressSteper>
			</Container>
		</div>
	);
};

export default OrderReceipt;
