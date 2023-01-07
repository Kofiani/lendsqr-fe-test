import './styles/user-list.css';
import { useEffect, useState } from 'react';
import { dataProps } from '../utils/types';
import updateState from '../utils/updateState';
import getSingleUserDetails from '../utils/getSingleUserDetails';
import UserDetails from './UserDetails';
import {
	ActivateUser,
	BackArrow,
	Deactivate,
	EclipseCoins,
	EclipseFile,
	EclipseUser,
	EclipseUserGroup,
	Filter,
	MenuDot,
	Visible,
} from './Icons';

const UserList = () => {
	const [data, setData] = useState<dataProps[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean | null>(null);
	const [showSingleUser, setShowSingleUser] = useState<boolean>(false);
	const [singleUserDetails, setSingleUserDetails] = useState<dataProps | null>(
		null,
	);
	const [filter, setFilter] = useState<boolean>(false);
	const [showPopUp, setShowPopUp] = useState<boolean>(false);
	const [getId, setGetId] = useState<string>('');
	const url =
		'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ';

	const handleShowPopUp = (id: string) => {
		console.log(id);
		if (data?.find((item) => item.id === id)) {
			setShowPopUp(!showPopUp);
			setGetId(id);
		}
	};

	const handleShowSingleUser = (item: dataProps) => {
		setShowSingleUser(true);
		localStorage.setItem('user', JSON.stringify(item));
		getSingleUserDetails(setSingleUserDetails, setData, setError, setLoading);
	};

	const returnToDashboard = () => {
		localStorage.removeItem('user');
		setShowSingleUser(false);
		setLoading(true);
		updateState(url, setLoading, setData, setError);
	};
	const dateFormater = (date: string) => {
		let options: any = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		};
		let newDate = new Date(date);
		let formateDate = new Intl.DateTimeFormat('default', options).format(
			newDate,
		);
		return formateDate.replace('at', '');
	};

	useEffect(() => {
		if (localStorage.getItem('user') !== null) {
			setShowSingleUser(true);
			getSingleUserDetails(setSingleUserDetails, setData, setError, setLoading);
		} else if (!showSingleUser) {
			updateState(url, setLoading, setData, setError);
		}
	}, []);
	return (
		<div className='user-list'>
			<div className='content'>
				{/* head section starts here */}
				{loading && (
					<div className='spinner'>
						<div></div>
						<div className='container'>
							<div className='lds-ring'>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
						<div></div>
					</div>
				)}
				{data && (
					<div className='head-section'>
						<div className='title'>Users</div>
						<div className='analytics'>
							<div className='item'>
								<div>
									<EclipseUser styles={{ width: '40px' }} />
								</div>
								<h6>Users</h6>
								<div className='details'>2,345</div>
							</div>
							<div className='item'>
								<EclipseUserGroup styles={{ width: '40px' }} />
								Active User<div className='details'>2,345</div>
							</div>
							<div className='item'>
								<EclipseFile styles={{ width: '40px' }} />
								Users with Loans <div className='details'>2,345</div>
							</div>
							<div className='item'>
								<EclipseCoins styles={{ width: '40px' }} />
								User with savings<div className='details'>2,345</div>
							</div>
						</div>
					</div>
				)}
				{showSingleUser && (
					<div className='back'>
						<p onClick={() => returnToDashboard()}>
							<BackArrow />
							<span>Back to Users</span>
						</p>
						<UserDetails data={singleUserDetails} />
					</div>
				)}
				{error && <div className='error'>{error}</div>}
				{/* body section starts */}
				<div className='body-section'>
					<div className='table'>
						{data && (
							<div className='thead'>
								<div
									className='icon'
									onClick={() => {
										setFilter(!filter);
									}}
								>
									<span>organisation </span>
									<Filter />
								</div>
								<div
									className='icon'
									onClick={() => {
										setFilter(!filter);
									}}
								>
									<span>username </span>
									<Filter />
								</div>
								<div
									className='icon'
									onClick={() => {
										setFilter(!filter);
									}}
								>
									<span>email </span>
									<Filter />
								</div>
								<div
									className='icon'
									onClick={() => {
										setFilter(!filter);
									}}
								>
									<span>phone number </span>
									<Filter />
								</div>
								<div
									className='icon'
									onClick={() => {
										setFilter(!filter);
									}}
								>
									<span>date joined </span>
									<Filter />
								</div>
								<div
									className='icon'
									onClick={() => {
										setFilter(!filter);
									}}
								>
									<span>status </span>
									<Filter />
								</div>
							</div>
						)}
						<div className='tbody'>
							{filter && (
								<div className='filter-container'>
									<div className='filter'>
										<form>
											<div className='field'>
												<label> Organisation</label>
												<select className='select'>
													<option>Select</option>
												</select>
											</div>
											<div className='field'>
												<label>Username</label>
												<input type='text' placeholder='Username' />
											</div>
											<div className='field'>
												<label>Email</label>
												<input type='text' placeholder='Email' />
											</div>
											<div className='field'>
												<label>Date</label>
												<input type='date' />
											</div>
											<div className='field'>
												<label>Phone Number</label>
												<input type='text' />
											</div>

											<div className='field'>
												<label>Status</label>
												<select className='select'>
													<option>Select</option>
												</select>
											</div>
											<div className='btns'>
												<button className='reset'>Reset</button>
												<button className='apply'>Filter</button>
											</div>
										</form>
									</div>
								</div>
							)}
							{data &&
								data.map((item: dataProps) => (
									<div className='top-row' key={item.id}>
										<div className='row'>
											<div onClick={() => handleShowSingleUser(item)}>
												{item.orgName}
											</div>
											<div onClick={() => handleShowSingleUser(item)}>
												{item.userName}
											</div>
											<div onClick={() => handleShowSingleUser(item)}>
												{item.email}
											</div>
											<div onClick={() => handleShowSingleUser(item)}>
												{item.phoneNumber}
											</div>
											<div onClick={() => handleShowSingleUser(item)}>
												{dateFormater(item.createdAt)}
											</div>
											<div
												className='status'
												onClick={() => handleShowPopUp(item.id)}
											>
												<p className='info'>Inactive</p>
												<MenuDot styles={{ width: '4px' }} />

												{showPopUp && (
													<div className='pop-up'>
														{getId === item.id ? (
															<div className='popUp'>
																<div className='options'>
																	<div>
																		<Visible />
																		<p> View Details</p>
																	</div>
																	<div>
																		<Deactivate />
																		<p>Blacklist User</p>
																	</div>
																	<div>
																		<ActivateUser />
																		<p>Activate User</p>
																	</div>
																</div>
															</div>
														) : (
															<></>
														)}
													</div>
												)}
											</div>
										</div>
										{/* <button className='icon' onClick={() => console.log(item)}>
											<MenuDot styles={{ width: '4px' }} />
										</button> */}
									</div>
								))}
						</div>
					</div>
				</div>
				{/* tail section starts here */}
				<div className='tail-section'></div>
			</div>
		</div>
	);
};

export default UserList;
