import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";

function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Fale com a gente
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
              Tire suas dúvidas ou solicite um orçamento hoje mesmo através do
              Whatsapp.
              <br />
              Estamos prontos para ajudar! <br />
              Siga a gente também nas redes sociais.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex gap-4 w-full justify-center md:space-x-4 items-center">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600" type="submit">
                  Whatsapp
                </Button>
              </a>
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
