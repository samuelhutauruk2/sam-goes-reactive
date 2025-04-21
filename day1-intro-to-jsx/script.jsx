// Components
// User interfaces can be broken down into smaller building blocks called components.
// Components allow you to build self-contained, reusable snippets of code. 
// If you think of components as LEGO bricks, you can take these individual bricks and combine 
// them together to form larger structures. If you need to update a piece of the UI, 
// you can update the specific component or brick.


// Creating components
// In React, components are functions. Inside your script tag, create a new function called header:

const app = document.getElementById('app');
function Header() {
    return <h1>Develop. Preview. Ship.</h1>;
}

// Nested components
function HomePage() {
    return (
        <>
        <Header />
        <Header />
        </>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
