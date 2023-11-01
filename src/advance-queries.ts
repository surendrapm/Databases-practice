import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient({log:['info','query']})

async function main(){
  const result =  await prisma.user.findMany({
     where:{
          email:{
            endsWith:'prisma.io'
          },
          posts:{
             some:{
                published:true
             }
          }
     },
     include:{
         posts:{
            where:{
                published:true
            }
         }
     }
  })
     console.log(result[0].posts)
     
}

main()