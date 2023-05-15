import React from "react";
import "../styles/Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="body">
            <h1>SpaceX Launch Programs</h1>
            <main style={{ minHeight: "100vh" }}>
                {children}
            </main>
            <div className="footer">
                <h2>Developed by: Ketan Rathod</h2>
            </div>
        </div>
    );
};

export default Layout;
