import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import GammaFoto from '../Gamma.jpg';


function ContactSchoolComponent() {
    return (
        <>
            <Card className="position-absolute top-50 start-50 translate-middle mt-1" style={{ width: '28rem' }}>
                <Card.Img variant="top" src={GammaFoto} />
                <Card.Body>
                    <Card.Title className="text-center">Gamma Intelligence OÜ</Card.Title>
                    <Card.Text className="text-center">
                        Gamma Intelligence OÜ is an Estonian company that helps to quickly develop new products using a wide
                        range of possible technologies (prototyping, component selection, software development, testing,
                        rapid prototyping). We also offer IT consulting and training.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flushc text-center">
                    <ListGroup.Item>Phone: +372 555 81 521</ListGroup.Item>
                    <ListGroup.Item>E-mail: info.gammatest.net</ListGroup.Item>
                    <ListGroup.Item>Address: 10145, Tornimäe 7-170, Tallinn, Estonia</ListGroup.Item>
                </ListGroup>
                    <Card.Link href="https://www.gammatest.net/index.php" className="btn btn-secondary">Go to Gamma</Card.Link>
            </Card>
        </>
    )
};

export default ContactSchoolComponent;