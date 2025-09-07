function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "20px",
        fontSize: "14px"
      }}
    >
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p>Follow us on: 
        <a href="https://twitter.com" style={{ color: "#1DA1F2", margin: "0 5px" }}>Twitter</a> | 
        <a href="https://facebook.com" style={{ color: "#1877F2", margin: "0 5px" }}>Facebook</a>
      </p>
      <img
        src="/vite.svg"
        alt="Company Logo"
        style={{ width: "50px", marginTop: "10px" }}
      />
    </footer>
  );
}

export default Footer;
