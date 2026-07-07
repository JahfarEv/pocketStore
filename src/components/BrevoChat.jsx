// src/components/BrevoChat.jsx
import { useEffect } from "react";

export default function BrevoChat() {
  useEffect(() => {
    window.BrevoConversationsID = "694906492db547ee900bde0f";

    window.BrevoConversations =
      window.BrevoConversations ||
      function () {
        (window.BrevoConversations.q =
          window.BrevoConversations.q || []).push(arguments);
      };

    const script = document.createElement("script");
    script.src =
      "https://conversations-widget.brevo.com/brevo-conversations.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}