// pages/index.tsx

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Minha Página Inicial</h1>
      <Link href="/meu-grafico">Ir para o Gráfico</Link>
      {/* Restante do conteúdo */}
    </div>
  );
};

export default HomePage;
