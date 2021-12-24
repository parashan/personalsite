import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import TopButton from "./TopbarButton";
export default function Topbar({menuOpen, setMenuOpen}) {
    
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Hans Patrick Paras</a>
                    <div className="itemContainer">
                        <TopButton 
                            variant="outlined"
                            color="inherit"
                            startIcon={<PersonIcon/>}
                            href="#contact"
                            text = "Contact Info"
                        />
                        <TopButton 
                            variant="outlined"
                            color="inherit"
                            startIcon={<GitHubIcon/>}
                            href="#contact"
                            text = "Github"
                        />
                    </div>
                    {/* <a href="#portfolio">Portfolio</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a> */}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
