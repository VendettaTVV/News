
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import noImage from '../dummy-post-horisontal.jpg';

function NewsModalComponent({show, setShow, article}) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt="picture"
                            src={article.urlToImage || noImage}
                        />
                        <Figure.Caption>
                            {article.url}
                        </Figure.Caption>
                    </Figure >
                    <p dangerouslySetInnerHTML={{ __html: article.content }}> 
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