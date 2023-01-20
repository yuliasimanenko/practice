import './App.css';
import React, {useState, useEffect, useMemo} from "react";
import axios from "axios";
import TermList from "./components/TermList";
import {Box, Button, Typography} from "@mui/material";
import { Input } from '@mui/material';



function App() {

    const [terms, setTerms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isList, setIsList] = useState(false);
    const [isMap, setIsMap] = useState(false);

    const getSearchedTerms = useMemo(() => {
        return terms.filter(term => term.title.includes(searchQuery))
    }, [searchQuery, terms])


    async function fetchTerms() {
        setIsMap(false);
        const response = await axios.get('http://127.0.0.1:4000/terms');
        setTerms(response.data);
        setIsList(true)
    }

    function fetchMap() {
        setIsList(false);
        setIsMap(true);
    }

    useEffect(() => {
        fetchTerms();
    }, [])

    return (
        <div className="App">

            <div className="post-list">
                <div className="menu">
                    <Typography variant="h3" gutterBottom color="primary">Terminology</Typography>

                    <Box sx={{display: 'inline',fontWeight: 'bold', mr: 10, fontSize: 14, width: 3/4}}>
                        <Input
                            type="text"
                            placeholder="Search term"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}

                        />
                    </Box>

                    <div style={{marginTop:'10px', display:"flex"}}>
                        <Button variant="contained" color="success" onClick={fetchTerms}>Get Terms</Button>
                        <div style={{width:'30px', height:'10px'}}></div>
                        <Button variant="contained" color="success" onClick={fetchMap}>Get Map</Button>
                    </div>
                </div>

                {terms.length && isList
                    ? <TermList terms={getSearchedTerms}/>
                    : <Typography variant="h4" gutterBottom color="primary"></Typography>
                }
                {isMap
                    ? <img src="http://localhost:4000/map/" alt="Mind Map"/>
                    : <Typography variant="h4" gutterBottom color="primary"></Typography>
                }
            </div>
        </div>
    );
}

export default App;
