import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Home = () => {
	return (
		<div className='home'>
			<Row className='homeImage'>
				<Col className='labelCol' lg={4}>
					<h3 className='homeLabel'>مع بوسطة، اشحن مكان ما تحب</h3>
					<p className='homeLabel'>
						وصّل منتجاتك أسرع وأوفر مع بوسطة لأي مكان في مصر بأقل سعر ومجهود
						وتابع تحركات الشحن والمندوب أول بأول من غير تأخير ولا تعب في
						الفواتير
					</p>
					<div>
						<button className='rightButton'>ابدأ مع بوسطـة</button>
						<button className='leftButton'>كلم المبيعات</button>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
// background-blend-mode: overlay;
