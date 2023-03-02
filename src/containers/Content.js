import React from "react";

import Sidebar from "./Sidebar";
import Article from "./Article";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="container row mx-auto">
                    <Sidebar className="sidebar col-12 col-md-4 col-xl-3 pt-4" />
                    <Article className="article col-12 col-md-8 col-xl-9 pt-4 pb-md-4" />
                </div>
            </div>
        )
    }
}

export default Content