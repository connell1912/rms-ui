import { connect } from "react-redux";
import CreateCampusComponent from "./CreateCampusComponent";
import { IState } from "../../../utility";
import { createCampus } from "../../action-mappers/create-campus-action";

export const mapStateToProps = (state: IState) => {
  return {
    createCampusMessage: state.campusState.createCampusMessage
  };
};

export const mapDispatchToProps = {
  createCampus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampusComponent);
