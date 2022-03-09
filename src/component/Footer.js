import React from "react";
function Footer() {
  const year = new Date().getFullYear();
  const footerStyle = {
    color: "wheat",
    padding: "10px",
    textAlign: "center",
  };
  return (
    <section style={footerStyle}>
      <div>
        <h3 className="footer-pragh">Copyright &copy;</h3>
        <span className="year">{year}</span>
      </div>
    </section>
  );
}
export default Footer;
