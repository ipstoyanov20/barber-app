function Navbar() {
	return (
	  <div>
		<nav style={{ backgroundColor: '#333', overflow: 'hidden' }}>

		  <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
			
			<li style={{ float: 'left' }}>
			<img src="../favicon.ico" alt=""></img>
			<a href="#"></a>
			</li> 

			<li style={{ float: 'left' }}>
			  <a href="#" style={{
				display: 'block',
				color: 'white',
				textAlign: 'center',
				padding: '12px 16px',
				textDecoration: 'none'
			  }}>Home</a>
			</li> 

			<li style={{ float: 'left' }}>
			  <a href="#" style={{
				display: 'block',
				color: 'white',
				textAlign: 'center',
				padding: '12px 16px',
				textDecoration: 'none'
			  }}>Barbers</a>
			</li> 

			<li style={{ float: 'left' }}>
			  <a href="#" style={{
				display: 'block',
				color: 'white',
				textAlign: 'center',
				padding: '12px 16px',
				textDecoration: 'none'
			  }}>Book</a>
			</li> 

			<li style={{ float: 'right' }}>
			  <a href="#" style={{
				display: 'block',
				color: 'white',
				textAlign: 'center',
				padding: '12px 16px',
				textDecoration: 'none'
			  }}>Contact</a>
			</li> 

			<li style={{ float: 'right' }}>
			  <a href="#" style={{
				display: 'block',
				color: 'white',
				textAlign: 'center',
				padding: '12px 16px',
				textDecoration: 'none'
			  }}>Register</a>
			</li> 
			
		  </ul>
		</nav>
	  </div>
	);
  }
  
  export default Navbar;