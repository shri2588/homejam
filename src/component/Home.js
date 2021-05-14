import { React } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import circle from '../circle.png'
import heart from '../heart.png'
import cia from '../cia.png'
import cib from '../cib.png'
import benny from '../benny.png'
import vijay from '../vijay.png'
import andrea from '../andrea.png'
import shilpa from '../shilpa.png'
import cimg1 from '../cimg1.png'
import cimg2 from '../cimg2.png'
import cimg3 from '../cimg3.png'
import f1 from '../f1.png'
import f2 from '../f2.png'


function Home() {

    return (

        <div className="header-wraper">
            <Container className="first-header" fluid>
                <Row>
                    <Col md={3}>
                        <Image src={circle} className="mx-auto d-block" style={{ width: '60%', marginTop: '450px' }} />
                        <Image src={heart} id="circle-inner" />
                        <p id="circle-text-up"><strong>0</strong></p>
                        <p id="circle-text-down">Label</p>
                    </Col>
                    <Col md={3}>
                        <Image src={circle} className="mx-auto d-block" style={{ width: '60%', marginTop: '450px' }} />
                        <Image src={cia} id="circle-inner" />
                        <Image src={cib} id="circle-cib" />
                        <p id="circle-text-up"><strong>0</strong></p>
                        <p id="circle-text-down">Label</p>
                    </Col>
                    <Col md={3}>
                        <Image src={circle} className="mx-auto d-block" style={{ width: '60%', marginTop: '450px' }} />
                        <Image src={cia} id="circle-inner" />
                        <Image src={cib} id="circle-cib" />
                        <p id="circle-text-up"><strong>0</strong></p>
                        <p id="circle-text-down">Label</p>
                    </Col>
                    <Col md={3}>
                        <Image src={circle} className="mx-auto d-block" style={{ width: '60%', marginTop: '450px' }} />
                        <Image src={cia} id="circle-inner" />
                        <Image src={cib} id="circle-cib" />
                        <p id="circle-text-up"><strong>0</strong></p>
                        <p id="circle-text-down">Label</p>
                    </Col>

                </Row>
            </Container>

            <Container style={{ background: '#000000' }} fluid>
                <Container>
                    <Row>
                        <Col md={6} style={{ paddingTop: '150px' }}>
                            <p id="upcomming-shows">Upcoming Shows</p>
                            <hr id="hr-id" />
                        </Col>
                        <Col md={6} style={{ paddingTop: '150px' }} >
                            <p id="view-all" className="float-right">View All</p>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <br />
                        <br />
                        <Col>
                            <Card style={{ width: '15rem', background: '#111229' }}>
                                <Card.Img variant="top" src={benny} />
                                <Card.Body>
                                    <Row>
                                        <Col><p id="card-folk">Folk</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p id="card-benny">Benny Dayal</p></Col>
                                    </Row>
                                    <Row>
                                        <Col id="more-info">More Info</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', background: '#111229' }}>
                                <Card.Img variant="top" src={vijay} />
                                <Card.Body>
                                    <Row>
                                        <Col><p id="card-bolly">Bollywood</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p id="card-benny">Vijay Yesudas</p></Col>
                                    </Row>
                                    <Row>
                                        <Col id="more-info">More Info</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', background: '#111229' }}>
                                <Card.Img variant="top" src={andrea} />
                                <Card.Body>
                                    <Row>
                                        <Col><p id="card-folk">Folk</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p id="card-benny">Andrea Jeremiah</p></Col>
                                    </Row>
                                    <Row>
                                        <Col id="more-info">More Info</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', background: '#111229' }}>
                                <Card.Img variant="top" src={shilpa} />
                                <Card.Body>
                                    <Row>
                                        <Col><p id="card-folk">Folk</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p id="card-benny">Shilpa Rao</p></Col>
                                    </Row>
                                    <Row>
                                        <Col id="more-info">More Info</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>


            <Container style={{ background: '#000000' }} fluid>
                <Container>
                    <Row>
                        <Col md={6} style={{ paddingTop: '150px' }}>
                            <p id="upcomming-shows">Reviews</p>
                            <hr id="hr-id" />
                        </Col>
                        <Col md={6} style={{ paddingTop: '150px' }} >
                            <p id="view-all" className="float-right">1/12</p>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <br />
                        <br />
                        <Col md={4}>
                            <Card style={{ width: '20rem', background: '#0A0B1A', border: '2px solid #E5C558', borderRadius: '5%' }}>
                                <Card.Body>
                                    <Row>
                                        <Col md={3}><Image src={cimg3} /></Col>
                                        <Col>
                                            <Col>
                                                <p id="hellen">Hellen Jummy</p>
                                                <Image src={f2} className="float-left" style={{marginTop:'-20px'}}/>
                                                <p id="ca">PALQ ALTO, CA</p>
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p id="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus distinctio optio, minima modi quos quasi minus.</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '20rem', background: '#0A0B1A', border: '2px solid #E5C558', borderRadius: '5%' }}>
                                <Card.Body>
                                    <Row>
                                        <Col md={3}><Image src={cimg1} /></Col>
                                        <Col>
                                            <Col>
                                                <p id="hellen">Isaac Oluwatermilorun</p>
                                                <Image src={f1} className="float-left" style={{marginTop:'-20px'}}/>
                                                <p id="ca">PALQ ALTO, CA</p>
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p id="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus distinctio optio, minima modi quos quasi minus.</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '20rem', background: '#0A0B1A', border: '2px solid #E5C558', borderRadius: '5%' }}>
                                <Card.Body>
                                    <Row>
                                        <Col md={3}><Image src={cimg2} /></Col>
                                        <Col>
                                            <Col>
                                                <p id="hellen">Hellen Jummy</p>
                                                <Image src={f1} className="float-left" style={{marginTop:'-20px'}}/>
                                                <p id="ca">PALQ ALTO, CA</p>
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p id="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus distinctio optio, minima modi quos quasi minus.</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Container>
            </Container>
        </div>

    )
}


export default Home;