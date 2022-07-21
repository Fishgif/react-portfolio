// import { Mail } from "@mui/icons-material"
import "./topbar.scss"
// import {Person, Mail} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar active">  
      <div className="wrap">
          <div className="left">
                <a href="#intro" className="logo">mjf.</a>
                <div className="itemContainer">
          
                  <span>+44123456789</span>
                </div>
                <div className="itemContainer">

                <span class="material-icons">mail</span> 
                  {/* <Mail classname="icon"/> */}
                  <span>marc@mjf.com</span>
                  
                </div>

          </div>
         
          <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
          


      </div>
    
    </div>
  )
}
