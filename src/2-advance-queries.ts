import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query']})

async function main(){
    const res = await prisma.user.findMany({
         take:2,
         skip:1
    })

    console.log(res)
}


main()