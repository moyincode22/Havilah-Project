import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './mynavbar.css'








function Navigationbar() {
  return (
    

  
    <Navbar className='nav'>
      <Container>
        <Navbar.Brand href="#home">
          
           <img className='image' src="src/images/joystick.jpg" alt="" /> <p className='hub'> HAVILAH </p>
           
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="collapse">
          <Nav className="products">
            <Nav.Link href='/' className='Home'>SKIN CARE</Nav.Link>
            <Nav.Link href="/Blogs" className='Blogs'>BODY AND BATHS</Nav.Link>
            <Nav.Link href="/Communities" className='Communities'>DEODORANTS</Nav.Link>
            <Nav.Link href="/Communities" className='Communities'>MAKEUP</Nav.Link>
            <Nav.Link href="/Compose" className='Compose'>HAIR CARE</Nav.Link>
           
            {/* <NavDropdown  title="Profile" className='profile'> 
              <NavDropdown.Item className='settings' >Account Settings</NavDropdown.Item>
              <NavDropdown.Item className='profile'>
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item>
                My Communities
              </NavDropdown.Item>
              <NavDropdown.Item>
                My Reviews
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
  
      {/* <button href="/SIgnup"  className='sign'  >Sign Up</button> */}

      <div className='search-bar'>
          {/* Your search bar component goes here */}
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        

        

      
          
           

    </Navbar>
    
  );
}

export default Navigationbar;