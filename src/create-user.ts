import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query']})

async function main() {
  // ... you will write your Prisma Client queries here
   await prisma.user.create({
      data:{
        name:'parag',
        email:'parag456@gmail.com'
      } 
   })
}

main()
  .then(async () => {
    console.log('user created')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })