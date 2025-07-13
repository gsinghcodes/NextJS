import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 1",
          price: 500,
          description: "Description 1",
        },
        {
          title: "Product 2",
          price: 700,
          description: "Description 2",
        },
        {
          title: "Product 3",
          price: 900,
          description: "Description 3",
        },
      ],
    });
  }
};

seedProducts()
