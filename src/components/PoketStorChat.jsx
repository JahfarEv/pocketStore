import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Download,
  Mic,
  MicOff,
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
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          }),
        (err) => console.log(err),
        { enableHighAccuracy: true },
      );
    }
  }, []);

  // Voice recognition setup
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        // Automatically send after voice input
        setTimeout(() => {
          handleSendMessage(null, transcript);
        }, 300);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Lock body scroll on mobile while the chat is open full-screen
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
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
      setInput("");
      recognitionRef.current.start();
    }
  };

  const handleSendMessage = async (e, textOverride = null) => {
    if (e) e.preventDefault();

    const textToSend = textOverride || input;
    if (!textToSend.trim() || loading) return;

    const userMessage = {
      id: Date.now(),
      text: textToSend,
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
          "",
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
    <div className="font-sans">
      {!isOpen && (
        <div
          className="group fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Hover label (desktop only) */}
          <span className="hidden sm:block bg-white text-gray-700 text-sm font-medium px-3.5 py-2 rounded-xl shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap">
            Need help? Chat with us
          </span>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open chat assistant"
            className="relative w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            {/* Soft pulsing ring to draw attention */}
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-75 animate-ping [animation-duration:2.5s]"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-600 to-purple-600 blur-md opacity-60"></span>

            {/* Main button surface */}
            <span className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 shadow-2xl shadow-indigo-500/40 flex items-center justify-center ring-2 ring-white/20">
              <MessageSquare
                className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110"
                strokeWidth={2.2}
              />
            </span>

            {/* Online status badge */}
            <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-sm">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping [animation-duration:2s]"></span>
            </span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 bg-white w-full sm:w-[400px] h-[100dvh] sm:h-[550px] rounded-none sm:rounded-2xl shadow-2xl border-0 sm:border flex flex-col overflow-hidden">
          {/* Header */}
          <div
            className="bg-indigo-600 text-white px-4 py-4 flex items-center justify-between shrink-0"
            style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <Bot className="w-6 h-6 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold truncate">PoketStor Assistant</h3>
                <p className="text-xs text-indigo-200">
                  {isListening ? "🎤 Listening..." : "AI Shopping Assistant"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 -m-1 shrink-0"
            >
              <X />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 shadow text-sm ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-white border rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-line break-words">{msg.text}</p>

                  {msg.showAppButton && (
                    <button
                      onClick={() => window.open(msg.appLink, "_blank")}
                      className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium py-3 transition"
                    >
                      <Download className="w-5 h-5 shrink-0" />
                      <span className="truncate">{msg.buttonText}</span>
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

            {/* Voice listening indicator */}
            {isListening && (
              <div className="flex justify-start">
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 shadow-sm flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-150"></span>
                  </div>
                  <span className="text-sm text-red-600 font-medium">
                    Listening...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <form
            onSubmit={(e) => handleSendMessage(e)}
            className="border-t bg-white p-3 flex gap-2 shrink-0"
            style={{
              paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
            }}
          >
            {/* Voice button */}
            <button
              type="button"
              onClick={toggleListening}
              className={`p-3 rounded-xl transition shrink-0 ${
                isListening
                  ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
              disabled={loading}
            >
              {isListening ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </button>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening ? "Listening..." : "Ask anything about PoketStor..."
              }
              className="flex-1 min-w-0 bg-gray-100 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isListening}
            />

            <button
              type="submit"
              disabled={!input.trim() || loading || isListening}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white p-3 rounded-xl shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
