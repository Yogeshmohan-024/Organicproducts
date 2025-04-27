import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Terms and Conditions</h1>
            <p>
                Welcome to our website! By accessing and using this site, you agree to the following terms and conditions...
                (You can add detailed terms and conditions content here.)
            </p>
            <ol>
                <li><strong>Usage:</strong> You must not misuse the website...</li>
                <li><strong>Privacy:</strong> All user data will be handled in accordance...</li>
                <li><strong>Liability:</strong> We are not responsible for...</li>
            </ol>
            <p>For more details, contact us at support@example.com.</p>
        </div>
    );
};

export default TermsAndConditions;
