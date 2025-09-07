function Home() {
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
        Welcome to Our Company
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#333', 
        lineHeight: '1.6', 
        maxWidth: '600px', 
        margin: '0 auto' 
      }}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;
