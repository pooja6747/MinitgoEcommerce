import React, { useState } from 'react';
import { Form,  Row, Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Logo from '../../components/images/minitgo.png'
import { IoMdSend } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Plainheader from './components/Plain-header';
import Axios from 'axios';
function Client_register(){
 
  const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [townDistrict, setTownDistrict] = useState('');
    const [state, setState] = useState('');
    const [gst, setGst] = useState('');
    const [panid, setPanid] = useState('');
    const [bankaccount, setBankaccount] = useState('');
    const [seller, setSeller] = useState('');
    const [shop, setShop] = useState('');
    const [upi, setUpi] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [agreement, setAgrement] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [accountName, setAccountName]= useState('');
//this state is for agreement status to update
    const [agreementstatus, setAgreementstatus] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [locationsnackbarOpen, setLocationSnackbarOpen] = useState(false);
    const [locationsnackbarmessage, setLocationSnackbarmessage] = useState(false);
// dis agree buttion 
   
    //snack bar function
    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };
 
    // Function for pand card char ristrictions
    function isValidPan() {
        if (panid.length > 10 )
        return alert("Enter valid pan card details")
    }
    const handleUseCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            
            // Google Maps URL
            const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
            
           //to fetch all details api link (https://ipapi.co/json) use this for future reference
            //consoling the url link
            console.log(googleMapsUrl);
            // Open the URL in a new tab or window
            //window.open(googleMapsUrl, '_blank');
             setCoordinates(googleMapsUrl);
          
             setLocationSnackbarmessage("location has been updated");
             setLocationSnackbarOpen(true);
          },
          (error) => {
            console.log('Geolocation error:', error);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };
    
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
//regesteration form submit function goes here.
// Agreement function goes here.
function handleagreement(){
  const msgi= "I";
  const names = { firstName, lastName };
  const msg = "have Agreed All the terms and conditions with Minitgo";
  let fullmsg = `${msgi} ${names.firstName} ${names.lastName} ${msg}`;
  setAgrement(fullmsg)
  console.log(fullmsg)
  setAgreementstatus(true);
  console.log(agreement)
  handleClose();
}
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
       e.preventDefault();
       Axios.post("http://localhost/api/insert.php", {
        first_name: firstName,
        last_name : lastName,
        email:email,
        password: password,
        phone:phone,
        address: townDistrict,
        pincode: pincode,
        city:city,
        state:state,
        gst:gst,
        panid:panid,
        account: bankaccount,
        seller_name:seller,
        shop_name:shop,
        coordinates:coordinates,
        account_name:accountName,
        ifsc:ifsc,
        upi:upi,
        agreement:agreement,
        profilepic:profilepic

       }).then((response)=> {
        
          console.log(response);
          setSnackbarMessage('Registration successful!');
    setSnackbarOpen(true);
   // Clear the form fields
   setFirstName('');
   setLastName('');
   setEmail('');
   setPassword('');
   setPhone('');
   setTownDistrict('');
   setPincode('');
   setCity('');
   setState('');
   setGst('');
   setPanid('');
   setBankaccount('');
   setSeller('');
   setShop('');
   // Set the formSubmitted state to true
   setFormSubmitted(true);
       }).catch((error) =>{
        console.log(error);
       })
      console.log('Form submitted!');
    };
  
  

  
    return (
      <>
      {/* Location snack bar */}
      <Snackbar
  open={locationsnackbarOpen }
  autoHideDuration={1400}
  onClose={() => {
    setLocationSnackbarOpen(false);
    // Redirect to the login page only if the form has been submitted successfully
    
  }}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <MuiAlert
    elevation={6}
    variant="filled"
    onClose={() => setLocationSnackbarOpen(false)}
    severity="success"
  >
    {locationsnackbarmessage}
  </MuiAlert>
</Snackbar>

      {/* snack bars */}
      <Snackbar
  open={snackbarOpen}
  autoHideDuration={1400}
  onClose={() => {
    setSnackbarOpen(false);
    // Redirect to the login page only if the form has been submitted successfully
    if (formSubmitted) {
      navigate('/signin');
    }
  }}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <MuiAlert
    elevation={6}
    variant="filled"
    onClose={() => setSnackbarOpen(false)}
    severity="success"
  >
    {snackbarMessage}
  </MuiAlert>
</Snackbar>


          <Plainheader />
          <div className="container d-flex justify-content-center align-items-center vh-100" style={{marginTop:250, marginBottom:220}}>
        <div className="registration-form bg-white p-4 rounded shadow">
         <img className='logo-r sm-3 w-25' src={Logo}/>
         
         <Row className="mb-3">
         <Col>
         <h5>Create new account</h5>
         
                </Col>
                <Col>
                <Form.Group controlId="profile">
                <Form.Label>Profile Pic</Form.Label>
                <Form.Control
                    type="file"
                    placeholder="Enter your shop name"
                    value={profilepic}
                    onChange={(e) => setProfilepic(e.target.value)}
                    required
                  /></Form.Group>

                </Col>
         </Row>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
              
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
  
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone </Form.Label>
              <Row className="align-items-center justify-content-between  ">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="+91"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <Button variant="outlined" onClick={handleUseCurrentLocation} disabled={coordinates}>
                    Get Current Location
                  </Button>
                </Col>
                
              </Row>
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="seller">
                  <Form.Label>Seller name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seller name"
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              
              <Col>
                <Form.Group controlId="shop">
                  <Form.Label>Shop Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your shop name"
                    value={shop}
                    onChange={(e) => setShop(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="city">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Appart: /House: /Flat: "
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="pincode">
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
  
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="townDistrict">
                  <Form.Label>Town/District</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your town/district"
                    value={townDistrict}
                    onChange={(e) => setTownDistrict(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="gst">
                  <Form.Label>GSITN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                    
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Panid">
                  <Form.Label>Pan Card</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="EX: DPBPA79XXX"
                    value={panid}
                    onChange={(e) => setPanid(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
             
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="upi">
                  <Form.Label>UPI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="70353xxxx@bank name"
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Bank">
                  <Form.Label>Account</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Account: 564562358xxxx.."
                    value={bankaccount}
                    onChange={(e) => setBankaccount(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group controlId="account name">
                  <Form.Label>Account Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Account name"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="ifsc">
                  <Form.Label>IFSC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="IFSC code"
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <div className='py-3'>
      <Button onClick={handleOpen} disabled={agreementstatus} variant='outlined' endIcon={<IoNewspaper/>}>Terms & Conditions / Agreement</Button>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Terms & Conditions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             1.Accpect the Replace and Returns on time.
             2.Should not delay the order over the time.
             3.shoujnjnnnjnjn

          </Typography>
          <br></br>
          <Button variant='contained' onClick={handleagreement}>I Agree</Button> <br></br><br></br>
           
        </Box>
      </Modal>
    </div>
              </Col>
            </Row>
          <Row className='md-3 py-3'>
            <Col>
            <Button show={agreementstatus} variant="contained" disabled={!agreementstatus} disabled={!coordinates} endIcon={<IoMdSend />} type="submit">
            Register
            </Button>
            <a   href="/signin" className="forgot-password-link  mx-3">
                       Back to login
                    </a>
                    </Col>
                    </Row>
          </Form>
        </div>
        
      </div>
      <br></br>
      <br></br>
     
      </>
    );
}
export default Client_register;