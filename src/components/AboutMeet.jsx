import React, { Component} from "react"
import { Card } from "flowbite-react";
import propTyypes from "prop-types";    

class AboutMeet extends Component {
    constructor() {
        super();
        this.state = {
            text: "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.",
            sosmedText: "@JakartaJS and we use the hashtag #jakartajs",
        }
    }
    render() {
        return (
            <section className="mx-12 my-10">
                <h3 className="font-extrabold text-2xl">About Meeting</h3>
                <Card href="#About">
                    <p>{this.state.text}</p>
                    <p>Twitter: {this.state.sosmedText}</p>
                </Card>
            </section>
        )
    }
}

AboutMeet.propTypes = {
    text: propTyypes.string,
    sosmedText: propTyypes.string
}

export default AboutMeet;