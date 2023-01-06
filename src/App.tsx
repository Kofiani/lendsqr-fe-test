import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './css/index.css';
import { useEffect, useState } from 'react';

// calculate the total number of user?
// number of active users
// number of users with savings
// number of users with loans

function App() {
	const [showMaintenace, setShowMaintenance] = useState<boolean>(false);
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	const [showPage, setShowPage] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
	const handleIsLoggedIn = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
			if (window.innerWidth < 1000 && !(window.innerWidth >= 1260)) {
				setShowMaintenance(true);
				setShowPage(false);
			} else {
				setShowPage(true);
				setShowMaintenance(false);
			}
		};
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);
	return (
		<>
			{showMaintenace && (
				<div
					style={{
						backgroundColor: 'white',
						width: '100vw',
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignContent: 'center',
						textAlign: 'center',
					}}
				>
					<p>
						This site is not yet optimized for your current screen size which is{' '}
						{windowWidth}px, <br />
						try viewing this page with a wider screen {'>'} 1000px. <br />
						We're conciously working to bring you the best experience.
					</p>
				</div>
			)}
			{showPage && (
				<div>
					{isLoggedIn && (
						<div>
							<Login handleIsLoggedIn={handleIsLoggedIn} />
						</div>
					)}
					{!isLoggedIn && <Dashboard />}
				</div>
			)}
		</>
	);
}

export default App;
