import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Section2Props {
  title: string;
  description: string;
}

function TwoColumnsText({ title, description }: Section2Props) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 252, 240, 1)), url('/images/refeitorio.png')",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="w-3/4">
          <Title title={title} description={description} />
        </div>
        <div className="flex flex-wrap justify-center mx-auto">
          <div className="w-full md:w-1/2 my-8 order-1 md:pr-4">
            <div className="space-y-8 mt-4">
              {[
                {
                  title: "Problemas com a produtividade",
                  description:
                    "Refeições de baixa qualidade ou que não agradam os colaboradores pode impactar a produtividade e a motivação no trabalho.",
                },
                {
                  title: "Dificuldade em planejar refeições",
                  description:
                    "Um cardápio repetitivo pode dificultar a qualidade da alimentação e o bem-estar dos colaboradores. É importante agradar ao paladar e variar as receitas.",
                },

                {
                  title: "Custo e desperdício de alimentos",
                  description:
                    "O desperdício de ingredientes, por conta de erros de planejamento na demanda ou na preparação dos alimentos pode gerar altos custos adicionais",
                },
              ].map((problem, index) => (
                <div key={index}>
                  <h4 className="font-bold text-gray-700 dark:text-gray-200">
                    {problem.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 my-8 order-2 md:pl-4">
            <div className="space-y-8 mt-4">
              {[
                {
                  title: "Falta de tempo para cozinhar",
                  description:
                    "A rotina corrida muitas vezes faz com que opções rápidas e menos saudáveis se tornem a escolha principal.",
                },
                {
                  title: "Cansaço no final do dia",
                  description:
                    "Quem nunca abriu mão de preparar algo saudável porque estava sem energia após um longo dia de trabalho?",
                },
                {
                  title: "Dificuldade em controlar o peso",
                  description:
                    "Manter uma alimentação balanceada e saudável pode ser complicado sem orientação adequada.",
                },
              ].map((solution, index) => (
                <div key={index}>
                  <h4 className="font-bold text-gray-700 dark:text-gray-200">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoColumnsText;
