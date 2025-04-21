// Components
// User interfaces can be broken down into smaller building blocks called components.
// Components allow you to build self-contained, reusable snippets of code. 
// If you think of components as LEGO bricks, you can take these individual bricks and combine 
// them together to form larger structures. If you need to update a piece of the UI, 
// you can update the specific component or brick.


// Creating components
// In React, components are functions. Inside your script tag, create a new function called header:

function Header() {
    // With JSX you can write expressions inside curly braces { }.
    // The expression can be a React variable, or property, or any other valid JavaScript expression. 
    // JSX will execute the expression and return the result:
    return <h1>React is {5 + 5} times better with JSX</h1>;
}

// Nested components :
// One Top Level Element
// The HTML code must be wrapped in ONE top level element.
// Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
// A fragment looks like an empty HTML tag: <></>.
function HomePage() {
    return (
        <>
        {/* Elements Must be Closed :
        JSX follows XML rules, and therefore HTML elements must be properly closed.
        Close empty elements with '/>' */}
        <Header />
        <Header />
        </>
    );
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
