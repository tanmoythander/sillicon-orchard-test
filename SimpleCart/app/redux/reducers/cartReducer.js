import item1 from './../../assets/images/item1.jpeg'
import item2 from './../../assets/images/item2.jpeg'
import item3 from './../../assets/images/item3.jpeg'
import item4 from './../../assets/images/item4.jpeg'
import item5 from './../../assets/images/item5.jpeg'
import item6 from './../../assets/images/item6.jpeg'
import item7 from './../../assets/images/item7.jpeg'
import item8 from './../../assets/images/item8.jpeg'
import item9 from './../../assets/images/item9.jpeg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, REMOVE_ALL } from './../actions/action-types/cart-actions'

const initState = {
    items: [
        { id: 1, title: 'Dell Inspiron 15 3511', desc: "Intel Core i3 1115G4 15.6 Inch FHD Display Carbon Black Laptop", price: 54250, img: item1 },
        { id: 2, title: 'Acer Nitro 7 AN715-51', desc: "Intel core i5 9300H 15.6 Inch FHD IPS Display Black Gaming Laptop", price: 95480, img: item2 },
        { id: 3, title: 'Asus VivoBook 14 K413EQ', desc: "Intel 1165G7 14 Inch FHD WV Display Hearty Gold Laptop", price: 109590, img: item3 },
        { id: 4, title: 'Asus TUF Gaming F15 FX506HC', desc: "Intel 11400H 15.6 Inch FHD WV Display Graphite Black", price: 111760, img: item4 },
        { id: 5, title: 'Asus D515DA', desc: "AMD Ryzen 3 3250U 15.6 Inch FHD Display Win 11 Slate Grey Laptop", price: 53710, img: item5 },
        { id: 6, title: 'Apple MacBook Air Late 2020', desc: "Apple M1 Chip 13.3 Inch Retina Display Touch ID Gold MacBook", price: 117720, img: item6 },
        { id: 7, title: 'Apple MacBook Pro Late 2020', desc: "Apple M1 Chip 8GB Ram 256DB SSD 13.3 Inch Retina Display Silver Laptop", price: 130000, img: item7 },
        { id: 8, title: 'Apple MacBook Pro Late 2021', desc: "Apple M1 Pro 16.2 Inch Liquid Retina XDR Display Silver Laptop", price: 264740, img: item8 },
        { id: 9, title: 'Apple MacBook Pro Late 2021', desc: "Apple M1 Max (10-Core) Chip 14.2 Inch Liquid Retina XDR Display Space Gray Laptop", price: 379750, img: item9 }
    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }
    if (action.type === REMOVE_ALL) {
        
            return {
                ...initState
            }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 6
        }
    }

    else {
        return state
    }

}

export default cartReducer
