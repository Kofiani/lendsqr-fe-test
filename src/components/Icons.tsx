import activateUser from '../assets/icons/activate-user.svg';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import eclipseFile from '../assets/icons/eclipse-file.svg';
import savings from '../assets/icons/savings.svg';
import eclipseUserGroup from '../assets/icons/eclipse-user-group.svg';
import scroll from '../assets/icons/scroll.svg';
import eclipseUsers from '../assets/icons/eclipse-users.svg';
import search from '../assets/icons/search.svg';
import auditLogs from '../assets/icons/audit-logs.svg';
import filter from '../assets/icons/filter.svg';
import services from '../assets/icons/services.svg';
import avatar from '../assets/icons/avatar.svg';
import guarantors from '../assets/icons/guarantors.svg';
import sliders from '../assets/icons/sliders.svg';
import backArrow from '../assets/icons/back-arrow.svg';
import home from '../assets/icons/home.svg';
import star from '../assets/icons/star-hollow.svg';
import percentageBadge from '../assets/icons/badge-percentage.svg';
import karma from '../assets/icons/karma.svg';
import star2 from '../assets/icons/star.svg';
import calendar from '../assets/icons/calendar.svg';
import loanRequest from '../assets/icons/loanrequest.svg';
import system from '../assets/icons/system-message.svg';
import chart from '../assets/icons/chart-bar.svg';
import loans from '../assets/icons/loans.svg';
import transactions from '../assets/icons/transactions.svg';
import coins from '../assets/icons/coins.svg';
import logOut from '../assets/icons/log-out.svg';
import config from '../assets/icons/user-config.svg';
import deactivate from '../assets/icons/deactivate-user.svg';
import dropdown from '../assets/icons/nav-dropdown.svg';
import users from '../assets/icons/users.svg';
import decision from '../assets/icons/decision.svg';
import bell from '../assets/icons/notification.svg';
import visible from '../assets/icons/visible.svg';
import menu from '../assets/icons/dot-menu.svg';
import organisation from '../assets/icons/organisation.svg';
import whitelist from '../assets/icons/whitelist.svg';
import dropdownLg from '../assets/icons/dropdown-lg.svg';
import profile from '../assets/icons/profile.svg';
import eclipseCoins from '../assets/icons/eclipse-coins.svg';
import product from '../assets/icons/savingsproduct.svg';

type stylesProp = {
	fill?: string;
	styles?: {
		width?: string;
	};
};
export const Profile = ({ styles }: stylesProp) => {
	return <img src={profile} style={styles} alt='profile-icon' />;
};
export const Star = ({ fill }: stylesProp) => {
	return (
		<svg
			width='16'
			height='14'
			viewBox='0 0 16 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M7.98572 0.287513C7.85197 0.293138 7.73572 0.381263 7.69447 0.508761L6.18759 5.17996L1.28071 5.16996C1.14196 5.16996 1.01821 5.25934 0.975716 5.39121C0.932591 5.52371 0.980091 5.66809 1.09259 5.74996L5.06891 8.62676L3.54203 13.293C3.49891 13.4249 3.54578 13.5699 3.65828 13.6511C3.77016 13.733 3.92265 13.733 4.03454 13.6511L7.9995 10.758L11.9657 13.6511C12.0776 13.733 12.2301 13.733 12.342 13.6511C12.4545 13.5699 12.5014 13.4249 12.4582 13.293L10.9314 8.62676L14.9077 5.74996C15.0202 5.66809 15.0677 5.52371 15.0246 5.39121C14.9814 5.25933 14.8583 5.16996 14.7196 5.17059L9.81269 5.18059L8.30393 0.509385V0.50876C8.25956 0.371885 8.12957 0.28188 7.98581 0.287512L7.98572 0.287513Z'
				stroke='#E9B200'
				fill={fill}
			/>
		</svg>
	);
};

export const BackArrow = ({ styles }: stylesProp) => {
	return <img src={backArrow} style={styles} alt='backArrow-icon' />;
};

export const Logout = ({ styles }: stylesProp) => {
	return <img src={logOut} style={styles} alt='logOut-icon' />;
};

