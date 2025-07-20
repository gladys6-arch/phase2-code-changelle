function Progress({ savedAmount, targetAmount }) {
  const percentage = Math.min(((savedAmount / targetAmount) * 100, 100));


  return (
    <div style={{ background:"#eee", height: "20px", width:"100%", borderRadius:"10px" }}>
      <div 
      style={{
        height:"100%",
        width: `${percentage}`,
        background:"green",
        borderRadius: "10px",
        transition: "width 0.5s ease-in-out",
      }}
      />
      
    </div>
  );
}

export default Progress;
