import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { Instagram, Mail } from "lucide-react";

interface ContactProps {
  title: string;
  description: string;
  links: {
    type: "instagram" | "email" | "whatsapp";
    url: string;
    buttonText?: string;
  }[];
}

function Contact({ title, description, links }: ContactProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Title title={title} description={description} />
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex gap-4 w-full justify-center md:space-x-4 items-center">
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
