import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGrourComponent from './Body/NewsGroup';
import HeaderComponent from './Body/Header';



function App() {
  return (
    <Container>
      <HeaderComponent/>
      <NewsGrourComponent />
    </Container>
  );
}

export default App;
