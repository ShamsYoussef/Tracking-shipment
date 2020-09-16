import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const PackageTable = () => {
	const trackedOrder = useSelector(state => state.TrackOrder.trackedOrder);
	return (
		<div>
			<p>تفاصيل الشحنة</p>
			<Table responsive>
				<thead>
					<tr>
						<th>الفرع</th>
						<th>التاريخ</th>
						<th>الوقت</th>
						<th>تفاصيل</th>
					</tr>
				</thead>
				<tbody>
					{trackedOrder.transitEvents.map(row => (
						<tr>
							<td>المعادي</td>
							<td>{row.date}</td>
							<td style={{ direction: 'ltr' }}>{row.time}</td>
							<td>{row.state.ar}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PackageTable;
