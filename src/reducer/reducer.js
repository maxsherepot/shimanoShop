
const initialState = {
    components: [],
    loading: true,
    error: null,
    orderTotal: 0,
    cartItems: [],
    itemsCount: 0
};


const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
        ];
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};


const updateCartItem = (component, item, quantity) => {
    if (component) {
        return {
            ...component,
            count: component.count + quantity,
            price: component.price + item.price * quantity
        }
    } else {
        return {
            id: item.id,
            title: item.title,
            count: 1,
            price: item.price
        };
    };
};


const updateOrder = (state, idx, quantity) => {
    const index = state.components.find(item => item.id === idx);
    const itemIndex = state.cartItems.findIndex(({ id }) => id === idx);
    const item = state.cartItems[itemIndex];
    const newItem = updateCartItem(item, index, quantity);
    
    return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
    };
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COMPONENTS_REQUESTED":
            return {
                ...state,
                components: [],
                loading: true,
                error: null
            };

        case "FETCH_COMPONENTS_LOADED":
            return {
                ...state,
                components: action.payload,
                loading: false,
                error: null
            };

        case "FETCH_COMPONENTS_ERROR":
            return {
                ...state,
                components: action.payload,
                loading: false,
                error: action.payload
            };

        case "COMPONENT_ADD_TO_CART":
            return updateOrder(state, action.payload, 1);

        case "COMPONENT_ON_DECREASE":
            return updateOrder(state, action.payload, -1);

        case "COMPONENT_ON_DELETE":
            const item = state.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        case "CALCULATE_TOTAL_PRICE":
            return {
                ...state,
                orderTotal: state.cartItems.map((item) => item.price).reduce((a, b) => (a + b), 0)
            };

        case "CALCULATE_ITEMS":
            return {
                ...state,
                itemsCount: state.cartItems.map((item) => item.count).reduce((a, b) => (a + b), 0)
            };

        default: return state;
    };
};



export default reducer;