import { Button } from "@/components/ui/button";

import { Instagram, Mail } from "lucide-react";
import { playfair } from "@/app/layout";

interface ContactProps {
  title: string;
  description?: string;
  links: {
    type: "instagram" | "email" | "whatsapp";
    url: string;
    buttonText?: string;
  }[];
}

function Contact({ title, links }: ContactProps) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 252, 220, 0.6), rgba(0, 0, 0, 0.9)), url('/images/refeitorio.png')",
      }}
      id="contact"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="">
              <h2
                className={`${playfair.className} text-white text-5xl font-bold tracking-tighter sm:text-7xl my-8`}
              >
                {title}
              </h2>
              <div className="text-gray-200 text-center">
                <p className="md:text-md mt-2">
                  Tire suas dúvidas ou solicite um orçamento hoje mesmo através
                  do Whatsapp.
                </p>
                <p className="md:text-md mt-2">
                  Estamos prontos para ajudar! Siga a gente também nas redes
                  sociais.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm space-y-2 text-white">
            <div className="flex gap-4 w-full justify-center md:space-x-4 items-center my-8">
              {links.map((link, index) => {
                if (link.type === "instagram") {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                    </a>
                  );
                } else if (link.type === "email") {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail />
                    </a>
                  );
                } else if (link.type === "whatsapp") {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-green-600" type="button">
                        {link.buttonText || "WhatsApp"}
                      </Button>
                    </a>
                  );
                }
                return null;
              })}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              __________
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
