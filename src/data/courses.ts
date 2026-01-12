export interface Course {
  id: string;
  name: string;
  category: "capacitacao" | "massagem" | "cursos-livres";
  categoryLabel: string;
  description: string;
  fullDescription: string;
  duration: string;
  image: string;
  benefits: string[];
  modules?: string[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: "quiropraxia",
    name: "Quiropraxia Clínica",
    category: "capacitacao",
    categoryLabel: "Capacitação Profissional",
    description: "Formação completa em técnicas de quiropraxia para tratamento da coluna vertebral e articulações.",
    fullDescription: "O curso de Quiropraxia Clínica oferece formação completa para você atuar como profissional habilitado. Aprenda técnicas de ajuste articular, avaliação postural e tratamento de disfunções musculoesqueléticas. Com metodologia 100% prática, você sairá preparado para atender em clínicas, consultórios e spas.",
    duration: "4 dias intensivos",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Certificado reconhecido pela OPISB",
      "Material didático incluso",
      "Aulas 100% práticas",
      "Acompanhamento pós-curso"
    ],
    modules: [
      "Anatomia e biomecânica da coluna",
      "Avaliação postural",
      "Técnicas de ajuste cervical",
      "Técnicas de ajuste torácico e lombar",
      "Protocolos de tratamento"
    ],
    featured: true
  },
  {
    id: "auriculoterapia",
    name: "Aurículo Acupuntura Chinesa",
    category: "capacitacao",
    categoryLabel: "Capacitação Profissional",
    description: "Técnica milenar chinesa de estímulo de pontos na orelha para tratamento de diversas patologias.",
    fullDescription: "A Auriculoterapia é uma técnica da Medicina Tradicional Chinesa que utiliza pontos específicos na orelha para tratar diversas condições de saúde. Aprenda a identificar pontos, aplicar sementes e agulhas, e desenvolva protocolos de tratamento para ansiedade, dores, emagrecimento e muito mais.",
    duration: "2 dias",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Técnica não invasiva",
      "Alta demanda no mercado",
      "Resultados rápidos",
      "Pode ser combinada com outras terapias"
    ],
    modules: [
      "Fundamentos da MTC",
      "Anatomia auricular",
      "Mapeamento de pontos",
      "Técnicas de aplicação",
      "Protocolos clínicos"
    ],
    featured: true
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem Linfática",
    category: "massagem",
    categoryLabel: "Massagens",
    description: "Técnica de massagem para estimular o sistema linfático, reduzindo inchaços e toxinas.",
    fullDescription: "A Drenagem Linfática é uma técnica de massagem suave e rítmica que estimula o sistema linfático, auxiliando na eliminação de toxinas e redução de edemas. O curso aborda tanto a drenagem estética quanto a drenagem pré e pós-operatória.",
    duration: "2 dias",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Técnica muito procurada em clínicas",
      "Resultados visíveis",
      "Atua em estética e saúde",
      "Complemento para outros tratamentos"
    ],
    modules: [
      "Sistema linfático",
      "Manobras básicas",
      "Drenagem facial",
      "Drenagem corporal",
      "Pré e pós-operatório"
    ],
    featured: true
  },
  {
    id: "massagem-modeladora",
    name: "Massagem Modeladora",
    category: "massagem",
    categoryLabel: "Massagens",
    description: "Técnica vigorosa para redução de medidas, combate à celulite e gordura localizada.",
    fullDescription: "A Massagem Modeladora utiliza movimentos firmes e profundos para quebrar gordura localizada, melhorar a circulação e redefinir o contorno corporal. Aprenda técnicas manuais e instrumentais para oferecer tratamentos estéticos completos.",
    duration: "2 dias",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Alta demanda em clínicas de estética",
      "Resultados mensuráveis",
      "Técnicas manuais e instrumentais",
      "Complementa tratamentos estéticos"
    ]
  },
  {
    id: "massagem-relaxante",
    name: "Massagem Relaxante",
    category: "massagem",
    categoryLabel: "Massagens",
    description: "Técnica suave focada no relaxamento muscular e mental, aliviando tensões do dia a dia.",
    fullDescription: "A Massagem Relaxante é uma das técnicas mais procuradas no mercado de bem-estar. Aprenda manobras suaves que promovem relaxamento profundo, alívio de tensões e bem-estar geral. Ideal para atuar em spas, clínicas e atendimentos domiciliares.",
    duration: "1 dia",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Técnica versátil",
      "Grande demanda",
      "Fácil aplicação",
      "Resultados imediatos"
    ]
  },
  {
    id: "ventosaterapia",
    name: "Ventosaterapia e Guasha",
    category: "cursos-livres",
    categoryLabel: "Cursos Livres",
    description: "Técnica ancestral de aplicação de ventosas para tratamento de dores e tensões musculares.",
    fullDescription: "A Ventosaterapia utiliza copos de sucção para promover aumento da circulação sanguínea, alívio de dores e relaxamento muscular. Combinada com o Guasha, oferece um tratamento completo para diversas condições musculoesqueléticas.",
    duration: "1 dia",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Técnica tradicional eficaz",
      "Baixo investimento inicial",
      "Complementa outras terapias",
      "Resultados rápidos"
    ]
  },
  {
    id: "bambuterapia",
    name: "Bambuterapia",
    category: "massagem",
    categoryLabel: "Massagens",
    description: "Massagem com bambus de diferentes tamanhos para relaxamento profundo e modelagem corporal.",
    fullDescription: "A Bambuterapia é uma técnica de massagem que utiliza bambus de diversos tamanhos para promover relaxamento, drenagem e modelagem corporal. Aprenda a utilizar essa ferramenta versátil para oferecer tratamentos diferenciados aos seus clientes.",
    duration: "1 dia",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Diferencial no mercado",
      "Potencializa outras massagens",
      "Reduz esforço do terapeuta",
      "Resultados intensificados"
    ]
  },
  {
    id: "liberacao-miofascial",
    name: "Liberação Miofascial",
    category: "cursos-livres",
    categoryLabel: "Cursos Livres",
    description: "Técnica de liberação do tecido fascial para alívio de dores e melhora da mobilidade.",
    fullDescription: "A Liberação Miofascial é uma técnica que trabalha o tecido conjuntivo que envolve músculos e órgãos. Aprenda técnicas manuais e instrumentais para tratar disfunções posturais, dores crônicas e restrições de movimento.",
    duration: "1 dia",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Técnica muito eficaz",
      "Complementa tratamentos",
      "Manual e instrumental",
      "Alta demanda"
    ]
  },
  {
    id: "reflexologia",
    name: "Reflexologia Podal",
    category: "cursos-livres",
    categoryLabel: "Cursos Livres",
    description: "Técnica de estímulo de pontos reflexos nos pés para tratamento do corpo como um todo.",
    fullDescription: "A Reflexologia Podal é uma técnica terapêutica que utiliza a pressão em pontos específicos dos pés para promover equilíbrio e bem-estar em todo o organismo. Aprenda a mapear os pontos reflexos e desenvolver tratamentos personalizados.",
    duration: "1 dia",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Técnica relaxante",
      "Tratamento holístico",
      "Fácil aplicação",
      "Grande aceitação"
    ]
  },
  {
    id: "shiatsu",
    name: "Shiatsu - Massagem Japonesa",
    category: "massagem",
    categoryLabel: "Massagens",
    description: "Técnica japonesa de pressão com os dedos nos pontos de energia do corpo.",
    fullDescription: "O Shiatsu é uma técnica de massagem japonesa que utiliza pressão com os dedos, palmas e cotovelos nos pontos de energia do corpo. Aprenda a equilibrar o fluxo energético e promover saúde de forma natural e não invasiva.",
    duration: "2 dias",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Técnica oriental tradicional",
      "Equilibra energia vital",
      "Não usa óleos",
      "Pode ser feita vestido"
    ]
  },
  {
    id: "pedras-quentes",
    name: "Terapia das Pedras Quentes",
    category: "cursos-livres",
    categoryLabel: "Cursos Livres",
    description: "Massagem com pedras vulcânicas aquecidas para relaxamento profundo e alívio de tensões.",
    fullDescription: "A Terapia das Pedras Quentes combina os benefícios do calor com técnicas de massagem para promover relaxamento profundo, alívio de dores e bem-estar. Aprenda a utilizar as pedras vulcânicas de forma segura e eficaz.",
    duration: "1 dia",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Experiência sensorial única",
      "Relaxamento profundo",
      "Diferencial para spas",
      "Técnica luxuosa"
    ]
  },
  {
    id: "ozonioterapia",
    name: "Ozonioterapia",
    category: "cursos-livres",
    categoryLabel: "Cursos Livres",
    description: "Aplicação terapêutica do ozônio para tratamento de diversas condições de saúde.",
    fullDescription: "A Ozonioterapia é uma técnica que utiliza o ozônio medicinal para tratamento de diversas condições, desde dores até processos inflamatórios. Aprenda as técnicas de aplicação e indicações clínicas desta terapia inovadora.",
    duration: "1 dia",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Terapia inovadora",
      "Múltiplas aplicações",
      "Crescente demanda",
      "Resultados comprovados"
    ]
  }
];

export const upcomingCourses = [
  {
    month: "JANEIRO",
    courses: [
      { date: "18 e 19", name: "Aurículo Acupuntura Chinesa", category: "Terapia", courseId: "auriculoterapia" },
      { date: "25 e 26", name: "Drenagem Linfática", category: "Estética", courseId: "drenagem-linfatica" }
    ]
  },
  {
    month: "FEVEREIRO",
    courses: [
      { date: "01 a 04", name: "Quiropraxia Clínica", category: "Terapia", courseId: "quiropraxia" },
      { date: "15 e 16", name: "Massagem Modeladora", category: "Massagem", courseId: "massagem-modeladora" }
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: Course["category"]): Course[] => {
  return courses.filter(course => course.category === category);
};
