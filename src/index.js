import React from "react";


import ReactDom from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const name = "khushboo";
const img1 ="https://picsum.photos/200/300";

const img2 ="https://picsum.photos/250/300";
const img3 ="https://picsum.photos/330/350";
const img4 ="https://picsum.photos/300/200";
const img5 ="https://picsum.photos/400/350";
const img6 ="https://picsum.photos/300/300";
const links = "https://khushboogupta49.github.io/FOOD-BLOGgithub.io/#home"
ReactDom.render(
<>

<h1 className ="heading" > Hi I'm {name}</h1>

<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <a className="navbar-brand fs-3 ms-auto" href="#">Navbar</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div className="navbar-nav ms-auto" >
    
      <a className="nav-link active mx-3" href="#">Home </a>
      <a className="nav-link mx-3 " href="#">Features</a>
      <a className="nav-link mx-3 " href="#">Pricing</a>
      <a className="nav-link disabled mx-3 ">Disabled</a>
    </div>
  </div>
</nav>

<div class="container">
  <div class="row">
    <div class="col-sm"> <div class="card" >
  <img src="https://picsum.photos/200/300" class="card-img-top" alt=""
  height="100px"
  />

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
    <div class="col-sm"> <div class="card" >
  <img src="https://picsum.photos/201/302" class="card-img-top" alt=""

  height="100px"
  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    
    
    </div>
    <div class="col-sm"> <div class="card" >
  <img src="https://picsum.photos/202/301" class="card-img-top" alt=""
  height="100px"
  
  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
    
    
    
    
    </div>
  </div>
</div>






<div className="img_div">



<img src={img1} alt="randomImages" />
<img src={img2} alt="randomImages" />

<a href ={links} target = "_khushboo" >
<img src={img3} alt="randomImages" />
</a>

<img src={img4} alt="randomImages" />
<img src={img5} alt="randomImages" />
<img src={img6} alt="randomImages" />
</div>

</>,

document.getElementById("root")
);









/* 
/* //
//     console.log(props)
// return(
//     <>
//     <div className="cards">
    
//     <div className="card">
    
//     <img src={props.imgsrc} alt="myPic" className=" card_img" />
    
//     <div className="card_info" >
//         <span className="card_category">
//          {props.title}    </span>
    
//     <h3 className="card_title">
//         {props.sname}
//     </h3>
    
//     <a href={props.link}  >
    
//         <button> watch now</button>
    
//     </a>
    
//     </div>
//     </div>
    
//     </div>
    
    
//     </>,  

// )

// 


/* <>
<h1 className="heading_style"> List of 5 top netflix series</h1>

<Card imgsrc="https://picsum.photos/100/100"

title ="A Netflix Orignal Series"
sname ="Dark"
link = "https://picsum.photos/40/40"
/>
<Card/>
<Card/>

</>, */ 






















 
