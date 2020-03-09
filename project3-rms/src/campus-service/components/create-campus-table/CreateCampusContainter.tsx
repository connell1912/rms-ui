import {CreateCampusComponent} from './CreateCampusComponent';
import {connect} from 'react-redux';
import { IState } from '../../../utility';
import {addCampus} from '../../../utility/api';

export const mapStateToProps = (state:IState) =>{
    return {
        createCampusMessage: state.campusState.createCampusMessage
    };
};

export const mapDispatchToProps = {
    addCampus
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCampusComponent)