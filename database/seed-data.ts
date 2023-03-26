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
      description: "Pendientes: dncwie cdohjcwo oiwjhedcx woehcowe woiedchowejwkedj",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En Progreso: dncwie cdohjcwo oiwjhedcx woehcowe woiedchowejwkedj",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Terminadas: dncwie cdohjcwo oiwjhedcx woehcowe woiedchowejwkedj",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  
    ]
}