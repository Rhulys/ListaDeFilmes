"use client"

import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <ApolloProvider client={client}>{children}</ApolloProvider>
            </body>
        </html>
    );
}
