import "./nabar.css"
import { VscChevronDown } from "react-icons/vsc";



function Navbar()
{

        let flag = false;
      let flag1 = false;
      let flag2 = false;
      let flag3 = false;
function solutions(event)
{
 
  console.log("solutions1")

  console.log(event,"event")
   if(flag){

    console.log("solutions",flag)
 document.querySelector(".active2").style.display="none";
 flag=false;
   }
else
{
      document.querySelector(".active2").style.display="block";
          document.querySelector(".active3").style.display="none";
             document.querySelector(".active4").style.display="none";
     document.querySelector(".active5").style.display="none";
     flag=true;
    flag1 = false;
       flag2 = false;
      flag3 = false;
}
   

}

function industry()
{
 

  
   if(flag1){
 document.querySelector(".active3").style.display="none";
 flag1=false;
   }
else
{
        document.querySelector(".active2").style.display="none";
          document.querySelector(".active3").style.display="block";
             document.querySelector(".active4").style.display="none";
     document.querySelector(".active5").style.display="none";
      flag=false;
      flag1 = true;
       flag2 = false;
       flag3 = false;
}
   

}

function about()
{
 

  
   if(flag2){
 document.querySelector(".active4").style.display="none";
 flag2=false;
   }
else
{
     document.querySelector(".active2").style.display="none";
          document.querySelector(".active3").style.display="none";
             document.querySelector(".active4").style.display="block";
     document.querySelector(".active5").style.display="none";
 flag=false;
      flag1 = false;
       flag2 = true;
       flag3 = false;
}
   

}


window.onclick = function(event) {
  // document.querySelector(".active2").style.display="none";
  //         document.querySelector(".active3").style.display="none";
  //            document.querySelector(".active4").style.display="none";
  //    document.querySelector(".active5").style.display="none";
   
     console.log(event.target)
     

       let s1= document.querySelector(".active2").style;

     

       if(s1.display==="block" && event.target.name!=="solution"){
             
         console.log("solutions1")
       console.log(s1.display,"s");
           s1.display="none";
           flag=false;

       }

   
}


window.onclick = function(event) {
  // document.querySelector(".active2").style.display="none";
  //         document.querySelector(".active3").style.display="none";
  //            document.querySelector(".active4").style.display="none";
  //    document.querySelector(".active5").style.display="none";
   
     console.log(event.target)
     

       let s1= document.querySelector(".active3").style;

     

       if(s1.display==="block" && event.target.name!=="solution"){
             
         console.log("solutions1")
       console.log(s1.display,"s");
           s1.display="none";
           flag=false;

       }

   
}

window.onclick = function(event) {
  // document.querySelector(".active2").style.display="none";
  //         document.querySelector(".active3").style.display="none";
  //            document.querySelector(".active4").style.display="none";
  //    document.querySelector(".active5").style.display="none";
   
     console.log(event.target)
     

       let s1= document.querySelector(".active4").style;

     

       if(s1.display==="block" && event.target.name!=="solution"){
             
         console.log("solutions1")
       console.log(s1.display,"s");
           s1.display="none";
           flag=false;

       }

   
}
window.onclick = function(event) {
  // document.querySelector(".active2").style.display="none";
  //         document.querySelector(".active3").style.display="none";
  //            document.querySelector(".active4").style.display="none";
  //    document.querySelector(".active5").style.display="none";
   
     console.log(event.target)
     

       let s1= document.querySelector(".active5").style;

     

       if(s1.display==="block" && event.target.name!=="solution"){
             
         console.log("solutions1")
       console.log(s1.display,"s");
           s1.display="none";
           flag=false;

       }

   
}
function customer()
{
 

  
   if(flag3){
 document.querySelector(".active5").style.display="none";
 flag3=false;
   }
else
{
       document.querySelector(".active2").style.display="none";
          document.querySelector(".active3").style.display="none";
             document.querySelector(".active4").style.display="none";
     document.querySelector(".active5").style.display="block";
   
     
      flag=false;
      flag1 = false;
       flag2 = false;
       flag3 = true;
}
   

}


    return (<div>
        <div class="topnav">

  <a class="armacell"  href="#arma cell" >armacell</a>
  <a  class="contact" href="#contact">CONTACT US</a>
  <a class="english"  href="#english">ENGLISH</a>
</div>
<div class="topnav1" id="myTopnav">
  <a href="#home" class="active"><img className="image" src="https://sarvamsafety.com/image/catalog/logo1.png" alt=""></img></a>
   <div class="dropdown">
    <button onClick={solutions} name="solution" class="dropbtn">SOLUTIONS<VscChevronDown id="icon" style={{marginLeft:175 ,marginTop:-12}}/>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    </div>
  </div> 
    <div class="dropdown">
    <button onClick={industry} name="solution" class="dropbtn">INDUSTRIES<VscChevronDown id="icon" style={{marginLeft:180,marginTop:-12}}/>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    </div>
  </div> 
  <div class="dropdown">
    <button onClick={about}  name="solution"  class="dropbtn">ABOUT <VscChevronDown id="icon" style={{marginLeft:155,marginTop:-12}}/>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    </div>
  </div> 
  <div class="dropdown">
    <button onClick={customer} name="solution"  class="dropbtn">CUSTOMER PROJECTS<VscChevronDown id="icon" style={{marginLeft:225,marginTop:-12}}/>
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    </div>
  </div> 
  
</div>
<div className="full">
<div class="topnav2" id="myTopnav"   >
    <div class="active2"   >
  <button class="dropbtn">CONDENSATION CONTROL </button>
 <button class="dropbtn">ACOUSTIC CONTROL</button>
  <button class="dropbtn">SUPPORT & EXPERTISE</button>
     <button class="dropbtn"  >THERMAL PERFORMANCE</button>
    <button class="dropbtn" >FIRE SAFETY</button>

      </div>
</div>
<div class="topnav3" id="myTopnav"   >
    <div class="active3"   >
  <button class="dropbtn">HEALTH CARE </button>
 <button class="dropbtn">WIND ENERGY</button>
  <button class="dropbtn">DATA CENTRE</button>
     <button class="dropbtn"  >CUSTOMER PROJECTS</button>

      </div>
</div>
<div class="topnav4" id="myTopnav">
     <div class="active4">
           <button class="dropbtn">ARMACELL</button>
   <button class="dropbtn">BEYOND BETTER</button>
     <button class="dropbtn">QUALITY & TESTING</button>
     
    </div> 
</div>
<div class="topnav5" id="myTopnav">
      <div class="active5">
 <button class="dropbtn" >LUNARK HABITAT</button>
  <button class="dropbtn" >RUSSIAN ORTHODOX CATHEDRAL</button>
   <button class="dropbtn" >SENGKARG GENERAL AND<div>COMMUNITY HOSPITALS</div></button>
           <button class="dropbtn">VIRGINIA DATA CENTRE</button>
     </div>
     
</div>
</div>
</div>
   )
}

export default Navbar