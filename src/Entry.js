import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditToolbar from "./EditToolbar.js";
import EditEntry from "./EditEntry.js";
import ConfirmDelete from "./ConfirmDelete.js";

class Entry extends Component {
    constructor() {
        super()
        this.state = {
            // show/hide EditToolbar
            isActive: false,
            // show/hide edit form
            needsEdit: false,
            // show/hide completed styles
            isComplete: false,
            // show/hide cancelled styles
            isCancelled: false,
            // show/hide delete confirmation dropdown
            toDelete: false
        }
    }

    // show the chosen symbol in the journal entry
    showSymbol = (chosenSymbol) => {
        switch (chosenSymbol) {
            case "task":
                return <FontAwesomeIcon icon="circle" />;
            case "event":
                return <FontAwesomeIcon icon={["far", "circle"]} />;
            case "appointment":
                return <FontAwesomeIcon icon="caret-up" />;
            case "note":
                return <FontAwesomeIcon icon="minus" />;
            case "priority":
                return <FontAwesomeIcon icon="asterisk" />;
            default:
                return "No symbols matched";
        }
    }

    // reveal the editButtons container when the list item has been clicked on
    toggleActive = () => {
        // change the active state of the EditToolbar component to determine whether it can be seen by the user or should be hidden when the user clicks on the list item
        this.setState({
            isActive: !this.state.isActive
        })
    }

    // allow the user to edit the content in the entry
    handleEdit = () => {
        // change the state of needsEdit to be the opposite
        this.setState({
            needsEdit: !this.state.needsEdit
        })
    }

    // allow the user to determine when the task has been completed
    isCompleted = () => {
        // TODO checkmark icon overlaps the entry's symbol

        // change the state of isComplete to be the opposite
        this.setState({
            isComplete: !this.state.isComplete
        })
    }

    // allow user to cross out an entry that no longer need to be carried out
    isCancelled = () => {
        // TODO cancel icon overlaps the entry's symbol

        // change the state of isCancelled to be the opposite
        this.setState({
            isCancelled: !this.state.isCancelled
        })
    }

    confirmDelete = () => {
        // change the state of toDelete to be the opposite
        this.setState({
            toDelete: !this.state.toDelete
        })
    }
    
    render() {

        const { id, symbol, text, submitChanges, completeStatus, cancelledStatus, deleteEntry } = this.props
        console.log(id);

        return (
            <li
                key={id}
                onClick={this.toggleActive}
                className={`${(this.state.isComplete) ? "completed" : ""} ${(this.state.isCancelled) ? "cancelled" : ""}`}
            >
                <i>{this.showSymbol(symbol)}</i>
                <p>{text}</p>
                <div
                    className={(this.state.isActive) ? "showButtons" : "hideButtons"}
                >
                    <EditToolbar
                        value={id}
                        toggleEdit={this.handleEdit}
                        toggleComplete={this.isCompleted}
                        toggleCancelled={this.isCancelled}
                        toggleDelete={this.confirmDelete}
                        // completeStatus={() => {completeStatus(id, this.isCompleted)}}
                        // cancelledStatus={() => {cancelledStatus(id, this.isCancelled)}}
                    />
                </div>
                {/* form component for edit */}
                <EditEntry
                    displayEditForm={this.state.needsEdit ? "editForm" : "hideForm"}
                    currentText={text}
                    submitChanges={submitChanges}
                    entryId={id}
                    toggleEdit={this.handleEdit}
                    />
                {/* option to confirm deleting an entry */}
                <ConfirmDelete
                    displayDeleteOptions={this.state.toDelete ? "confirmDelete" : "hideForm"}
                    toggleDelete={this.confirmDelete}
                    deleteEntry={deleteEntry}
                    entryId={id}
                />
            </li>
        )
    }
}

export default Entry;