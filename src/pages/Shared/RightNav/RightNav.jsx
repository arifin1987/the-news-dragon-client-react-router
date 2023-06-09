import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h2>Login with</h2>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Google</Button>
            <Button variant="outline-secondary"><FaGithub />Github</Button>

            <div>
                <h2>Find us on </h2>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <Qzone></Qzone>


        </div>


    );
};

export default RightNav;