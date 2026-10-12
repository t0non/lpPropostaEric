export interface ProposalConfig {
  client: string;
  brand: string;
  agency: {
    name: string;
    tagline: string;
    website: string;
    whatsappNumber: string; // Formato internacional sem caracteres, ex: "5531999999999" (vazio = cópia amigável)
    whatsappDefaultMessage: string;
  };
  meeting: {
    date: string;
    formattedDate: string;
    time: string;
  };
  price: number;
  downPaymentPercentage: number;
  downPaymentValue: number;
  deliveryPercentage: number;
  deliveryValue: number;
  deadline: string | null; // "A definir após validação do escopo"
  includedInitialArticles: number;
  currency: string;
  scopeSummary: string[];
}

export const proposal: ProposalConfig = {
  client: "Éric",
  brand: "Promo no Alvo",
  agency: {
    name: "Top Marketing BH",
    tagline: "Estratégia, tecnologia e marketing digital para o crescimento de negócios",
    website: "https://topmarketingbh.com.br/",
    whatsappNumber: "", // Deixe vazio para acionar o botão de cópia de mensagem comercial amigável
    whatsappDefaultMessage:
      "Olá! Gostaria de avançar com o projeto da plataforma Promo no Alvo apresentado pela Top Marketing BH no valor de R$ 997,00.",
  },
  meeting: {
    date: "2026-10-13",
    formattedDate: "13 de outubro de 2026",
    time: "09h30",
  },
  price: 997.0,
  downPaymentPercentage: 50,
  downPaymentValue: 498.5,
  deliveryPercentage: 50,
  deliveryValue: 498.5,
  deadline: null, // A definir após validação do escopo
  includedInitialArticles: 2,
  currency: "BRL",
  scopeSummary: [
    "Site profissional e 100% responsivo com a marca Promo no Alvo",
    "Blog otimizado e estruturado para publicação de conteúdos",
    "SEO técnico e semântico inicial para mecanismos de busca",
    "Estrutura de conteúdo preparada para buscas com Inteligência Artificial (AEO / GEO)",
    "Preparação técnica para campanhas no Google Ads",
    "Preparação técnica para campanhas no Meta Ads (Facebook & Instagram)",
    "Rastreamento avançado de eventos e conversões (GA4, GTM, Meta Pixel)",
    "Painel administrativo para gerenciar artigos, categorias, ofertas e links de grupos",
    "Integração visual e direta com os grupos de ofertas",
    "Publicação em ambiente de produção e orientação inicial de uso",
  ],
};

// Aliases para compatibilidade rápida
export const proposalConfig = proposal;
