import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" w-full  mx-auto border-t">
      <div className="flex flex-col gap-2  sm:flex-row py-6 w-full max-w-7xl mx-auto px-8  shrink-0 ">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p className="">© 2024 NutriLight. Todos os direitos reservados.</p>
          <p>
            Avenida A, 260, loja 1 Fragoso - Magé/RJ CNPJ 51.823.168/0001-38
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/politica-de-privacidade"
          >
            Política de privacidade e Termos de uso
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
