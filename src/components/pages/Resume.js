import React, { Component } from 'react';
import accomplishments from './resume/accomplishments.json';
import education from './resume/education.json';
import skills from './resume/skills.json';
import userdetails from './resume/userdetails.json';
import workhistory from './resume/workhistory.json';
import summary from './resume/summary.json';

class Resume extends Component {
    render() {
        return (
            // 2 columns
            <div className="resume">
                <div className="row">
                    <div className="col-md">
                        <h2>Professional Summary</h2>
                        {summary.map((summaryDetail, index) => {
                            return (
                                <div className="summary" key={index}>
                                    <p>{summaryDetail.Detail}</p>
                                </div>
                            );
                        })}
                        <hr />
                        <h2>Accomplishments</h2>
                        {accomplishments.map((accomplishmentDetail, index) => {
                            return (
                                <div className="accomplishment" key={index}>
                                    <ul>
                                        <li>
                                            <p>
                                                {accomplishmentDetail.Detail}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            );
                        })}
                        {/* line break  */}
                        <hr />
                        <h2>Work History</h2>
                        {workhistory.map((workhistoryDetail, index) => {
                            return (
                                <div className="workhistory" key={index}>
                                    <h3>
                                        {workhistoryDetail.Company}
                                    </h3>
                                        {workhistoryDetail.Location}
                                    <ul>
                                        {workhistoryDetail.Date}
                                    </ul>
                                    <ul>
                                        {/* return workhistoryDetails.details */}
                                        {workhistoryDetail.Details.map((Details, index) => {
                                            return (
                                                <li key={index}>
                                                    <p>
                                                        {Details}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                        
                                    </ul>

                                </div>
                            );
                        })}
                        <div className="col-md">
                            <h2>Experience</h2>
                            <ul>
                                <li>Technical Support</li>
                                <li>Technical Support Manager</li>
                                <li>Technical Support Manager</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Resume;