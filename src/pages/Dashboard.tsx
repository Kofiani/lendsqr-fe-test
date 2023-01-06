import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';
import './styles/dashboard.css';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Navbar />
			<div className='dash-board'>
				<Sidebar />
				<UserList />
			</div>
		</div>
	);
};
export default Dashboard;
