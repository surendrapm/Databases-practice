import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient({log:['info','query']})


async function main(){
       await prisma.user.update({
          where:{
              id:2,
          },
          data:{
             name:"hare ksrishna",
             posts:{
                updateMany:{
                    where:{
                        authorId:2
                    },
                    data:{
                       content:"stock market",
                       published:true
                    }
                }
             }
          }
         
       })
       
  }

main()
  