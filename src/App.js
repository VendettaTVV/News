import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body';
import HeaderComponent from './Header/Index';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import ContactSchoolComponent from './Body/ContactsSchool';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Container >
      <HeaderComponent />
      <Routes>
        <Route path="/News" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/News/:q" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/News/lang/:lang" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/News/school" element={<ContactSchoolComponent />} />
        <Route path="/News/contact" element={<ContactComponent />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
