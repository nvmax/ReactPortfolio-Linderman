import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact(props) {
    return (
        <div className="contactcontainer">
            <div className="row">
                <div className="col-md-3">
                    
                </div>
                <div className="col-md-6">
                    <form className="contactform">
                        <div className="form-group">
                            <h1 className="Port-index">Contact Me:</h1>
                            {/* javascript to handle mouse over custom to alert user field is required */}
                            <input type="text" className="form-control" title="This field is required" id="name" placeholder="Name" required />
                            <input type="email" className="form-control" title="This field is required" id="email" placeholder="Email Address" required />
                            <textarea className="form-control" id="message" rows="3" title="This field is required" placeholder="Please Leave me a Message." required></textarea>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-3">
                <div className="icons">
                        <FontAwesomeIcon icon={['fab', 'fa-react']} />
                        <FontAwesomeIcon icon={['fab', 'fa-html5']} />
                        <FontAwesomeIcon icon={['fab', 'fa-css3']} />
                        <FontAwesomeIcon icon={['fab', 'fa-js']} />
                        <FontAwesomeIcon icon={['fab', 'fa-node']} />
                        <FontAwesomeIcon icon={['fab', 'fa-github']} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;