import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from './components/Footer';
import { Col, Image, Row } from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/task/:name",
    element: <Main />,
  },
  {
    path: "/task/:name/annotations",
    element: <div>See previous annotations</div>,
  },
]);



function Main() {
  return (
    <Row className="justify-content-center main">
      <Col xs={10} sm={8} md={6} lg={4} className="text-center">
        <Image
          style={{maxHeight: "70vh"}}
          fluid
          src="https://i.imgur.com/dmsj2qC.jpeg"
        />
      </Col>
    </Row>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
