export interface Teacher {
  id: string;
  name: string;
  specialty: string;
  image: string;
  description: string;
  fullBio: string;
  expertise: string[];
  credentials: string[];
  featured?: boolean;
  instagram?: string;
  linkedin?: string;
}

export const teachers: Teacher[] = [
  {
    id: "sergio-medina",
    name: "Sérgio Medina",
    specialty: "Diretor e Fundador",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Fundador do Instituto Medina, com mais de 25 anos de experiência em Terapia Integrativa. Já formou mais de 5.000 alunos.",
    fullBio: `Sérgio Medina é o fundador e diretor do Instituto Medina, uma referência em formação profissional em terapias integrativas no Sul da Bahia. Com mais de 25 anos de experiência clínica e docente, já formou mais de 5.000 alunos que atuam na região, em outros estados e no exterior.

Bacharel e Licenciado em Educação Física pela Universidade Federal de Viçosa (MG), possui Pós-Graduação em Educação Física pela Universidade Salgado de Oliveira (RJ) e Pós-Graduação em Acupuntura e Medicina Tradicional Chinesa pela Faculdade Einstein (FACEI).

Em 2021, recebeu o título de Dr. Honoris Causa pela Faculdade Einstein em reconhecimento às suas contribuições nas áreas de Quiropraxia, Massoterapia e Acupuntura.

Foi docente do curso de Educação Física e Fisioterapia da FTC Itabuna, onde ministrou disciplinas como "Saúde e Massoterapia" e "Recursos Terapêuticos Manuais". É membro da Associação de Mioterapia Brasil e possui registro no CREF, OPISB e ANQ.`,
    expertise: ["Quiropraxia", "Auriculoterapia", "Massoterapia", "Gestão"],
    credentials: [
      "CREF 90-G/BA",
      "OPISB 227",
      "ANQ 032/06",
      "Dr. Honoris Causa - Faculdade Einstein (2021)",
      "Bacharel em Educação Física - UFV",
      "Pós-graduado em Acupuntura e MTC"
    ],
    featured: true,
    instagram: "https://instagram.com/institutomedina"
  },
  {
    id: "lorena-reis",
    name: "Lorena Maria dos Reis",
    specialty: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Fisioterapeuta especializada em drenagem linfática e massoterapia. Ministra cursos práticos com técnicas avançadas.",
    fullBio: `Lorena Maria dos Reis é fisioterapeuta com especialização em técnicas manuais e estéticas. Atua como instrutora no Instituto Medina, onde ministra cursos de Drenagem Linfática, Massagem Modeladora e outras técnicas.

Com formação sólida e experiência prática, Lorena se destaca pela didática clara e pela capacidade de transmitir conhecimentos de forma acessível. Seus cursos são conhecidos pela abordagem prática e pelos resultados que os alunos alcançam.`,
    expertise: ["Drenagem Linfática", "Massoterapia", "Estética Corporal"],
    credentials: [
      "CREFITO",
      "Fisioterapeuta",
      "Especialista em Drenagem Linfática"
    ],
    featured: false
  },
  {
    id: "deise-scher",
    name: "Deise Scher",
    specialty: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Fisioterapeuta com experiência em reabilitação e técnicas terapêuticas. Especialista em tratamentos posturais.",
    fullBio: `Deise Scher é fisioterapeuta com vasta experiência em reabilitação e tratamentos terapêuticos. No Instituto Medina, contribui com sua expertise em técnicas manuais e abordagens terapêuticas integradas.

Sua formação abrange diversas áreas da fisioterapia, permitindo uma visão holística do tratamento. Nos cursos que ministra, enfatiza a importância da avaliação correta e do tratamento personalizado.`,
    expertise: ["Fisioterapia", "Reabilitação", "Posturologia"],
    credentials: [
      "CREFITO",
      "Fisioterapeuta",
      "Especialista em Reabilitação"
    ],
    featured: false
  },
  {
    id: "lais-carvalho",
    name: "Laís Carvalho",
    specialty: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Fisioterapeuta especializada em estética e bem-estar. Expertise em tratamentos corporais e faciais.",
    fullBio: `Laís Carvalho é fisioterapeuta com foco em estética e bem-estar. No Instituto Medina, atua como instrutora em cursos de estética facial e corporal, trazendo sua experiência prática para a sala de aula.

Apaixonada por resultados, Laís desenvolve protocolos de tratamento eficazes que os alunos podem aplicar imediatamente em sua prática profissional.`,
    expertise: ["Estética Facial", "Estética Corporal", "Bem-estar"],
    credentials: [
      "CREFITO",
      "Fisioterapeuta",
      "Especialista em Estética"
    ],
    featured: false
  }
];

export const getTeacherById = (id: string): Teacher | undefined => {
  return teachers.find(teacher => teacher.id === id);
};
