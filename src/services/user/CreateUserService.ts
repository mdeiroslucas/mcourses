import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {

    const userAlreadyExists = await prismaClient.findUnique({
      where: {
        email: email,
      },
    })

    if (!email) {
      throw new Error("Email incorrect");
      
    }

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
      select: {
        id: true,
        name: true,
        email: true
      },
    });

    return (user);
  }
}

export { CreateUserService };
