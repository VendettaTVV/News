import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardFoto from '../CardFoto.jpg';

function ContactComponent() {
    return (
        <>
            <Card className="position-absolute top-50 start-50 translate-middle mt-1" style={{ width: '28rem' }}>
                <Card.Img variant="top" src={CardFoto} />
                <ListGroup className="list-group-flushc text-center">
                    <Card.Title className="text-center">Vitalii Tkachuk</Card.Title>
                    <Card.Text className="text-center">
                        Front-end developer
                    </Card.Text>
                    <ListGroup.Item>Phone: +37256762509</ListGroup.Item>
                    <ListGroup.Item>E-mail: vvtkachukvv@gmail.com</ListGroup.Item>
                </ListGroup>

                <Card.Link href="https://github.com/VendettaTVV" className="btn btn-secondary" target="_blank">My github link</Card.Link>

            </Card>
        </>
    )
};

export default ContactComponent;