export const System = ({ styles }: stylesProp) => {
	return <img src={system} style={styles} alt='system-icon' />;
};

export const Audit = ({ styles }: stylesProp) => {
	return <img src={auditLogs} style={styles} alt='auditLogs-icon' />;
};

export const Badge = ({ styles }: stylesProp) => {
	return (
		<img src={percentageBadge} style={styles} alt='percentageBadge-icon' />
	);
};

export const Sliders = ({ styles }: stylesProp) => {
	return <img src={sliders} style={styles} alt='sliders-icon' />;
};

export const Chart = ({ styles }: stylesProp) => {
	return <img src={chart} style={styles} alt='chart-icon' />;
};

export const Scroll = ({ styles }: stylesProp) => {
	return <img src={scroll} style={styles} alt='scroll-icon' />;
};

export const Config = ({ styles }: stylesProp) => {
	return <img src={config} style={styles} alt='config-icon' />;
};

export const Services = ({ styles }: stylesProp) => {
	return <img src={services} style={styles} alt='services-icon' />;
};

export const Transactions = ({ styles }: stylesProp) => {
	return <img src={transactions} style={styles} alt='transactions-icon' />;
};

export const Coins = ({ styles }: stylesProp) => {
	return <img src={coins} style={styles} alt='coins-icon' />;
};

export const Product = ({ styles }: stylesProp) => {
	return <img src={product} style={styles} alt='product-icon' />;
};

export const Loans = ({ styles }: stylesProp) => {
	return <img src={loans} style={styles} alt='loans-icon' />;
};

export const Savings = ({ styles }: stylesProp) => {
	return <img src={savings} style={styles} alt='savings-icon' />;
};

export const Karma = ({ styles }: stylesProp) => {
	return <img src={karma} style={styles} alt='karma-icon' />;
};

export const Whitelist = ({ styles }: stylesProp) => {
	return <img src={whitelist} style={styles} alt='whitelist-icon' />;
};

export const LoanRequest = ({ styles }: stylesProp) => {
	return <img src={loanRequest} style={styles} alt='loanRequest-icon' />;
};

export const Guarantors = ({ styles }: stylesProp) => {
	return <img src={guarantors} style={styles} alt='guarantors-icon' />;
};

export const Decision = ({ styles }: stylesProp) => {
	return <img src={decision} style={styles} alt='decision-icon' />;
};

export const UsersIcon = ({ styles }: stylesProp) => {
	return <img src={users} style={styles} alt='users-icon' />;
};

export const Home = ({ styles }: stylesProp) => {
	return <img src={home} style={styles} alt='home-icon' />;
};
export const DropdownLg = ({ styles }: stylesProp) => {
	return <img src={dropdownLg} style={styles} alt='dropdown-icon' />;
};
export const Dropdown = ({ styles }: stylesProp) => {
	return <img src={dropdown} style={styles} alt='dropdown-icon' />;
};
export const Organization = ({ styles }: stylesProp) => {
	return <img src={organisation} style={styles} alt='organization-icon' />;
};
export const EclipseUserGroup = ({ styles }: stylesProp) => {
	return <img src={eclipseUserGroup} style={styles} alt='dropdown-icon' />;
};
export const EclipseUser = ({ styles }: stylesProp) => {
	return <img src={eclipseUsers} style={styles} alt='dropdown-icon' />;
};
export const EclipseCoins = ({ styles }: stylesProp) => {
	return <img src={eclipseCoins} style={styles} alt='dropdown-icon' />;
};
export const EclipseFile = ({ styles }: stylesProp) => {
	return <img src={eclipseFile} style={styles} alt='dropdown-icon' />;
};

export const MenuDot = () => {
	return <img src={menu} alt='dropdown-icon' />;
};

export const ActivateUser = () => {
	return <img src={activateUser} alt='dropdown-icon' />;
};

export const Filter = () => {
	return <img src={filter} alt='filter-icon' />;
};

export const LArrow = () => {
	return <img src={arrowLeft} alt='dropdown-icon' />;
};

export const RArrow = () => {
	return <img src={arrowRight} alt='dropdown-icon' />;
};
