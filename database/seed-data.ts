interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    title: string;
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
  entries: [  
    {
      title:"Este es el titulo",
      description: "Pendientes: Esta es una tarea pendiente",
      status: "pending",
      createdAt: Date.now(),
    },
   
    {
      title:"Este es el titulo",
      description: "En Progreso: Esta tarea esta en progreso",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      title:"Este es el titulo",
      description: "Terminadas: Esta tarea fue terminada",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  
  ]
}