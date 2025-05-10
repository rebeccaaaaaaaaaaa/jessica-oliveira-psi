import React from "react";

const WhatsAppFloatButton = () => {
  const phoneNumber = "5599999999999"; // Substitua pelo número com DDI e DDD
  const message = "Olá! Gostaria de mais informações.";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 9999,
      }}
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Fale conosco pelo WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 flex items-center justify-center"
      >
        <img src="/whatslogo.png" alt="WhatsApp" className="w-20 h-20" />
      </a>
    </div>
  );
};

export default WhatsAppFloatButton;
