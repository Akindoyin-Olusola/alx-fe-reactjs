function About() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      backgroundColor: '#f0f8ff', 
      minHeight: '80vh' 
    }}>
      <h1 style={{ 
        color: '#004080', 
        fontSize: '3rem', 
        marginBottom: '20px' 
      }}>
        About Us
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#333', 
        lineHeight: '1.6', 
        maxWidth: '700px', 
        margin: '0 auto' 
      }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
