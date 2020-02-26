import { connect } from "react-redux";
import { IState } from "../../reducers";
import { RegisterComponent } from "./RegisterComponent";
import { registerUser } from "../../action-mappers/register-action";

const mapStateToProps = (state: IState) => {
  return {
    registerMessage: state.registerState.registerMessage
  };
};

const mapDispatchToProps = {
  registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
