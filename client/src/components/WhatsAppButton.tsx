import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline";
  className?: string;
}

export function WhatsAppButton({ variant = "inline", className = "" }: WhatsAppButtonProps) {
  const whatsappNumber = "9173157440";
  const defaultMessage = "Hi! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
        <Button
          size="icon"
          className="rounded-full bg-[#25D366] border-[#25D366] text-white shadow-lg animate-pulse"
          onClick={handleClick}
          data-testid="button-whatsapp-floating"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <Button
      className={`gap-2 bg-[#25D366] border-[#25D366] text-white ${className}`}
      onClick={handleClick}
      data-testid="button-whatsapp-inline"
    >
      <MessageCircle className="h-5 w-5" />
      Message Us on WhatsApp
    </Button>
  );
}
