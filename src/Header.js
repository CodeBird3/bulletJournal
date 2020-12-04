import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-awesome-reveal";

class Header extends Component {
    render() { 
        return (
            <header className="header">
                {/* animation idea: have heading drop in */}
                <div className="wrapper">
                    <Slide direction="down" duration="2500">
                        <h1>Welcome to your Digital BuJo!</h1>
                    </Slide>
                    {/* TODO stretch: "Click here to get started!" when starting to use routing; turn current Get Started button into an Information button */}
                    <Slide direction="up" duration="1500">
                        <label htmlFor="getStarted">Get Started!</label>
                    </Slide>
                    <input type="checkbox" id="getStarted"/>
                    {/* instructions for how the BuJo works */}
                    <section className="howToUse">
                        <h2>How it Works:</h2>
                        <ol>
                            <li>Just like any other journal, let the Digital BuJo store your thoughts!</li>
                            <li>In the "New Entry" section below, choose the symbol that best reflects the entry (e.g. is the entry a task that you need to complete, or an appointment you need to remember?) and add text to your entry.</li>
                            <li>Click "Add Entry" and watch your new journal entry appear on the page below!</li>
                            <li>To edit your entries:</li>
                            <ol className="infoSublevel">
                                <li>If you made a typo, or need to add something the entry, click on <FontAwesomeIcon icon="pencil-alt" /> to edit.</li>
                                <li>If you have completed the task, check it off by clicking on <FontAwesomeIcon icon="check" />.</li>
                                <li>No longer have that appointment to go to? Click on <FontAwesomeIcon icon="ban" /> to show that it's been cancelled.</li>
                                <li>If you want to remove the entry from your journal, click on <FontAwesomeIcon icon="times" />. WARNING: This will permanently delete the entry.</li>
                            </ol>
                        </ol>
                        <label htmlFor="getStarted" className="close">Close</label>
                    </section>
                </div>
            </header>
        )
    }
}

export default Header;