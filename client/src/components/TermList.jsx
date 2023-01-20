import React from 'react';
import Term from "./Term";

const TermList = ({terms}) => {
    let uqId = 0;
    return (
        <div>
            {terms.map(term =>
                <Term term={term} key={uqId++}/>
            )}
        </div>
    );
};

export default TermList;