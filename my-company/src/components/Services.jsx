function Services() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      backgroundColor: '#f9f9f9', 
      minHeight: '80vh' 
    }}>
      <h1 style={{ 
        color: '#004080', 
        fontSize: '3rem', 
        marginBottom: '20px' 
      }}>
        Our Services
      </h1>
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        fontSize: '1.2rem', 
        color: '#333', 
        lineHeight: '2' 
      }}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
