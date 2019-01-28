import {Dispatch} from "redux";
import { connect } from 'react-redux';
import {ICombinedReducers} from "../../reducers/reducers";
import {fetchItem, IAction} from "../../actions/item.actions";
import {ItemPage, ItemPageDP, ItemPageSP} from "./item.page";

function mapStateToProps(reducers: ICombinedReducers): ItemPageSP {
    return {
        item: reducers.item.selectedItem,
        loading: reducers.item.loading,
        error: reducers.item.error
    }
}
function mapDispatchToProps(dispatch: Dispatch<IAction>): ItemPageDP {
    return {
        fetchItem: (id: string)=>{
            fetchItem(dispatch, id)
                .then(dispatch);
        }
    }
}

export const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(ItemPage);


