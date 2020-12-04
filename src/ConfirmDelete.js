import { Component } from "react";

class ConfirmDelete extends Component {
    // prevent the default behaviour from occurring when the no button has been clicked
    cancelDelete = (e) => {
        e.preventDefault()
    }
    
    render() {

        const { displayDeleteOptions, toggleDelete, deleteEntry, entryId } = this.props;

        return (
            <div className={displayDeleteOptions}>
                <h3>Are you sure you want to delete this entry?</h3>
                <button onClick={(e) => {
                    this.cancelDelete(e);
                    deleteEntry(entryId)
                    toggleDelete()
                }}>Yes</button>
                <button onClick={(e) => {
                    this.cancelDelete(e);
                    toggleDelete()
                }}>No</button>
            </div>
        )
    }
}

export default ConfirmDelete;