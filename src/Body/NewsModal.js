
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import noImage from '../dummy-post-horisontal.jpg';

function NewsModalComponent({ show, setShow, article }) {
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
                    </Figure >
                    <p dangerouslySetInnerHTML={{ __html: article.content }}>
                    </p>
                    <Button variant='outline-secondary' href={article.url} className='w-100' target='_blank'>
                        Read more
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='w-100' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewsModalComponent;