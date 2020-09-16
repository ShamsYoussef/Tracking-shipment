import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Search from '../search/search';

import logo from '../../assets/logoArbic.svg';

const Header = () => {
	return (
		<Navbar expand='lg' sticky='top' className='navbar-container'>
			<Navbar.Brand className='logo' href=''>
				<img
					src={logo}
					width='140'
					className='d-inline-block align-top'
					alt='Logo'
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' className='p-0' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>الرئيسية</Nav.Link>
					<Nav.Link href='#home'>الأسعار</Nav.Link>
					<Nav.Link href='#home'>كلم المبيعات</Nav.Link>
				</Nav>
				<Nav className='mr-auto'>
					<NavDropdown title='تتبع شحنتك' id='basic-nav-dropdown'>
						<Search></Search>
					</NavDropdown>
					<Nav.Link href='#home'>تسجيل الدخول</Nav.Link>
					<Nav.Link href='#home' className='translate'>
						ENG
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
