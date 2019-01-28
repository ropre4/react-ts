import * as React from "react";
import "./list.css"
import {Item} from "../../domains/item";
import {history} from "../../utils/history";

export interface ListPageSP {
    items: Item[],
    loading: boolean,
    error: string
}
export interface ListPageDP {
    fetchItems: ()=>void,
    addItem: (title: string, description: string)=>void
}
interface Props extends ListPageDP, ListPageSP {}

interface State {
    title: string,
    description: string
}
export class ListPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
        this.props.fetchItems();
    }

    changeTitle(event: any) {
        this.setState({
            title: event.target.value
        })
    }
    changeDescription(event: any) {
        this.setState({
            description: event.target.value
        })
    }
    addItem() {
        const {title, description} = this.state
        if(!title || !description) alert("please fill some data!");
        else {
            this.props.addItem(title, description);
            this.setState({
                title: "",
                description: ""
            })
        }
    }
    goToItem(id: string) {
        history.push(`/item/${id}` );
    }

    render(){
        const show = !this.props.loading && !this.props.error;
        return (
            <div className="list-page">
                {this.props.loading && <div>Loading...</div> }
                {this.props.error && <div>{this.props.error}</div> }
                {show &&
                <React.Fragment>
                  <ul>
                      {this.props.items.map((item: Item, i: number)=> {
                          return <li key={i} onClick={()=>this.goToItem(item.id)}>{item.title}</li>
                      })}
                  </ul>
                  <div>
                    Add Item:
                    <div>Title: <input type="text" value={this.state.title} onChange={this.changeTitle.bind(this)}/></div>
                    <div>Description: <input type="text" value={this.state.description} onChange={this.changeDescription.bind(this)}/></div>
                    <button onClick={this.addItem.bind(this)}>add!</button>
                  </div>
                </React.Fragment>

                }
            </div>
        );
    }

}