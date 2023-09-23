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
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MouseIcon from '@mui/icons-material/Mouse';
import RadioFilter from "./theme/RadioFilter";
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ContrastIcon from '@mui/icons-material/Contrast';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import CampaignIcon from '@mui/icons-material/Campaign';


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

async function actionHandler(trigger) {
    const tabInfo = await getCurrentTab();
    const [{id: tabId}] = tabInfo;
    console.log(tabId)
    // @ts-ignore
    browser.tabs.sendMessage(tabId, {
        trigger: trigger
    });
}
function App() {
    const iconStyles = {
        fontSize: '60px', // Adjust the fontSize of the MouseIcon to make it bigger
    };
  return (
    <div className = "info">
        <div className= "buttons">
            <IconButton className="circle-button" color="primary">
                <MouseIcon fontSize="large" style={iconStyles}
               onClick={() => actionHandler("mouseKeyboard")}
                />
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <FormatSizeIcon fontSize="large" style={iconStyles} />
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <ContrastIcon fontSize="large" style={iconStyles}/>
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <ChromeReaderModeIcon fontSize="large" style={iconStyles}/>
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <CampaignIcon fontSize="large" style={iconStyles} />
            </IconButton>
        </div>
    </div>
  );
}
export default App;
