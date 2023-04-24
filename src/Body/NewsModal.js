
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import noImage from '../dummy-post-horisontal.jpg';

function NewsModalComponent(props) {
    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal size="lg" show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt="picture"
                            src={props.article.urlToImage || noImage}
                        />
                        <Figure.Caption>
                            {props.article.url}
                        </Figure.Caption>
                    </Figure >
                    <p dangerouslySetInnerHTML={{ __html: props.article.content }}> 
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewsModalComponent;