import { connect } from "react-redux";
import { IState } from "../../../utility";
import {createBuilding} from "../../action-mappers/create-building-action"
import CreateBuildingComponent from "./CreateBuildingComponent";

export const mapStateToProps = (state: IState) => {
    return{
        createMessage: state.buildingState.createBuildingMessage
    };
};

export const mapDispatchToProps = {
    createBuilding
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBuildingComponent);