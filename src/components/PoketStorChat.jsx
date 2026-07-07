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







// import React, { useState, useEffect, useRef } from "react";
// import {
//   MessageSquare,
//   X,
//   Send,
//   Bot,
//   Download,
// } from "lucide-react";

// export default function PoketStorChat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState("");

//  const [messages, setMessages] = useState([
//   {
//     id: 1,
//     text: "Hi! I'm your PoketStor Assistant. Looking for any shops or products today?",
//     sender: "bot",
//     showAppButton: false,
//     buttonText: "",
//     appLink: "",
//   },
// ]);
//   const [loading, setLoading] = useState(false);
//   const [location, setLocation] = useState(null);

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) =>
//           setLocation({
//             latitude: pos.coords.latitude,
//             longitude: pos.coords.longitude,
//           }),
//         (err) => console.log(err),
//         { enableHighAccuracy: true }
//       );
//     }
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, loading]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     if (!input.trim()) return;

//     const userMessage = {
//       id: Date.now(),
//       text: input,
//       sender: "user",
//       action: null,
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("https://api.poketstor.com/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message: userMessage.text,
//           userLocation: location,
//         }),
//       });

//       const data = await response.json();

//      if (response.ok) {
//   const cleanReply = data.reply.replace(
//     /📲 Explore the complete PoketStor experience![\s\S]*/i,
//     ""
//   );

//   setMessages((prev) => [
//     ...prev,
//     {
//       id: Date.now() + 1,
//       text: cleanReply.trim(),
//       sender: "bot",
//       showAppButton: data.showAppButton || false,
//       buttonText: data.buttonText || "",
//       appLink: data.appLink || "",
//     },
//   ]);
// } else {
//         setMessages((prev) => [
//           ...prev,
//           {
//             id: Date.now() + 1,
//             text: data.error || "Something went wrong.",
//             sender: "bot",
//             action: null,
//           },
//         ]);
//       }
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: Date.now() + 1,
//           text: "Cannot connect to the server.",
//           sender: "bot",
//           action: null,
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 font-sans">

//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-xl transition hover:scale-105"
//         >
//           <MessageSquare className="w-6 h-6" />
//         </button>
//       )}

//       {isOpen && (
//         <div className="w-[360px] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden">

//           {/* Header */}

//           <div className="bg-indigo-600 text-white px-4 py-4 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <Bot className="w-6 h-6" />

//               <div>
//                 <h3 className="font-semibold">
//                   PoketStor Assistant
//                 </h3>

//                 <p className="text-xs text-indigo-200">
//                   AI Shopping Assistant
//                 </p>
//               </div>
//             </div>

//             <button onClick={() => setIsOpen(false)}>
//               <X />
//             </button>
//           </div>

//           {/* Messages */}

//           <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">

//             {messages.map((msg) => (
//               <div
//                 key={msg.id}
//                 className={`flex ${
//                   msg.sender === "user"
//                     ? "justify-end"
//                     : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-2xl px-4 py-3 shadow text-sm ${
//                     msg.sender === "user"
//                       ? "bg-indigo-600 text-white rounded-br-none"
//                       : "bg-white border rounded-bl-none"
//                   }`}
//                 >
//                   <p className="whitespace-pre-line">
//                     {msg.text}
//                   </p>

//                  {msg.showAppButton && (
//   <button
//     onClick={() => window.open(msg.appLink, "_blank")}
//     className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium py-3 transition"
//   >
//     <Download className="w-5 h-5" />
//     {msg.buttonText}
//   </button>
// )}
//                 </div>
//               </div>
//             ))}

//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-white rounded-xl px-4 py-3 shadow border">
//                   <div className="flex gap-1">
//                     <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
//                     <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
//                     <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           {/* Footer */}

//           <form
//             onSubmit={handleSendMessage}
//             className="border-t bg-white p-3 flex gap-2"
//           >
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask anything about PoketStor..."
//               className="flex-1 bg-gray-100 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
//             />

//             <button
//               type="submit"
//               disabled={!input.trim() || loading}
//               className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white p-3 rounded-xl"
//             >
//               <Send className="w-4 h-4" />
//             </button>
//           </form>

//         </div>
//       )}
//     </div>
//   );
// }
































// import React, { useState, useEffect, useRef } from 'react';
// import { MessageSquare, X, Send, Bot, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

// export default function PoketStorChat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi! I'm your PoketStor Assistant. Looking for any shops or products near you today?", sender: 'bot' }
//   ]);
//   const [loading, setLoading] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [isListening, setIsListening] = useState(false);
//   const [isMuted, setIsMuted] = useState(false); // Controls if the AI talks out loud
  
//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);

//   // 1. Fetch Geolocation
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => setLocation({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
//         (err) => console.warn("Location access denied:", err),
//         { enableHighAccuracy: true }
//       );
//     }
//   }, []);

//   // 2. Setup Voice Recording Engine (Speech-to-Text)
//   useEffect(() => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (SpeechRecognition) {
//       const recognition = new SpeechRecognition();
//       recognition.continuous = false; 
//       recognition.interimResults = false; 
//       recognition.lang = 'en-US'; 

//       recognition.onstart = () => setIsListening(true);
      
//       recognition.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         setInput(transcript);
//         // Automatically send the message immediately after speaking
//         handleSendMessage(null, transcript);
//       };

//       recognition.onerror = () => setIsListening(false);
//       recognition.onend = () => setIsListening(false);

//       recognitionRef.current = recognition;
//     }
//   }, [location]); // Re-bind if location details change

//   // 3. Setup Text-to-Speech Voice Output Function
//   const speakText = (text) => {
//     if (isMuted) return; // Don't speak if user muted the chat
    
//     // Clear any speech currently playing
//     window.speechSynthesis.cancel();

//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     utterance.rate = 1.0; // Speed of speaking
//     utterance.pitch = 1.0; 

//     // Optional: Pick a premium natural voice if available in the browser
//     const voices = window.speechSynthesis.getVoices();
//     const premiumVoice = voices.find(voice => voice.name.includes("Google") || voice.name.includes("Natural"));
//     if (premiumVoice) utterance.voice = premiumVoice;

//     window.speechSynthesis.speak(utterance);
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages, loading]);

//   const toggleListening = () => {
//     if (!recognitionRef.current) {
//       alert("Voice input is not supported on this browser.");
//       return;
//     }
//     if (isListening) {
//       recognitionRef.current.stop();
//     } else {
//       window.speechSynthesis.cancel(); // Stop talking if user interrupts with mic
//       recognitionRef.current.start();
//     }
//   };

//   // 4. Send payload to your Node server
//   const handleSendMessage = async (e, textOverride = null) => {
//     if (e) e.preventDefault();
//     const textToSend = textOverride || input;
//     if (!textToSend.trim()) return;

//     const userMessage = { id: Date.now(), text: textToSend, sender: 'user' };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput('');
//     setLoading(true);

//     try {
//       const response = await fetch('https://api.poketstor.com/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: userMessage.text, userLocation: location }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.reply, sender: 'bot' }]);
//         // 🔊 Make the AI speak out loud!
//         speakText(data.reply);
//       } else {
//         setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.error || "Error running chat helper.", sender: 'bot' }]);
//       }
//     } catch {
//       setMessages((prev) => [...prev, { id: Date.now() + 1, text: "Unable to reach server gateway.", sender: 'bot' }]);
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
//                 <h3 className="font-semibold text-sm">PoketStor Voice Assistant</h3>
//                 <p className="text-xs text-indigo-200">{isListening ? "Listening..." : "Online"}</p>
//               </div>
//             </div>
            
//             {/* Audio Voice Output Controls */}
//             <div className="flex items-center gap-2">
//               <button 
//                 onClick={() => {
//                   if (!isMuted) window.speechSynthesis.cancel();
//                   setIsMuted(!isMuted);
//                 }} 
//                 className="text-indigo-200 hover:text-white mr-1 transition"
//               >
//                 {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
//               </button>
//               <button onClick={() => { window.speechSynthesis.cancel(); setIsOpen(false); }} className="text-indigo-200 hover:text-white"><X className="w-5 h-5" /></button>
//             </div>
//           </div>

//           {/* Messages Wrapper Body */}
//           <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
//             {messages.map((msg) => (
//               <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-200/60'}`}>
//                   <p className="whitespace-pre-line">{msg.text}</p>
//                 </div>
//               </div>
//             ))}
            
//             {/* Loading Dots Indicator */}
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

//           {/* Dynamic Sound Wave Form UI overlay during active listening */}
//           {isListening && (
//             <div className="bg-indigo-50/80 px-4 py-3 flex items-center justify-center gap-1.5 border-t border-indigo-100">
//               <span className="w-1 h-4 bg-indigo-500 rounded-full animate-bounce [animation-duration:0.5s]"></span>
//               <span className="w-1 h-7 bg-indigo-600 rounded-full animate-bounce [animation-duration:0.3s]"></span>
//               <span className="w-1 h-5 bg-indigo-500 rounded-full animate-bounce [animation-duration:0.4s]"></span>
//               <p className="text-xs text-indigo-700 font-medium ml-2 animate-pulse">Speak now...</p>
//             </div>
//           )}

//           {/* Action Bar Footer Form */}
//           <form onSubmit={(e) => handleSendMessage(e)} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            
//             {/* 🎤 Interactive Mic Trigger */}
//             <button
//               type="button"
//               onClick={toggleListening}
//               className={`p-2.5 rounded-xl transition shadow-sm flex items-center justify-center ${
//                 isListening 
//                   ? 'bg-red-500 text-white shadow-red-200' 
//                   : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
//               }`}
//             >
//               {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
//             </button>

//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder={isListening ? "Listening..." : "Type or speak to chat..."}
//               className="flex-1 bg-gray-100 text-gray-800 placeholder-gray-400 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
//               disabled={isListening}
//             />
            
//             <button type="submit" disabled={!input.trim() || loading || isListening} className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 text-white p-2.5 rounded-xl transition shadow-md flex items-center justify-center">
//               <Send className="w-4 h-4" />
//             </button>
//           </form>

//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Mic, MicOff } from 'lucide-react';

export default function PoketStorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your PoketStor Assistant. Looking for any shops or products near you today?", sender: 'bot' }
  ]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // 1. Fetch Geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        (err) => console.warn("Location access denied:", err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // 2. Setup Voice Input Engine (Speech-to-Text)
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        // Automatically send the message immediately after speaking ends
        handleSendMessage(null, transcript);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    }
  }, [location]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Lock body scroll on mobile while the chat is open full-screen
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
  }, [isOpen]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Voice input is not supported on this browser.");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  // 3. Send payload to your Node server
  const handleSendMessage = async (e, textOverride = null) => {
    if (e) e.preventDefault();
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    const userMessage = { id: Date.now(), text: textToSend, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.poketstor.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text, userLocation: location }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.reply, sender: 'bot' }]);
      } else {
        setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.error || "Error running chat helper.", sender: 'bot' }]);
      }
    } catch {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: "Unable to reach server gateway.", sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-2xl transition duration-300 transform hover:scale-110 flex items-center justify-center"
          style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 bg-white w-full sm:w-[400px] h-[100dvh] sm:h-[550px] rounded-none sm:rounded-2xl shadow-2xl flex flex-col border-0 sm:border sm:border-gray-100 overflow-hidden"
        >

          {/* Header */}
          <div
            className="bg-indigo-600 text-white px-4 py-4 flex items-center justify-between shrink-0"
            style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))' }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="bg-indigo-500 p-1.5 rounded-lg shrink-0"><Bot className="w-5 h-5 text-white" /></div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm truncate">PoketStor Assistant</h3>
                <p className="text-xs text-indigo-200">{isListening ? "Listening..." : "Online"}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-indigo-200 hover:text-white p-1 -m-1 shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-200/60'}`}>
                  <p className="whitespace-pre-line break-words">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200/60 rounded-2xl px-4 py-3 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Sound Wave indicator overlay when microphone is actively listening */}
          {isListening && (
            <div className="bg-indigo-50/80 px-4 py-3 flex items-center justify-center gap-1.5 border-t border-indigo-100 shrink-0">
              <span className="w-1 h-4 bg-indigo-500 rounded-full animate-bounce [animation-duration:0.5s]"></span>
              <span className="w-1 h-7 bg-indigo-600 rounded-full animate-bounce [animation-duration:0.3s]"></span>
              <span className="w-1 h-5 bg-indigo-500 rounded-full animate-bounce [animation-duration:0.4s]"></span>
              <p className="text-xs text-indigo-700 font-medium ml-2 animate-pulse">Speak now...</p>
            </div>
          )}

          {/* Input Panel Bar Footer */}
          <form
            onSubmit={(e) => handleSendMessage(e)}
            className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center shrink-0"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
          >

            {/* 🎤 Voice Input Toggle Button */}
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2.5 rounded-xl transition shadow-sm flex items-center justify-center shrink-0 ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? "Listening..." : "Type or speak to chat..."}
              className="flex-1 min-w-0 bg-gray-100 text-gray-800 placeholder-gray-400 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              disabled={isListening}
            />

            <button type="submit" disabled={!input.trim() || loading || isListening} className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 text-white p-2.5 rounded-xl transition shadow-md flex items-center justify-center shrink-0">
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}