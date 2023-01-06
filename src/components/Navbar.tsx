import navbar from '../assets/icons/nav-dropdown.svg';
import bell from '../assets/icons/notification.svg';
import avatar from '../assets/icons/avatar.svg';
import search from '../assets/icons/search.svg';
import logo from '/logo.svg';
import './styles/navbar.css';

interface icons {
	navbar: string;
	bell: string;
	avatar: string;
	search: string;
	logo: string;
}
function Navbar() {
	return (
		<>
			<div className='nav'>
				<div className='logo'>
					<img src={logo} alt='lendsqr-logo' />
				</div>
				<div className='search-bar'>
					<input
						type='text'
						className='search-box'
						placeholder='Search for anything'
					/>
					<button>
						<img src={search} alt='search-icon' />
					</button>
				</div>
				<div className='left'>
					<p style={{ textDecoration: 'underline' }}>Doc</p>
					<div className='profile'>
						<img src={bell} alt='bell-icon' />
						<img src={avatar} style={{ width: '35px' }} alt='user-avatar' />
						<p>Ayodeji</p>
						<img src={navbar} alt='dropdown-arrow' />
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
