import React, { Component } from "react";
import DataListItem from "../data-list-item/data-list-item";
import { connect } from "react-redux";
import { componentsLoaded, componentsRequested, componentsError, componentAddToCart } from "../../actions/actions";
import { withShimanoService } from "../hoc/with-shimano-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";



const DataList = ({ components, addToCart }) => {
    
    return (
        <div>
            {components.map((component) => {
                
                return (
                    <div key={component.title}>
                        <DataListItem
                            component={component}
                            addToCart={() => addToCart(component.id)} />
                    </div>
                );
            })};
        </div>
    );
};


class DataListContainer extends Component {
    
    componentDidMount() {
        const { shimanoService, componentsLoaded, componentsRequested, componentsError } = this.props;

        componentsRequested();
        shimanoService.getData()
            .then((data) => componentsLoaded(data))
            .catch((error) => componentsError(error))
    };


    render() {
        const { components, loading, error, addToCart } = this.props;

        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <DataList
            components={components}
            addToCart={addToCart} />
    };
};



const mapStateToProps = ({ components, loading, error }) => {
    return { components, loading, error }
};


const mapDispatchToProps = {
    addToCart: (id) => componentAddToCart(id),
    componentsLoaded,
    componentsRequested,
    componentsError
};



export default withShimanoService()(connect(mapStateToProps, mapDispatchToProps)(DataListContainer));