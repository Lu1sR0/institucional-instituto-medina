export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "cursos" | "clinica" | "eventos" | "formandos";
  categoryLabel: string;
  title?: string;
}

export const galleryImages: GalleryImage[] = [
  // Cursos
  {
    id: "curso-1",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Aula prática de Quiropraxia",
    category: "cursos",
    categoryLabel: "Cursos",
    title: "Curso de Quiropraxia Clínica"
  },
  {
    id: "curso-2",
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Aula de Massagem Terapêutica",
    category: "cursos",
    categoryLabel: "Cursos",
    title: "Curso de Massagem Terapêutica"
  },
  {
    id: "curso-3",
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Prática de Auriculoterapia",
    category: "cursos",
    categoryLabel: "Cursos",
    title: "Curso de Auriculoterapia"
  },
  {
    id: "curso-4",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Aula de Ventosaterapia",
    category: "cursos",
    categoryLabel: "Cursos",
    title: "Curso de Ventosaterapia"
  },
  
  // Clínica
  {
    id: "clinica-1",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Recepção do Instituto Medina",
    category: "clinica",
    categoryLabel: "Clínica",
    title: "Recepção"
  },
  {
    id: "clinica-2",
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sala de atendimento",
    category: "clinica",
    categoryLabel: "Clínica",
    title: "Sala de Atendimento"
  },
  {
    id: "clinica-3",
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sala de cursos",
    category: "clinica",
    categoryLabel: "Clínica",
    title: "Sala de Cursos"
  },
  {
    id: "clinica-4",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Espaço de relaxamento",
    category: "clinica",
    categoryLabel: "Clínica",
    title: "Espaço Relaxamento"
  },
  
  // Eventos
  {
    id: "evento-1",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Evento de formatura",
    category: "eventos",
    categoryLabel: "Eventos",
    title: "Cerimônia de Formatura"
  },
  {
    id: "evento-2",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Palestra sobre terapias integrativas",
    category: "eventos",
    categoryLabel: "Eventos",
    title: "Palestra Terapias Integrativas"
  },
  {
    id: "evento-3",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Workshop prático",
    category: "eventos",
    categoryLabel: "Eventos",
    title: "Workshop Prático"
  },
  
  // Formandos
  {
    id: "formando-1",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Turma de formandos",
    category: "formandos",
    categoryLabel: "Formandos",
    title: "Turma 2024"
  },
  {
    id: "formando-2",
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Alunos recebendo certificado",
    category: "formandos",
    categoryLabel: "Formandos",
    title: "Entrega de Certificados"
  },
  {
    id: "formando-3",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Grupo de alunos em prática",
    category: "formandos",
    categoryLabel: "Formandos",
    title: "Prática em Grupo"
  }
];

export const getImagesByCategory = (category: GalleryImage["category"]): GalleryImage[] => {
  return galleryImages.filter(image => image.category === category);
};

export const galleryCategories = [
  { id: "todos", label: "Todos" },
  { id: "cursos", label: "Cursos" },
  { id: "clinica", label: "Clínica" },
  { id: "eventos", label: "Eventos" },
  { id: "formandos", label: "Formandos" }
];
