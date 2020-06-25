
const componentsLoaded = (newComponents) => {
    return {
        type: "FETCH_COMPONENTS_LOADED",
        payload: newComponents
    };
};


const componentsRequested = () => {
    return {
        type: "FETCH_COMPONENTS_REQUESTED"
    };
};


const componentsError = (error) => {
    return {
        type: "FETCH_COMPONENTS_ERROR",
        payload: error
    };
};


const componentAddToCart = (id) => {
    return {
        type: "COMPONENT_ADD_TO_CART",
        payload: id
    };
};


const componentOnDecrease = (id) => {
    return {
        type: "COMPONENT_ON_DECREASE",
        payload: id
    };
};


const componentOnDelete = (id) => {
    return {
        type: "COMPONENT_ON_DELETE",
        payload: id
    };
};


const calculateTotalPrice = () => {
    return {
        type: "CALCULATE_TOTAL_PRICE"
    };
};


const calculateItems = () => {
    return {
        type: "CALCULATE_ITEMS"
    };
};


export {
    componentsLoaded,
    componentsRequested,
    componentsError,
    componentAddToCart,
    componentOnDecrease,
    componentOnDelete,
    calculateTotalPrice,
    calculateItems
};