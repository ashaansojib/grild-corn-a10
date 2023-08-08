import React, { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

const Blog = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    return (
        <div className='my-container' ref={componentRef}>
            <div className='text-center py-4'>
            <button onClick={handlePrint} className='active'>Download PDF</button>
            </div>
            <div className='p-8 m-2 bg-gray-200 rounded-md mb-6'>
                <h2 className='card-title'>Differences between uncontrolled and controlled components in react?</h2>
                <p>In React, a component can be either controlled or uncontrolled. The difference between the two is how the components data is managed and updated. An uncontrolled component is one where the components state is managed by the DOM. This means that the components value is stored in the DOM, and any changes to the value are reflected in the DOM. In an uncontrolled component, React does not keep track of the component state. Instead, you have to access the value of the component using a ref. On the other hand, A controlled component, on the other hand, is one where the components state is managed by React. This means that the component value is stored in React state, and any changes to the value are made through React state management methods, such as setState. In a controlled component, React keeps track of the component state and updates it as necessary.</p>
            </div>
            <div className='p-8 m-2 bg-gray-200 rounded-md mb-6'>
                <h2 className='card-title'>How to validate React props using PropTypes?</h2>
                <p>In React, we can use PropTypes to validate the props of our project components. PropTypes is a package that comes with React, and it allows you to specify the type and shape of the props that your component expects. To validate the props, we are adding a propTypes property to the component, which is an object that contains the type and shape of each prop that the component expects.</p>
            </div>
            <div className='p-8 m-2 bg-gray-200 rounded-md mb-6'>
                <h2 className='card-title'>Tell us the difference between nodejs and express js.</h2>
                <p>Node.js is a server-side JavaScript runtime environment that allows you to run JavaScript on the server side. It provides a platform for building scalable, high-performance applications using JavaScript. Node.js includes a built-in module system and a set of API for working with file, networking, and other system-level tasks. As well Express.js is a popular web application framework built on top of Node.js. It provides a set of tools and features for building web applications, including middleware for handling requests and responses, routing, and template engines for rendering views. Express.js is designed to be lightweight, flexible, and easy to use.</p>
            </div>
            <div className='p-8 m-2 bg-gray-200 rounded-md mb-6'>
                <h2 className='card-title'>What is a custom hook, and why will you create a custom hook?</h2>
                <p>A custom hook is a reusable function in React that managed logic and state, allowing you to share functionality across multiple components. If we have a piece of logic or state management that we need to use in multiple components? we can create a custom hook to encapsulate that logic and reuse it across different components. Custom hooks can be tested independently of the components that use them, which can help to simplify your testing code and make it easier to write unit tests. Overall, custom hooks are a powerful tool for creating reusable, modular code in React. They can help to simplify your code, improve maintainability, and make it easier to test and reason about your code.</p>
            </div>
        </div>
    );
};

export default Blog;