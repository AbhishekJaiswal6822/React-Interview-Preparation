import React, { useState, useRef } from 'react';

export default function UseRef() {
  const [stateCount, setStateCount] = useState(0);
  
  // 1. Initialize useRef. It always creates an object with a '.current' property.
  const refCount = useRef(0); 

  const incrementRef = () => {
    // 2. To read or write a ref value, you MUST use .current
    refCount.current = refCount.current + 1;
    console.log(`🤫 Ref changed silently! refCount.current is now: ${refCount.current}`);
  };

  console.log("🔄 Component rendered!");

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>useRef Easy Tester</h2>
      
      <p>State Count (Triggers Render): <strong>{stateCount}</strong></p>
      <p>Ref Count (Silent Tracking): <strong>{refCount.current}</strong></p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        {/* Button A */}
        <button onClick={() => setStateCount(c => c + 1)} style={{ padding: '10px', background: 'teal', color: 'white' }}>
          A. Increment State (Updates Screen)
        </button>

        {/* Button B */}
        <button onClick={incrementRef} style={{ padding: '10px', background: 'gray', color: 'white' }}>
          B. Increment Ref (Updates Silently)
        </button>
      </div>
    </div>
  );
}