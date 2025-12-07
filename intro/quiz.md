
where does react put all  of the elements i create in jsx when i render them?

          React puts all of the elements inside the div with id "root" in the index.html file.

what would show up in the console if i run console.log(<h1>Hello World</h1>);? 

          It would show a React element object representing the h1 element with the text "Hello World".

          console.log(<h1>Hello World</h1>);

why we cant render multiple elements in react?
          React can only render one element at a time. If you want to render multiple elements, you need to wrap them in a single parent element.

          const reactele  = createElement(
              "div",
              null,
              createElement("h1", null, "Hello World"),
              createElement("h2", null, "Hello World")
          );

          const roots = createRoot(document.getElementById("root"));
          roots.render(
              reactele
          );  

what is imperative and declarative programming?

          Imperative programming is a programming paradigm that uses statements that change a program's state. It is a **"how to"** approach to programming. 
          
          Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow. It is a **"what to"** approach to programming.

what means composable? 

          composable means that you can combine small components to make something larger or more complex.  Makes code reusable and easier to maintain.

  
