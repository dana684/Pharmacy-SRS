import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const frame = document.querySelector('iframe');
    if (frame) frame.addEventListener('load', () => setReady(true), { once: true });
  }, []);
  return (
    <main className="document-shell min-h-screen w-full bg-[#f0faf5]">
      {!ready && <div className="loading-screen" aria-live="polite"><span className="loader-mark">P</span><span>يتم تجهيز وثيقة المشروع…</span></div>}
      <iframe
        title="وثيقة مشروع منصة الصيدلية"
        src="/document.html"
        className={`document-frame block h-screen w-full border-0 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
      />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
