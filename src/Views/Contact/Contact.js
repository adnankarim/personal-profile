import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import React from 'react';
import {Routing} from '../../Routes/Routes';
import Layout from '../../Layout/Layout';

const Contact = () => {
  return (
    <div id='container'>
      <Layout/>
      <footer>
      <Routing/>
        <div className='content'>
        <SocialButtonsPage/>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      
      <MDBBtn size="lg" href="https://www.linkedin.com/in/adnan-karim-dl/" tag="a" floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
     
      <MDBBtn size="lg" href="https://www.github.com/adnankarim" tag="a" floating social="git">
        <MDBIcon fab icon="github" />
      </MDBBtn>
      <MDBBtn size="lg" href="mailto:akarim.bee18seecs@seecs.edu.pk" tag="a" floating social="email">
        <MDBIcon icon="envelope" />
      </MDBBtn>
     
    </MDBContainer>
  );
}

