import React from 'react';
import market from "../images/market.jpg";
import Cards  from './Cards';
import Footer from './Footer';

const Home = () =>{
  return (
    <div id="veg">
      <div className='veggies'>
       
      <img src= {market}  height="470vh%" width="100%" />
      <div className='text'>      
      <p id="text">Fresh Vegetables and Fruits from your trusted Suppliers</p>
      <button>Order Now</button>

     </div>


      </div>
      <div></div>

    

     <div className='orderb'>
     
     </div>

      <Cards/>
     
      <div>
      <Footer/>
      </div>
    </div>
    
    
    
    
  );
}
export default Home;





























// import React from "react";
// import "./home.css";
// import vegetables from "./imgfruits/vegetables.jpg"
// import Container from "react-bootstrap/Container";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, ModalFooter } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Nav from "./Nav";

// function home() {
//   return (
//     <div>
//       <div>
//         <nav/>
//         {/* <Nav style={{ backgroundColor: "#2FC85A" }} variant="#2FC85A">
//           <Container>
//             <Nav.Brand href="/">Navbar</Nav.Brand>
//             <Nav className="me-auto" style={{ marginLeft: "70%" }}>
//               <Nav.Link href="/" style={{ color: "white" }}>
//                 Home
//               </Nav.Link>
//               <Nav.Link href="/Fruits" style={{ color: "white" }}>
//                 Fruits
//               </Nav.Link>
//               <Nav.Link href="/Vegetables" style={{ color: "white" }}>
//                 Vegetables
//               </Nav.Link>
//             </Nav>
//           </Container>
//         </Nav> */}
//       </div>
//       <div className="Container">
//         <img src={vegetables} alt="veg-img" width="100%" />
//         <h3>Fresh Vegetables and Fruits from your trusted Suppliers</h3>

//         <Button style={{ backgroundColor: "#2FC85A" }}>Order Now!</Button>
//       </div>
//       <br />
//       <br />

//       <div>
//         <Container style={{ padding: "80px" }}>
//           <Row>
//             <Col>
//               <Card>
//                 <Card.Body
//                   className="card"
//                   style={{ backgroundColor: "#2FC85A" }}
//                 >
//                   <svg
//                     style={{ marginLeft: "17%" }}
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="200"
//                     height="150"
//                     fill="currentColor"
//                     class="bi bi-cart-check-fill"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
//                   </svg>
//                   <br />
//                   <br />
//                   <Button>Make your Order</Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card>
//                 <Card.Body
//                   className="card"
//                   style={{ backgroundColor: "#2FC85A" }}
//                 >
//                   <svg
//                     style={{ marginLeft: "17%" }}
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="200"
//                     height="150"
//                     fill="currentColor"
//                     class="bi bi-cash-coin"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
//                     />
//                     <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
//                     <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
//                     <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
//                   </svg>
//                   <br />
//                   <br />
//                   <Button>Make Payments</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col>
//               <Card>
//                 <Card.Body
//                   className="card"
//                   style={{ backgroundColor: "#2FC85A" }}
//                 >
//                   <svg
//                     style={{ marginLeft: "17%" }}
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="200"
//                     height="150"
//                     fill="currentColor"
//                     class="bi bi-truck"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
//                   </svg>
//                   <br />
//                   <br />
//                   <Button>Get Fast Delivery</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <ModalFooter>
//         <div className="footer">
//           <p>Customer Care</p>
//           <p>About Us</p>
//           <p>New Products</p>
//           <p>Contact Us</p>
//         </div>
//       </ModalFooter>
//     </div>
//   );
// }
// export default home;
