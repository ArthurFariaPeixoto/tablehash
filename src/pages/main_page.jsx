import "../style/App.css"

import React from "react";
import {Grid, Button} from "@mui/material";

import {MakeTable} from "../services/hash";

const MainPage = () => {
    const [string, setString] = React.useState("");
    const [hash, setHash] = React.useState("");

    function handleChange(event) {
        setString(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const hashCode = MakeTable(string);
        setHash(hashCode);
    }

    return (
        <>
        <Grid className="App">
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "5px"}}>
                    String:
                    <input type="text" value={string} onChange={handleChange} />
                </label>
                <Button type="submit" variant="contained">Generate Hash</Button>
            </form>
            <p>Hash: {hash}</p>
        </Grid>
        </>
    );
}


export default MainPage;