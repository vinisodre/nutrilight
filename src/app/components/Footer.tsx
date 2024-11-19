import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" w-full  mx-auto border-t">
      <div className="flex flex-col gap-2  sm:flex-row py-6 w-full max-w-7xl mx-auto px-8  shrink-0 ">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 NutriLight. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
