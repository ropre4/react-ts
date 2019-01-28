import {HashRouter, Route} from "react-router-dom";
import * as React from "react";
import {ListContainer} from "./pages/list/list.container";
import {ItemContainer} from "./pages/item/item.container";

export function Routes () {
    return(
        <HashRouter>
            <div>
                <Route exact path="/" component={ListContainer}/>
                <Route exact path="/item/:id" component={ItemContainer}/>
            </div>
        </HashRouter>
    );

}