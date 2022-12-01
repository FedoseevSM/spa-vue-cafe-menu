import { getItem, getItems, addItem } from "../api/items";


export function getAllItems() {
    const res = getItems().catch(error => console.log(error));
    return res
};
