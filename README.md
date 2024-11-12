## Projeto de classificados de carros feito na live do Bonieky Lacerda no youtube

### Desenvolvido com NextJs 15

### Passos iniciais do projeto:
- npm i -D prisma
- npm i zod
- npm i sharp
- npm i uuid
- npx prisma init --datasource-provider mysql
- alterar o .env
- criar o arquivo prisma.ts na pasta libs
```
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```
- criar o modelo no shema
```
model Car {
  id          Int     @id @default(autoincrement())
  img         String
  title       String
  description String?
  priceFrom   Float
  priceTo     Float
  negotiable  Boolean @default(false)
  authorName  String
  authorEmail String
}
```
- npx prisma migrate dev --name init => migrate inicial

