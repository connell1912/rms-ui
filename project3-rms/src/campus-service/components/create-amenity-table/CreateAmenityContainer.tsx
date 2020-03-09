import { connect } from "react-redux";
import { IState } from "../../../utility";
import { createAmenity } from "../../action-mappers/create-amenity-action";
import CreateAmenityComponent from "../../components/create-amenity-table/CreateAmenityComponent";

export const mapStateToProps = (state: IState) => {
    return{
        createAmenityMessage: state.amenityState.createAmenityMessage
    };
};

export const mapDispatchToProps = {
    createAmenity
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAmenityComponent);