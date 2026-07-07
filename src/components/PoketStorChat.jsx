// import React, { useState, useEffect, useRef } from 'react';
// import { MessageSquare, X, Send, Bot } from 'lucide-react';

// export default function PoketStorChat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi! I'm your PoketStor Assistant. Looking for any shops or products near you today?", sender: 'bot' }
//   ]);
//   const [loading, setLoading] = useState(false);
//   const [location, setLocation] = useState(null);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => setLocation({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
//         (err) => console.error("Location permission denied:", err),
//         { enableHighAccuracy: true }
//       );
//     }
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages, loading]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = { id: Date.now(), text: input, sender: 'user' };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput('');
//     setLoading(true);

//     try {
//       // Adjust endpoint string depending on your API port routing setup
//       const response = await fetch('http://localhost:8000/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: userMessage.text, userLocation: location }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.reply, sender: 'bot' }]);
//       } else {
//         setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.error || "Error reading response.", sender: 'bot' }]);
//       }
//     } catch {
//       setMessages((prev) => [...prev, { id: Date.now() + 1, text: "Cannot reach backend server.", sender: 'bot' }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 font-sans">
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-2xl transition duration-300 transform hover:scale-110 flex items-center justify-center"
//         >
//           <MessageSquare className="w-6 h-6" />
//         </button>
//       )}

//       {isOpen && (
//         <div className="bg-white w-[360px] h-[500px] sm:w-[400px] sm:h-[550px] rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden">
//           {/* Header */}
//           <div className="bg-indigo-600 text-white px-4 py-4 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <div className="bg-indigo-500 p-1.5 rounded-lg"><Bot className="w-5 h-5 text-white" /></div>
//               <div>
//                 <h3 className="font-semibold text-sm">PoketStor Assistant</h3>
//                 <p className="text-xs text-indigo-200">AI Support</p>
//               </div>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="text-indigo-200 hover:text-white"><X className="w-5 h-5" /></button>
//           </div>

//           {/* Messages Wrapper */}
//           <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
//             {messages.map((msg) => (
//               <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-200/60'}`}>
// {msg.action?.type === "download_app" && (
//   <button
//     onClick={() => window.open(msg.action.url, "_blank")}
//     className="mt-3 flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-xl transition text-sm"
//   >
//     📲 Get the PoketStor App
//   </button>
// )}                </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-white border border-gray-200/60 rounded-2xl px-4 py-3 flex items-center gap-1 shadow-sm">
//                   <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
//                   <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                   <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Action Bar */}
//           <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask about nearby shops..."
//               className="flex-1 bg-gray-100 text-gray-800 placeholder-gray-400 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
//             />
//             <button type="submit" disabled={!input.trim() || loading} className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 text-white p-2.5 rounded-xl transition shadow-md flex items-center justify-center">
//               <Send className="w-4 h-4" />
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }







import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Download,
} from "lucide-react";

export default function PoketStorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

 const [messages, setMessages] = useState([
  {
    id: 1,
    text: "Hi! I'm your PoketStor Assistant. Looking for any shops or products today?",
    sender: "bot",
    showAppButton: false,
    buttonText: "",
    appLink: "",
  },
]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          }),
        (err) => console.log(err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      action: null,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.poketstor.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.text,
          userLocation: location,
        }),
      });

      const data = await response.json();

     if (response.ok) {
  const cleanReply = data.reply.replace(
    /📲 Explore the complete PoketStor experience![\s\S]*/i,
    ""
  );

  setMessages((prev) => [
    ...prev,
    {
      id: Date.now() + 1,
      text: cleanReply.trim(),
      sender: "bot",
      showAppButton: data.showAppButton || false,
      buttonText: data.buttonText || "",
      appLink: data.appLink || "",
    },
  ]);
} else {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: data.error || "Something went wrong.",
            sender: "bot",
            action: null,
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Cannot connect to the server.",
          sender: "bot",
          action: null,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-xl transition hover:scale-105"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden">

          {/* Header */}

          <div className="bg-indigo-600 text-white px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />

              <div>
                <h3 className="font-semibold">
                  PoketStor Assistant
                </h3>

                <p className="text-xs text-indigo-200">
                  AI Shopping Assistant
                </p>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 shadow text-sm ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-white border rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-line">
                    {msg.text}
                  </p>

                 {msg.showAppButton && (
  <button
    onClick={() => window.open(msg.appLink, "_blank")}
    className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium py-3 transition"
  >
    <Download className="w-5 h-5" />
    {msg.buttonText}
  </button>
)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-xl px-4 py-3 shadow border">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}

          <form
            onSubmit={handleSendMessage}
            className="border-t bg-white p-3 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about PoketStor..."
              className="flex-1 bg-gray-100 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white p-3 rounded-xl"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}