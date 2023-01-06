import { propData } from '../utils/types';
import { Profile, Star } from './Icons';
import './styles/user-details.css';

const UserDetails = ({ data }: propData) => {
	return (
		<div className='start'>
			<div className='head'>
				<div>
					<h3>User Details</h3>
				</div>
				<div className='btns'>
					<div className='danger'>
						<span>BLACKLIST USER</span>
					</div>
					<div className='success'>
						<h6>ACTIVATE USER</h6>
					</div>
				</div>
			</div>
			<div className='section'>
				<div className='profile-header'>
					<div className='avatar'>
						{/* <Profile styles={{ width: '40px' }} /> */}
						<img src={data.profile.avatar} alt='avatar' />
					</div>
					<div className='name'>
						<h1>Grace Effiom</h1>
						<span>gigitatafa</span>
					</div>
					<div className='tier'>
						<h4>User Tier</h4>
						<div className='rating'>
							<Star fill='#E9B200' />
							<Star />
							<Star />
						</div>
					</div>
					<div className='amount'>
						<h1>&#8358;200,0000</h1>
						<h6>Zenith Bank Plc</h6>
					</div>
				</div>
				<div className='tabs'>
					<div className='active'>General</div>
					<div>Documents</div>
					<div>Bank Details</div>
					<div>Loans</div>
					<div>Savings</div>
					<div>App and System</div>
				</div>
			</div>
			<div className='user-information'>
				<div className='info'>
					<h1 className='title'>Personal Information</h1>
					<div className='body'>
						<div className='details'>
							<h6>FULL NAME</h6>
							<h2>
								{data.profile.firstName} {data.profile.lastName}
							</h2>
						</div>
						<div className='details'>
							<h6>PHONE NUMBER</h6>
							<h2>{data.profile.phoneNumber}</h2>
						</div>
						<div className='details'>
							<h6>email address</h6>
							<h2>{data.email}</h2>
						</div>
						<div className='details'>
							<h6>bvn</h6>
							<h2>{data.profile.bvn}</h2>
						</div>
						<div className='details'>
							<h6>gender</h6>
							<h2>{data.profile.gender}</h2>
						</div>
						<div className='details'>
							<h6>marital status</h6>
							<h2>{data.profile?.maritalStatus}</h2>
						</div>
						<div className='details'>
							<h6>children</h6>
							<h2>{data.profile?.children}</h2>
						</div>
						<div className='details'>
							<h6>Type of residence</h6>
							<h2>{data.profile?.apartment}</h2>
						</div>
					</div>
				</div>
				<div className='info'>
					<h1 className='title'>Education and Experiences</h1>
					<div className='body'>
						<div className='details'>
							<h6>Level of Education</h6>
							<h2>{data.education.level}</h2>
						</div>
						<div className='details'>
							<h6>employment status</h6>
							<h2>{data.education.employmentStatus}</h2>
						</div>
						<div className='details'>
							<h6>sector of employment</h6>
							<h2>{data.education.sector}</h2>
						</div>
						<div className='details'>
							<h6>Duration of employment</h6>
							<h2>{data.education.duration}</h2>
						</div>
						<div className='details'>
							<h6>office email</h6>
							<h2>{data.education.officeEmail}</h2>
						</div>
						<div className='details'>
							<h6>monthly income</h6>
							<h2>
								{data.education.monthlyIncome[1]} -{' '}
								{data.education.monthlyIncome[0]}
							</h2>
						</div>
						<div className='details'>
							<h6>Loan Repayment</h6>
							<h2>{data.education.loanRepayment}</h2>
						</div>
					</div>
				</div>
				<div className='info'>
					<h1 className='title'>Socials</h1>
					<div className='body'>
						<div className='details'>
							<h6>twitter</h6>
							<h2>{data.socials.twitter}</h2>
						</div>
						<div className='details'>
							<h6>facebook</h6>
							<h2>{data.socials.facebook}</h2>
						</div>
						<div className='details'>
							<h6>instagram</h6>
							<h2>{data.socials.instagram}</h2>
						</div>
					</div>
				</div>
				<div className='info'>
					<h1 className='title'>Guarantor</h1>
					<div className='body'>
						<div className='details'>
							<h6>FULL NAME</h6>
							<h2>
								{data.guarantor.firstName} {data.guarantor.lastName}
							</h2>
						</div>
						<div className='details'>
							<h6>phone number</h6>
							<h2>{data.guarantor.phoneNumber}</h2>
						</div>
						<div className='details'>
							<h6>gender</h6>
							<h2>{data.guarantor.gender}</h2>
						</div>
						<div className='details'>
							<h6>address</h6>
							<h2>{data.guarantor.address}</h2>
						</div>
					</div>
				</div>
				<div className='info'>
					<h1 className='title'></h1>
					<div className='body'>
						<div className='details'>
							<h6>FULL NAME</h6>
							<h2>
								{data.guarantor.firstName} {data.guarantor.lastName}
							</h2>
						</div>
						<div className='details'>
							<h6>phone number</h6>
							<h2>{data.guarantor.phoneNumber}</h2>
						</div>
						<div className='details'>
							<h6>gender</h6>
							<h2>{data.guarantor.gender}</h2>
						</div>
						<div className='details'>
							<h6>address</h6>
							<h2>{data.guarantor.address}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
