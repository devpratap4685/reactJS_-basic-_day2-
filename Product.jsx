import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
    let oldPrice=["1,233","1,234","1,456","5,677"];
    let newPrice=["1,256","1,678","7,890","3,456"];
    let  Description=[["8,000 DPI","intuitive"],["wireless","intuitive"],["wireless","designed for iPad Pro"],["wireless","intuitive"]];
    console.log(title);
 return (
        <div className="Product" >
           <h4>{title}</h4>
           <p>{Description[idx][0]}</p>
           <p>{Description[idx][1]}</p>
           <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
export default Product;