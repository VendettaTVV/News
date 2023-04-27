import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGrourComponent from './Body';
import HeaderComponent from './Header/Index';
import PaginationComponent from './Footer';
import moment from 'moment';
import ErrorModalComponent from './ErrorModal';



function App(props) {

  return (
    <Container >
      <HeaderComponent />
      <NewsGrourComponent {...props}/>
      <PaginationComponent />
      <ErrorModalComponent />
    </Container>
  );
}

App.defaultProps = {
  q: "ukraine",
  from: moment().subtract(1, "days").format("YYYY-MM-DDT00:00:00.000"),
  to: moment().format("YYYY-MM-DDT23:59:59.999"),
  language: "en",
  searchIn: "title,description",
  pageSize: 12,
  page: 1,
}

export default App;
