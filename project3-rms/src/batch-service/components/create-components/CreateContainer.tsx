import { IState } from "../../reducers";
import { createBatch } from "../../action-mappers/create-action"
import { connect } from "react-redux";
import { CreateComponent } from "./CreateComponent";


const mapStateToProps = (state: IState) => {
    return {
      createMessage: state.batchState.createMessage
    };
  };
  
  const mapDispatchToProps = {
    createBatch
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent);