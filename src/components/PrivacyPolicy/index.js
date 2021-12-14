import React from "react";
import NavigationSidebar from "../NavigationSidebar";

const PrivacyPolicy = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 m-1">
                <NavigationSidebar active='privacy-policy'/>
            </div>
            <div className="col-9"
                 style={{"position": "relative"}}>
                <h1 className="text-primary">Privacy Policy</h1>
                <br/>
                <h5 className="text-primary">What Data Is Collected:</h5>
                <ul>
                    <li>Collecting Login Credentials</li>
                    <li>Collecting Profile Preferences</li>
                    <li>Search Data - What users tend to search for and comment on</li>
                    <li>Track which cards are clicked on most often</li>
                    <li>Track which cards are commented most frequently</li>
                    <li>Track how long users spend looking at particular cards or profiles.</li>
                    <li>Collect data from comment bodies.</li>
                    <li>Track which pieces of content/profiles are reported</li>
                </ul>
                <br/>
                <h5>Why We Collect this data:</h5>
                <ul>
                    <li>We collect login credentials to ensure that users can login with privileged access.</li>
                    <li>We collect profile preferences, search data, and information about which cards are clicked on/commented on/spent a lot of time on. We do this in order to fuel our website design, allowing us to prioritize specific cards or trends to make our website more accessible or appealing. This also helps us follow along with the community and have the forum keep up with the more popular conceptions concerning all of our favorite cards!</li>
                    <li>We collect data concerning comment bodies to help us with the moderation of the forum. We need to be able to see what is being posted and keep track of it to evaluate if we need to take action on some breach of conduct.</li>
                    <li>We track which comments and profiles are reported in order to moderate specific content, but also to help potentially fuel auto-moderation practices in the future.</li>
                </ul>
                <br/>
                <h5>How We Plan on Using the Data:</h5>
                <ul>
                    <li>Your data will not be made public, nor put up for sale.</li>
                    <li>The cards and IP that our website deals with and makes frequent use of is copyrighted under the trademark of Wizards of the Coast and thus can't be monetized by us.</li>
                    <li>Data on analytics that is collected is done so without the use of personal information or identifiers, allowing anonymity and an inability to target our users.</li>
                </ul>
            </div>
        </div>
    );
};
export default PrivacyPolicy;