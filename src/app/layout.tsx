// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Landing Pages que Convertem | Vinicius Dev',
  description: 'Crio landing pages estratégicas que aumentam suas vendas em até 3x. Entrega em 2 dias com garantia de qualidade.',
  openGraph: {
    images: '/images/og-image.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Seu Nome",
            "serviceType": "Desenvolvimento de Landing Pages",
            "areaServed": "Brasil",
            "offers": {
              "@type": "Offer",
              "price": "A partir de R$ 497,00",
              "priceCurrency": "BRL"
            }
          })
        }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
