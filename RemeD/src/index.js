import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import customTheme from "./utils/theme";


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={customTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

