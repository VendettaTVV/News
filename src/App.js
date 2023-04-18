import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGrourComponent from './Body';
import HeaderComponent from './Header/Index';
import PaginationComponent from './Footer';



function App() {
  return (
    <Container>
      <HeaderComponent/>
      <NewsGrourComponent />
      <PaginationComponent/>
    </Container>
  );
}

export default App;
