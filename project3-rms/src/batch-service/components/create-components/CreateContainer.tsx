import { connect } from "react-redux";
import { IState } from "../../../employee-service/reducers";
import { CreateComponent } from "./CreateComponent";
import { createBatch } from "../../action-mappers/create-action";

const mapStateToProps = (state: IState) => {
  return {
    createMessage: state.batchState.createMessage
  };
};

const mapDispatchToProps = {
  createBatch
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);
