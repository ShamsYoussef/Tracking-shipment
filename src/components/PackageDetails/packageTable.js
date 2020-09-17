import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import translateHub from '../../Helpers/translateHub';
const PackageTable = () => {
	const trackedOrder = useSelector(state => state.TrackOrder.trackedOrder);
	return (
		<div>
			<p className='headerLabel'>تفاصيل الشحنة</p>
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
							<td>
								{!row.hub || row.hub === '' ? '-' : translateHub(row.hub)}
							</td>
							<td>{row.date}</td>
							<td style={{ direction: 'ltr' }}>{row.time}</td>
							<td>
								<div>{row.state.ar}</div>
								<div
									style={{
										color: row.state.color,
										fontSize: '0.8rem',
									}}>
									{row.state.reason}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PackageTable;
