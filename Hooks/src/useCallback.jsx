import React, { useState, useCallback, useEffect } from 'react';

/*
1. The Core Definition (The "What")
"At its core, useCallback is a React hook used strictly for performance optimization through memoization. Its sole job is to cache a specific function instance across component re-renders, preserving its exact identity reference in memory."

2. The Under-the-Hood Mechanics (The "How")
"By default, every single time a React component re-renders, any standard function declared inside it gets recreated in a completely fresh memory slot. This happens because JavaScript treats functions as objects, comparing them by structural memory reference, not by content.

When we wrap a function in useCallback, we pass it a dependency array that acts as a cache trigger. The lifecycle follows two strict rules:

If the dependencies stay the same: React bypasses rebuilding the function entirely and hands back the exact same memory reference from the previous render.

If a dependency changes: React destroys the old cache, reads the updated variables, and generates a fresh function instance in a brand-new memory slot."

🎙️ Your Polished Interview Answer
"useCallback is a React hook used for performance optimization through memoization. It takes a function and a dependency array as arguments.

If there is a change in the dependencies, React clears the cache and grants a new memory slot (a new reference) to the function so it can capture the fresh data.

If there are no changes in the dependencies, React bypasses recreation and grants the exact same old memory slot (retains the reference) across re-renders."

Q1: "What happens if you leave the dependency array completely empty []?"
Your Answer: "The function gets locked into its initial memory slot on the very first mount and never changes. However, you have to be careful because any state variables read inside that function will be trapped in a stale closure and won't reflect updates."

Q2: "Should we wrap every single function in a component with useCallback?"
Your Answer: "No, we shouldn't. Optimization isn't free—useCallback has to run dependency checks on every single render, which adds a small overhead. We should only use it when passing functions to optimized child components or when a function is a dependency in another hook like useEffect."

useCallback is PASSIVE (Caches a function definition): It doesn't run your code. Its only job is to freeze a function's memory reference across re-renders to save memory.

useEffect is ACTIVE (Executes side-effects): Its job is to run code—like fetching data from an API database or setting up timers—automatically after the UI renders on the screen.
*/

export default function SimpleCallbackDemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // 1. This function is CACHED. It only changes if 'count' changes.
  const cachedFunction = useCallback(() => {
    console.log(`🚀 Function Fired! Locked-in count value is: ${count}`);
  }, [count]); // 👈 The trigger list

  // 2. This runs automatically to test if the function was recreated
  useEffect(() => {
    console.log("⚠️ CACHE BROKEN: React recreated the function in a new memory slot!");
  }, [cachedFunction]); 

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>useCallback Easy Tester</h2>
      
      <p>Count: <strong>{count}</strong> | Other State: <strong>{otherState}</strong></p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        {/* Button A */}
        <button onClick={() => setCount(c => c + 1)} style={{ padding: '10px', background: 'teal', color: 'white' }}>
          A. Change Count (Breaks Cache)
        </button>

        {/* Button B */}
        <button onClick={() => setOtherState(o => o + 1)} style={{ padding: '10px', background: 'gray', color: 'white' }}>
          B. Change Other State (Keeps Cache)
        </button>

        {/* Button C */}
        <button onClick={cachedFunction} style={{ padding: '10px' }}>
          🔥 Fire Function
        </button>
      </div>
    </div>
  );
}