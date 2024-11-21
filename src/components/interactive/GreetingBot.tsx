import { useState, useEffect } from 'react';

export default function GreetingBot() {
  const [visitorName, setVisitorName] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    // Check localStorage for returning visitors
    const savedName = localStorage.getItem('visitorName');
    if (savedName) {
      setVisitorName(savedName);
      setGreeting(`Welcome back, ${savedName}! Ready to explore more AI wonders?`);
    } else {
      setGreeting("Hello, cosmic explorer! I'm your AI guide today.");
    }
  }, []);

  return (
    <div className="greeting-bot">
      <div className="bot-message">{greeting}</div>
      {!visitorName && (
        <div className="name-input">
          <input
            type="text"
            placeholder="What should I call you?"
            onChange={(e) => {
              setVisitorName(e.target.value);
              localStorage.setItem('visitorName', e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
} 