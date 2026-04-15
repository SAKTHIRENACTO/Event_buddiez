import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
    const phoneNumber = "918940858993"; // your number (no +)
    const message = "Hi, I’m interested in planning an event. Can you help?";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>

            <a
                href={whatsappURL}
                target="_blank"
                className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            >
                <FaWhatsapp className="w-7 h-7" />
            </a>
        </div>
    );
};

export default WhatsAppFloat;