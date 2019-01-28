import * as React from "react";
import "./item.css"
import {Item} from "../../domains/item";
import {history} from "../../utils/history";


export interface ItemPageSP {
    item: Item,
    loading: boolean,
    error: string
}
export interface ItemPageDP {
    fetchItem: (id: string)=>void
}
interface Props extends ItemPageDP, ItemPageSP {
    match: {
        params: {
            id: string
        }
    }
}

export class ItemPage extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.props.fetchItem(this.props.match.params.id);
    }
    goHome() {
        history.push("/" );
    }
    render(){
        const show = !this.props.loading && !this.props.error && this.props.item;
        return (
            <div className="item-page">
                {this.props.loading && <div>Loading...</div> }
                {this.props.error && <div>{this.props.error}</div> }
                {show &&
                <div>
                  <div>id: {this.props.item.id}</div>
                  <div>Title: {this.props.item.title}</div>
                  <div>Description: {this.props.item.description}</div>
                </div>
                }
                <button onClick={this.goHome}>Take me back!</button>
            </div>
        );
    }

}