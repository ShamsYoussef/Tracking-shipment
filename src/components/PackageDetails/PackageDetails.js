import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PackageTable from './packageTable';
import PackageAddress from './PackageAddress';

const PackageDetails = () => {
	return (
		<Container className='mt-4' style={{ direction: 'rtl' }}>
			<Row>
				<Col>
					<PackageTable></PackageTable>
				</Col>
				<Col>
					<PackageAddress></PackageAddress>
				</Col>
			</Row>
		</Container>
	);
};

export default PackageDetails;
