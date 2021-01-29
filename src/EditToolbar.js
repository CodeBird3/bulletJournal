import { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EditToolbar extends Component {
    render() {

        // destructure props
        const { toggleEdit, toggleComplete, toggleCancelled, toggleDelete, completeStatus, cancelledStatus } = this.props

        return (
            <Fragment>
                {/* REVIEW turn these back into buttons? */}
                <button 
                    htmlFor="editButton"
                    aria-label="edit entry"
                    onClick={toggleEdit}
                >
                    <FontAwesomeIcon icon="pencil-alt" />
                </button>
                <button
                    htmlFor="completeButton"
                    aria-label="complete entry"
                    onClick={toggleComplete}
                >
                    <FontAwesomeIcon icon="check" />
                </button>
                <button
                    htmlFor="cancelButton"
                    aria-label="cancel entry"
                    onClick={toggleCancelled}
                >
                    <FontAwesomeIcon icon="ban" />
                </button>
                <button
                    htmlFor="deleteButton"
                    aria-label="delete entry"
                    onClick={toggleDelete}
                >
                    <FontAwesomeIcon icon="times" />
                </button>
            </Fragment>
        )
    }
}

export default EditToolbar;