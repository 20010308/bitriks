import React from 'react';
import {Collapse} from "reactstrap";
import {connect} from "react-redux";
import {update_state} from "../redux/action/menuAction";

const Collapsee = (props) => {
    return (
        <div>
            <button type="button" onClick={() => props.update_state({open: !props.open})}><img className="image" src="/image/burger.png" alt=""/></button>
            <Collapse isOpen={props.open}>
                <div className="table">
                    <thead>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    <tr><td>CRM</td></tr>
                    </thead>
                </div>
            </Collapse>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        open: state.menu.open,

    }
};

export default connect(mapStateToProps, {update_state})(Collapsee);