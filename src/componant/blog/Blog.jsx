import React, { useRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from '../Navbar';
const ref = React.createRef();
import Pdf from "react-to-pdf";
import Footer from '../Footer';
//This componant is about some question with answer
const Blog = () => {
 

  return (
    <>
      <Navbar></Navbar>
      <h1 className='p-2 text-center'>Here Some Question with Answer</h1>
      
      <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='button d-block m-auto' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        
      <div className="container p-5">



        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>1.Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
            <Accordion.Body>
            In a controlled component, the form element's value is controlled by React state. This means that the value of the input is determined by the value of the corresponding state property and is updated when the state changes.

            In an uncontrolled component, the form element's value is managed by the browser. This means that the value of the input is determined by the user's input and is not directly controlled by React.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>2.How to validate React props using PropTypes?</Accordion.Header>
            <Accordion.Body>
            To validate React props using PropTypes, you first need to import the PropTypes module from the 'prop-types' 
            After that, you can define the propTypes for your component by creating a static propTypes object inside your component class,
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>3.Tell us the difference between nodejs and express js?</Accordion.Header>
            <Accordion.Body>
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side.
Node.js provides a set of built-in modules that allow developers to work with the file system, networking, and other server-related tasks.
Express.js is a web framework built on top of Node.js that provides a set of features and tools for building web applications.
Express.js simplifies the process of creating HTTP servers and handling HTTP requests by providing middleware and routing mechanisms.
Express.js is flexible and extensible, which allows developers to easily add third-party middleware or create custom middleware.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>4.What is a custom hook, and why will you create a custom hook?</Accordion.Header>
            <Accordion.Body>
            In React, a custom hook is a reusable function that contains logic and stateful behavior that can be shared across multiple components. Custom hooks allow developers to encapsulate complex logic into a single function and reuse it across different components, making the code more organized and easier to maintain.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      </div>
    </div>



<Footer></Footer>




    </>

  );
}

export default Blog;
