import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGrourComponent from './Body';
import HeaderComponent from './Header/Index';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Container >
      <HeaderComponent />
      <Routes>
        <Route path='/' element={
          <>
            <NewsGrourComponent />
            <PaginationComponent />
          </>
        } />
        <Route path='/:q' element={
          <>
            <NewsGrourComponent />
            <PaginationComponent />
          </>
        } />
         <Route path='/lang/:lang' element={
          <>
            <NewsGrourComponent />
            <PaginationComponent />
          </>
        } />
        <Route path='/contact' element={<ContactComponent />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
