function Progress({ saved, target }) {
  const percentage = Math.min(100, Math.round((saved / target) * 100));

  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{
        backgroundColor: "#ccc",
        width: "100%",
        height: "20px",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#4caf50"
          }}
        />
      </div>
      <p>{percentage}% saved</p>
    </div>
  );
}

export default Progress;
