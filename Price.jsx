export default function Price({oldPrice ,newPrice}){
    let oldPriceStyle = {
        textDecorationLine:"Line-through",

    };
   let newPriceStyle = {
    fontWeight: "bold",

};
let styles={
  backgroundColor:"red",
  height:"30px",
  widht:"200px",
  borderBottomLeftRadius:"14px",
  borderBottomRightRadius:"14px",
};
    

   return(
    <div style={styles}>
        <span style={oldPriceStyle}>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span  style={newPriceStyle}>{newPrice}</span>
    </div>
   );
   
}