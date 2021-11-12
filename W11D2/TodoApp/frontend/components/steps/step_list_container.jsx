import {connect} from "react-redux";
import StepList from "./step_list";
import { receiveStep, removeStep } from "../../actions/step_actions";

const mSTP = (state) => {
    return{
        
    }
}

const mDTP = (dispatch) => {
    return{

    }
}

export default connect(mSTP, mDTP)(StepList)