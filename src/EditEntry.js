import { Component } from "react";

class EditEntry extends Component {
    constructor() {
        super()
        this.state = {
            updatedText: ""
        }
    }

    handleEdit = (e) => {
        // store the text that the user has typed into the textarea
        const text = e.target.value
        console.log(text);

        this.setState({
            updatedText: text
        })
    }

    // prevent the default behaviour from occurring when the cancel button has been clicked
    cancelEdit = (e) => {
        e.preventDefault()
    }
    
    render() { 

        const { displayEditForm, currentText, submitChanges, entryId, toggleEdit } = this.props

        return (
            <form className={displayEditForm}>
                <h3>Add Changes to Your Entry</h3>
                {/* REVIEW: no placeholder text; just data from the firebase database? */}
                <div className="flexEdit">
                    <textarea id="" defaultValue={currentText} onChange={this.handleEdit}></textarea>
                    <div className="flexButtons">
                        <button onClick={(e) => {
                            submitChanges(e, this.state.updatedText, entryId); toggleEdit()
                        }}>Confirm Changes</button>
                        <button onClick={(e) => {
                            this.cancelEdit(e)
                            toggleEdit()
                        }}>Cancel Changes</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default EditEntry;