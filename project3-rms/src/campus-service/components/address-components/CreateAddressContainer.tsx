import { connect } from "react-redux";
import { IState } from "../../../utility";
import { createAddress } from "../../action-mappers/create-address-action";
import { CreateAddressComponent } from "../address-components/CreateAddressComponent";

export const mapStateToProps = (state: IState) => {
  return {
    createMessage: state.addressState.createAddressMessage
  };
};

const mapDispatchToProps = {
  createAddress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAddressComponent);
