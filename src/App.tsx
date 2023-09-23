import {useState} from "react";
import {
    Alert,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid, Input,
    TextField,
    Typography
} from "@mui/material";
import "./index.css"
import $ from 'jquery';

import RadioFilter from "./theme/RadioFilter";

const colors = {
    aa : "#0077FF",
    bb : "#4267B2",
    cc : "#1DA1F2"
}


function getCurrentTab() {
    // @ts-ignore
    return browser.tabs.query({ currentWindow: true, active: true });
}

async function foo() {
    const tabInfo = await getCurrentTab();
    const [{ id: tabId }] = tabInfo;
    console.log(tabId)
    // @ts-ignore
    browser.tabs.sendMessage(tabId, {

    });

}

function App() {

  return (
    <div className = "info">

    </div>
  );
}
export default App;
