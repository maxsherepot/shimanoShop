import React from "react";
import { ShimanoServiceConsumer } from "../shimano-service-context/shimano-service-context";



const withShimanoService = () => (Wrapped) => {
    return (props) => {
        return (
            <ShimanoServiceConsumer>
                {
                    (shimanoService) => {
                        return (<Wrapped {...props} shimanoService={shimanoService} />);
                    }
                }
            </ShimanoServiceConsumer>
        );
    };
}; 



export { withShimanoService };