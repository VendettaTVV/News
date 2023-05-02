# News
![react.js](https://img.shields.io/npm/v/react?label=React.js&logo=react&style=plastic)
![react-bootstrap](https://img.shields.io/npm/v/react-bootstrap?label=React-bootstrap&logo=bootstrap&style=plastic)
![moment](https://img.shields.io/npm/v/moment?label=Moment&logo=moment&style=plastic)
![react-datepicker](https://img.shields.io/npm/v/react-datepicker?label=react-datepicker&logo=datepicker&style=plastic)
![react-redux](https://img.shields.io/npm/v/react-redux?label=react-redux&logo=redux&style=plastic)

____

**[News](https://vendettatvv.github.io/News/)** - is my project in `React.js`. This project helps to find news on various topics using the API.

**API documentation** https://newsapi.org/ - website that allows you to make up to 100 requests daily for free. To receive data, you need to register on the site and obtain an API key.

To build the application I use ready-made components from `react-bootstrap` - free set of tools for creating websites and web applications.

To manage the state of the application, I used the library `react-redux`. This library contains tools to greatly simplify the transfer of data through the context.

The application router is a module `react-router`, which contains the main functionality for working with routing. In work with the browser, I use the module `react-router-dom`, by wrapping the components in `App.js`.

**Now in more details**
___

First, a framework was built, where the main file is `App.js`, which include subsequent components and files such as:
- ***Header***: `HeaderComponent`;
-  ***Body***: `BodyComponent`, `NewsModalComponent`, `NewsCardComponent`, `ContactComponent`, `ContactSchoolComponent`. /***Form***: `FormComponent`;
-  ***Footer***: `PaginationComponent`.
  
  In addition to the files that form the visual component, the application contains other files:
  - _`apiServices`_ - this file contains async functions `getEverithing` and `getSources`, which use the `fetch` method to transfer the latest updates from the server;
  - _`stateService`_ - this is the file in which was import `@reduxjs/toolkit`, where the data resides (the object is used as the default value `initialState`) and functions `createAction`, which are used in the variable `reducer`. Having formed the `reducer`, where the `initialState` and `Action` are placed, using the `createReducer` function wrapped in `configureStore`, was imported further into the root component as the `store` variable. I also wrapped the root component of our application with the `react-redux` `Provider`.
  - _`.env`_ - этот файл позволяет нам скрыть `ApiKey`.
  
  _`HeaderComponent`_ includes a logo link and a link to contacts.

  The body of the application contains the basic information of the application. Having received the data in the _`BodyComponent`_ using `apiServices`, it passes the data to the _`NewsCardComponent`_, which are rendered there in the form of 12 `cards` with content. Inside the component is the `useEffect` hook, which is imported from `React` like other hooks (like `useState`). This hook allows us to trigger a number of side effects after the component has rendered. In this case, we have an array with dependencies as the second parameter, only after they change, `useEffect` will be rerendered.

  The `Search News` button opens the _`FormComponent`_, which is a window that allows you to filter the user's query. The file contains a large number of parameters, such as: `search input`, the ability to sort by `Title`, `Description`, `Content`, dates `from` and `to`, `language`, as well as selecting a specific news `sources` by name (this request is made directly using `apiServices`). Inside the component is the `data` object, which contains the data we need when generating a request.

  _`NewsModalComponent`_ - this component allows us to open a modal window that contains props passed from _`BodyComponent`_. These are the hooks `const [show, setShow] = useState(false)` and `article`.

  _`ErrorModalComponent`_ is the second modal window that appears when an error occurs.

  _`PaginationComponent`_ - this component is responsible for the pagination sequence and their display.

  `useDispatch` and `useSelector` - hooks from `react-redux` allows you to access an existing higher order component. We use this set in _`ErrorModalComponent`_, _`PaginationComponent`_ and _`FormComponent`_. `useDispatch` is a hook that allows us to interact with redux. `useSelector` is a hook that monitors the redux state and, if there are changes, starts rendering the component.
































