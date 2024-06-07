import React from 'react'
import burger from "../assets/cajunburger.png"

export default function Newpage() {
  return (
    <div>
   <div style={{
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius : '5px',
    height: '60px',
    width : '100%',
    textAlign: 'center',
    paddingBottom:'10px',
   }}>
    <p> Checkout</p>
   <p style={{color:'grey',fontSize:'1em'}}>
    Popeyes JP Nagar
   </p>
   </div>

   <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',padding:'1.5em' }}>

   <div style={{display : 'flex', flexDirection:'row', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',padding:'1em', width:'96%',marginBottom:'12px',height:'80px',marginLeft:'auto',marginRight:'auto',borderRadius : '5px',}}>
     
   <img src = {burger} style={{height:'70px',width:'7%',paddingRight:'2em'}}>
     </img>

     <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
     <div>
      Caribbean Spicy zinger burger
     </div>

     <div  style={{display:'flex',flexDirection:'row'}}>

     <div>
     319/- Rs Only
     </div>

     <div style={{marginLeft : '200px',height:'20px',widht:'50px',border : '5px solid orange'}}>
       - 1 +
     </div>
      
     </div>
     </div>


   </div>

   <div style={{display : 'flex', flexDirection:'row', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',padding:'1em', width:'96%',marginBottom:'12px',height:'80px',marginLeft:'auto',marginRight:'auto',borderRadius : '5px',}}>
     
   <img src = {burger} style={{height:'70px',width:'7%',paddingRight:'2em'}}>
     </img>

     <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
     <div>
      Caribbean Spicy zinger burger
     </div>

     <div>
      319/- Rs Only
     </div>
     </div>
   </div>

   </div>
   
    </div>
  )
}
