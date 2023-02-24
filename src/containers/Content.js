import React from "react";

import Sidebar from "./Sidebar";
import Article from "./Article";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Sidebar className="sidebar col-md-4 col-lg-3 ps-3" />
                <Article className="article col-md-8 col-lg-9 ps-3" />
            </div>
        )
    }
}

export default Content