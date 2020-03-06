import { connect } from "react-redux";
import CreateBuildingComponent from "./CreateBuildingComponent";
import { IState } from "../../../utility";
import { createBuilding } from "../../action-mappers/create-building-action";

export const mapStateToProps = (state: IState) => {
  return {
    createBuildingMessage: state.buildingState.createBuildingMessage
  };
};

export const mapDispatchToProps = {
  createBuilding
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBuildingComponent);
