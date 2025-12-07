import { createroot } from "react-dom/client";
const root = createroot(document.getElementById("root"));   


function MainContent(){    //custom component creation
    return (
        <main>
            <h1>this is a custom component</h1>
            <img src="https://picsum.photos/200/300" alt="random image" />
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </main>
    )
}

root.render(
    <MainContent />

    // <MainContent> we can write like this also</MainContent>


       // pascal case naming convention for custom components.
       //this is a custom component calling.
       // should not forget to use self closing tag
       // should not call like MainContent();
);
// custom components should always return a single element.
// if you want to return multiple elements, you should wrap them in a single element.

