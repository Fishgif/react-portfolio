// import { Mail } from "@mui/icons-material"
import "./topbar.scss"
// import {Person, Mail} from "@mui/icons-material"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}> 
      <div className="wrap">
          <div className="left">
                <a href="#intro" className="logo">mjf.</a>
                <div className="itemContainer">
                <span class="material-icons">phone</span>
                  <span>+44123456789</span>
                </div>
                <div className="itemContainer">

                <span class="material-icons">mail</span> 
                  
                  
                    
                  <span>marc@mjf.com</span>
                 
                </div>

          </div>
         
          <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
          


      </div>
    
    </div>
  )
}
