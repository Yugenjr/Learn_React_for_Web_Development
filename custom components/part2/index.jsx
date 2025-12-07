//task for custom components in react.jsx

import { createroot } from "react-dom/client";
const root = createroot(document.getElementById("root"));   


function customheader(){ 
       //custom component creation
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
            <footer>
                <small>Â© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </header>
    );
}

root.render(<customheader />);  //rendering it. 