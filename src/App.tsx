
import "./index.css"
import IconButton from '@mui/material/IconButton';
import MouseIcon from '@mui/icons-material/Mouse';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ContrastIcon from '@mui/icons-material/Contrast';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import CampaignIcon from '@mui/icons-material/Campaign';


function getCurrentTab() {
    // @ts-ignore
    return browser.tabs.query({ currentWindow: true, active: true });
}

async function callAction(trigger) {
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
        fontSize: '60px',
    };
  return (
    <div className = "info">
        <div className= "buttons">
            <IconButton className="circle-button" color="primary">
                <MouseIcon fontSize="large" style={iconStyles}
                onClick={() => callAction('mouse')}
                />
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <FormatSizeIcon fontSize="large" style={iconStyles}
                                onClick={() => callAction('fontSizer')}
                />
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <ContrastIcon fontSize="large" style={iconStyles}
                          onClick={() => callAction('contrast')}
                />
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <ChromeReaderModeIcon fontSize="large" style={iconStyles}
                  onClick={() => callAction('optimizer')}
                />
            </IconButton>
            <IconButton className="circle-button" color="primary">
                <CampaignIcon fontSize="large" style={iconStyles}
                  onClick={() => callAction('speaker')}
                />
            </IconButton>
        </div>
    </div>
  );
}
export default App;
