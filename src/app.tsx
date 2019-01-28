import * as React from "react";
import {store} from "./reducers/reducers";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {Routes} from "./routes";
import {Provider} from "react-redux";
import "./app.css";

interface IProps {}

export class App extends React.Component {

    constructor(props: IProps){
        super(props);
    }

    render(){
        return(
            <Provider store={store}>
                    <NavbarComponent title={"React - TS app"}/>
                    <Routes />
            </Provider>
        );
    }
}