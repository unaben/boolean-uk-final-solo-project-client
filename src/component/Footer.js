function Footer() {
  const year = new Date().getFullYear();
  const footerStyle = {
    // backgroundColor: "royalblue",
    color: "wheat",
    marginTop: "10px",
    position:"fixed",    
    bottom:"0",
    left:"0",
    right:"0",
    height:"60px",
    textAlign:"center",   
  };
  return (
    <footer style={footerStyle}>
      <p className="footer-pragh" >Copyright &copy; {year} </p>
    </footer>
  );
}
export default Footer;
