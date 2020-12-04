import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewEntry extends Component {
    constructor() {
        super()
        this.state = {
            // for the current entry that the user is inputting, store the symbol and text
            currentSymbol: "",
            currentText: ""
        }
    }

    // method to store the radio button value from the form
    selectedSymbol = (e) => {
        // target the id of the selected radio input inside of the fieldset
        const radioButton = e.target.id

        // update the state of the currentSymbol
        this.setState({
            currentSymbol: radioButton
        })
    }

    // method to store the text from the form
    newEntryText = (e) => {
        // store the text that the user has typed into the textarea
        const text = e.target.value

        // update the state of the currentText
        this.setState({
            currentText: text
        })
    }

    clearState = (symbolValue) => {
        // reset the currentSymbol and currentText to empty strings
        this.setState({
            currentSymbol: "",
            currentText: ""
        })

        // TODO how to remove label styles once the state for the radio button has been set back to an empty string
    }
    
    
    render() { 

        // destructure props
        const { submit } = this.props

        return (
            <section className="newEntry">
                <div className="wrapper">
                    <h2>New Entry</h2>
                    <form className="newEntryForm">
                        <fieldset onChange={this.selectedSymbol}>
                            <legend>Is this a:</legend>
                            <input
                                type="radio"
                                name="entrySymbol"
                                id="task"
                            />
                            <label htmlFor="task">
                                <FontAwesomeIcon icon="circle" />
                                <p>Task</p>
                            </label>
        
                            <input
                                type="radio"
                                name="entrySymbol"
                                id="event"
                            />
                            <label htmlFor="event">
                                <FontAwesomeIcon icon={["far", "circle"]} />
                                <p>Event</p>
                            </label>
        
                            <input
                                type="radio"
                                name="entrySymbol"
                                id="appointment"
                            />
                            <label htmlFor="appointment">
                                <FontAwesomeIcon icon="caret-up" />
                                <p>Appointment</p>
                            </label>
        
                            <input
                                type="radio"
                                name="entrySymbol"
                                id="note"
                            />
                            <label htmlFor="note">
                                <FontAwesomeIcon icon="minus" />
                                <p>Note</p>
                            </label>
        
                            <input
                                type="radio"
                                name="entrySymbol"
                                id="priority"
                            />
                            <label htmlFor="priority">
                                <FontAwesomeIcon icon="asterisk" />
                                <p>Priority</p>
                            </label>
                        </fieldset>
                        <div className="textEntry">
                            <label htmlFor="newEntry">Add a New Entry:</label>
                            <textarea
                                name="newEntry"
                                id="newEntry"
                                placeholder="e.g. Today I..."
                                value={this.state.currentText}
                                onChange={this.newEntryText}>
                            </textarea>
                        </div>
                        <button onClick={(e) => {
                            submit(e, this.state.currentSymbol, this.state.currentText);
                            this.clearState(this.state.currentSymbol)
                        }}>Add Entry</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default NewEntry;