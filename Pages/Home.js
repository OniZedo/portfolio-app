import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

export default class Home extends React.Component {
    render() {
        return (
            <div style={{height: '100vh', backgroundColor: '#dedede' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', paddingTop: '10vh'}}>

                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <p>
                            Hi, fill in ALL THE INFORMATION. Thanks
                        </p>
                        <>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                            </InputGroup>

                            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://example.com/users/
                                </InputGroup.Text>
                                <FormControl id="basic-url" aria-describedby="basic-addon3" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>$</InputGroup.Text>
                                <FormControl aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Text>With textarea</InputGroup.Text>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>
                        </>
                        <p style={{ paddingTop: '5vh' }}>
                            Link for InputGroups used: <a href='https://react-bootstrap.netlify.app/components/input-group/' target="_blank" rel='noreferrer'>InputGroup</a>
                        </p>
                    </div>

                    <div>
                        <Carousel variant="dark" style={{ maxHeight: '500px', maxWidth: '600px' }}>
                            <Carousel.Item>
                                <img style={{ height: '500px', width: '500px' }}
                                    className="d-block w-100"
                                    src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
                                    alt="Cat 1"
                                />
                                <Carousel.Caption style={{ backgroundColor: 'white', opacity: '.7' }}>
                                    <h3>First kitteh</h3>
                                    <p>Is actually soooo bored</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ height: '500px', width: '600px' }}
                                    className="d-block w-100"
                                    src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg"
                                    alt="Cat 2"
                                />

                                <Carousel.Caption style={{ backgroundColor: 'white', opacity: '.7' }}>
                                    <h3>Second Kitteh</h3>
                                    <p>One too many bowls of catnip</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ height: '500px', width: '600px' }}
                                    className="d-block w-100"
                                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
                                    alt="Cat 3"
                                />

                                <Carousel.Caption style={{ backgroundColor: 'white', opacity: '.7' }}>
                                    <h3>Third Kitteh</h3>
                                    <p>Drank a little too hard last night and is DEFINITELY feeling it</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                        <Card>
                            <Card.Header>A Quote thingy</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        Link for quote card used: <a href='https://react-bootstrap.netlify.app/components/cards/#header-and-footer' target="_blank" rel='noreferrer'>Quote Card</a>
                                    </p>
                                    <footer className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Eric makes things</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}