interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
  entries: [  
    {
      description: "Pendientes: Esta es una tarea pendiente",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En Progreso: Esta tarea esta en progreso",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Terminadas: Esta tarea fue terminada",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  
  ]
}