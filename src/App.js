import { Component } from 'react';
import './sass/App.scss';

// import firebase
import firebase from "./firebase.js";

// import Font Awesome and initialize library
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle as faCircleSolid, faCaretUp, faMinus, faAsterisk, faPencilAlt, faCheck, faBan, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";

// components
import Header from "./Header.js";
import NewEntry from "./NewEntry.js";
import Entry from "./Entry.js";

// store Font Awesome icons in the imported library
library.add(faCircleSolid, faCaretUp, faMinus, faAsterisk, faCircleRegular, faPencilAlt, faCheck, faBan, faTimes);



class App extends Component {
  constructor() {
    super()
    this.state = {
      // keep track of journal entries
      // TODO add a completed (boolean) and cancelled (boolean) to each object in the database and update them when the respective buttons have been clicked
      entries: [],
      // after turning the current symbol and text into an object, store it in state
      currentEntry: {}
    }
  }

  componentDidMount() {
    // make a reference to the firebase database
      // REVIEW when setting up multiple users
    const dbRef = firebase.database().ref()

    // retrieve data from the database and update the entries state to hold that data
    dbRef.on("value", (data) => {
      const firebaseJournalObj = data.val()

      // transform the firebase object into an array
      let journalEntries = []
      for (let entryKey in firebaseJournalObj) {
        const entryVal = firebaseJournalObj[entryKey]
        const formattedJournal = {
          id: entryKey,
          symbol: entryVal.symbol,
          entry: entryVal.entry
        }
        journalEntries.unshift(formattedJournal)
      }

      // update state
      this.setState({
        entries: journalEntries
      })
    })
  }

  // add a new entry to the firebase database so it can be rendered on the page
  addEntry = (e, symbol, entry) => {
    // prevent default behaviour
    e.preventDefault()

    // turn the chosen symbol and text into a new object
    const newEntryObj = {
      symbol: symbol,
      entry: entry
    }

    // make a reference to the firebase database
    const dbRef = firebase.database().ref()

    // add the new entry object to the firebase database
    dbRef.push(newEntryObj)
  }

  // when the "Confirm Changes" button in the EditEntry form is clicked update the firebase database and state, then render the new data onto the page
  submitChanges = (e, newText, id) => {
    // prevent default behaviour
    e.preventDefault()

    // firebase database reference
    const dbRef = firebase.database().ref()

    // update the specific entry's text
    dbRef.child(id).update({
      entry: newText
    })
  }

  // allow the user to delete entries that they no longer want to keep
  deleteEntry = (entryId) => {
    // remove the entry from the firebase database
    const dbRef = firebase.database().ref()
    dbRef.child(entryId).remove()
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          {/* use props to pass methods to the NewEntry class component */}
          <NewEntry submit={this.addEntry} />
          <section className="bujoEntries wrapper">
            {/* this is where entries stored in the firebase database will be populated */}
            <ul>
              {/* TODO: ability to edit, complete/cancel, and remove entries */}
              {
                this.state.entries.map((entry) => {
                  return (
                    // NOTE every list item has been given a unique key in the Entry component
                    <Entry
                      id={entry.id}
                      symbol={entry.symbol}
                      text={entry.entry}
                      submitChanges={this.submitChanges}
                      deleteEntry={this.deleteEntry}
                    />
                  )
                })
              }
            </ul>
          </section>
        </main>

        <footer>Created at <a href="https://junocollege.com/">Juno College</a></footer>
      </div>
    );
  }
}

export default App;
