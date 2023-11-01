import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query']})

async function main() {
  // ... you will write your Prisma Client queries here
   const users = await prisma.user.findUnique({
      where:{
         id:2
      },
      include:{
        posts:true
      }
   })
   console.log(users)
}

main()
  .then(async () => {
    console.log('here ur all users are')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })