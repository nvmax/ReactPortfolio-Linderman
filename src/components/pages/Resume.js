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
        <div className="resumecontainer">
            <div className="resume">
                    <div className="row">
                        <div className="col-md-7">
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
                        </div>
                        <div className="col-md-3">
                            <div className="col-md">
                                <h2>Contact</h2>
                                {userdetails.map((userdetail, index) => {
                                    return (
                                        <div className="userdetail" key={index}>
                                            <h3>
                                                {userdetail.Name}
                                            </h3>
                                            <ul>
                                                <p>
                                                    {userdetail.email}
                                                </p>
                                                <p>
                                                    {userdetail.phone}
                                                </p>
                                                <p>
                                                    {userdetail.address}
                                                </p>
                                                <p>
                                                    {userdetail.city}, {userdetail.state}
                                                </p>
                                            </ul>
                                        </div>
                                    );
                                })}
                                <hr />
                                <h2>Skills</h2>
                                {skills.map((skilldetail, index) => {
                                    return (
                                        <div className="skill" key={index}>
                                            <ul>
                                                <li>
                                                    <p>
                                                        {skilldetail['details:']}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    );
                                })}
                                <hr />
                                <h2>Education</h2>
                                {education.map((educationDetail, index) => {
                                    return (
                                        <div className="education" key={index}>
                                            <h5>
                                                {educationDetail.Date}
                                            </h5>
                                            <p>
                                                {educationDetail.Name}
                                            </p>
                                            <p>
                                                {educationDetail.city}
                                                <br />
                                                <br />
                                                <li>
                                                    {educationDetail.class}
                                                </li>
                                                <li>
                                                    {educationDetail.degree}
                                                </li>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Resume;