import { connect } from "react-redux";
import Greeting from "./greeting";
import { logoutCurrentUser } from "../actions/session_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => (dispatch(logoutCurrentUser()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)