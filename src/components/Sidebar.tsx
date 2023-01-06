import {
	Audit,
	Badge,
	Chart,
	Coins,
	Config,
	Decision,
	Dropdown,
	DropdownLg,
	Guarantors,
	Home,
	Karma,
	LoanRequest,
	Loans,
	Logout,
	Organization,
	Product,
	Savings,
	Scroll,
	Services,
	Sliders,
	System,
	Transactions,
	UsersIcon,
	Whitelist,
} from './Icons';
import './styles/sidebar.css';

const Sidebar = () => {
	return (
		<>
			<div className='sidebar'>
				<div className='link-list'>
					<div className='switch'>
						<div>
							<Organization />
						</div>
						<h6>Switch Organization</h6>
						<div>
							<DropdownLg />
						</div>
					</div>
					<div className='dashboard-link opacity'>
						<div>
							<Home />
						</div>
						<h6>Dashboard</h6>
					</div>
					<div className='container-link'>
						<p className='title'>CUSTOMERS</p>
						<div className='content active'>
							<div>
								<UsersIcon />
							</div>
							<h6>Users</h6>
						</div>
						<div className='content'>
							<div>
								<Guarantors />
							</div>
							<h6>Guarantors</h6>
						</div>
						<div className='content'>
							<div>
								<Loans />
							</div>
							<h6>Loans</h6>
						</div>
						<div className='content'>
							<div>
								<Decision />
							</div>
							<h6>Decision Models</h6>
						</div>
						<div className='content'>
							<div>
								<Savings />
							</div>
							<h6>Savings</h6>
						</div>
						<div className='content'>
							<div>
								<LoanRequest />
							</div>
							<h6>Loan Request</h6>
						</div>
						<div className='content'>
							<div>
								<Whitelist />
							</div>
							<h6>Whitelist</h6>
						</div>
						<div className='content'>
							<div>
								<Karma />
							</div>
							<h6>Karma</h6>
						</div>
					</div>
					<div className='container-link'>
						<p className='title'>BUSINESSES</p>
						<div className='content'>
							<div>
								<Organization />
							</div>
							<h6>Organization</h6>
						</div>
						<div className='content'>
							<div>
								<LoanRequest />
							</div>
							<h6>Loan Products</h6>
						</div>
						<div className='content'>
							<div>
								<Product />
							</div>
							<h6>Saving Product</h6>
						</div>
						<div className='content'>
							<div>
								<Coins />
							</div>
							<h6>Fees an Charges</h6>
						</div>
						<div className='content'>
							<div>
								<Transactions />
							</div>
							<h6>Transactions</h6>
						</div>
						<div className='content'>
							<div>
								<Services />
							</div>
							<h6>Services</h6>
						</div>
						<div className='content'>
							<div>
								<Config />
							</div>
							<h6>Service Account</h6>
						</div>
						<div className='content'>
							<div>
								<Scroll />
							</div>
							<h6>Settlements</h6>
						</div>
						<div className='content'>
							<div>
								<Chart />
							</div>
							<h6>Reports</h6>
						</div>
					</div>
					<div className='container-link'>
						<p className='title'>SETTINGS</p>
						<div className='content'>
							<div>
								<Sliders />
							</div>
							<h6>Preferences</h6>
						</div>
						<div className='content'>
							<div>
								<Badge />
							</div>
							<h6>Fee and Pricing</h6>
						</div>
						<div className='content'>
							<div>
								<Audit />
							</div>
							<h6>Audit and Logs</h6>
						</div>
						<div className='content'>
							<div>
								<System />
							</div>
							<h6>System Messages</h6>
						</div>
					</div>
				</div>
				<div className='logout'>
					<div>
						<Logout />
					</div>
					<h6>Logout</h6>
				</div>
				<h6 className='version'>v1.2.0</h6>
			</div>
		</>
	);
};

export default Sidebar;
