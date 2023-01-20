import React from "react";
import {Link, Typography} from "@mui/material";

const Term = (props) => {

    return ( 
        <div className="post">
            <Typography className="post__content" variant="h4" gutterBottom color="primary">{props.term.title}</Typography>
            <div className="post-description">
                <Typography className="post__content" variant="h10" gutterBottom color="primary">{props.term.description}</Typography>
                <Link href={props.term.url} color="#002984">{props.term.url}</Link>
            </div>
        </div>
    )
}

export default Term;
