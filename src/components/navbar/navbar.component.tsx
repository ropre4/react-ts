import * as React from "react";
import "./navbar.css";

interface Props {
    title: string
}

interface State {}

export class NavbarComponent extends React.Component <Props, State> {

    render() {
        return (
            <div className="navbar">
                {this.props.title}
            </div>
        );
    }


}