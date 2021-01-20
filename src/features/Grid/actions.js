import {ADD_TILE, REMOVE_TILE} from './constans';

export function addTile(color) {
    return {
        type: ADD_TILE,
        created_at: Date.now(),
        color: color,
    }
}

export function removeTile(id) {
    return {
        type: REMOVE_TILE,
        id: id,
    }
}

export function addTileWithChecking(color) {
    return function(dispatch, getState) {
        if(getState().grid.length < 5) {
            dispatch(addTile(color));
        }
    }
}