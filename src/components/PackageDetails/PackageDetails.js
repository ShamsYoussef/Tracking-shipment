import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PackageTable from './packageTable';
import PackageAddress from './PackageAddress';

const PackageDetails = () => {
	return (
		<Container className='mt-4 mb-5' style={{ direction: 'rtl' }}>
			<Row>
				<Col md={8}>
					<PackageTable></PackageTable>
				</Col>
				<Col md={4}>
					<PackageAddress></PackageAddress>
				</Col>
			</Row>
		</Container>
	);
};

export default PackageDetails;
