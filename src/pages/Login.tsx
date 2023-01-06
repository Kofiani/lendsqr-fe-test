import './styles/login.css';

type loggedInProps = {
	handleIsLoggedIn: () => void;
};

const Login = ({ handleIsLoggedIn }: loggedInProps) => {
	return (
		<div className='layout'>
			<div className='images'>
				<img src='../../public/logo.svg' width='139' height='40' alt='image' />
				<img src='../../public/pablo.svg' alt='image' />
			</div>
			<div className='login-form'>
				<div className='title'>
					<h1>Welcome!</h1>
					<p>Enter details to login</p>
				</div>
				<form>
					<input type='email' placeholder='Email' value='demo' />
					<div>
						<input type='password' placeholder='Email' value='password' />
						<p>SHOW</p>
					</div>
					<h5>FORGOT PASSWORD?</h5>
					<button onClick={handleIsLoggedIn}>LOG IN</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
