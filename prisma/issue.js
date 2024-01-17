import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export const createIssue = async(title, description)=>{
    const issue = await prisma.issue.create({
        data:{
            title: title,
            description: description,
        }
    });
    return issue;
}

export const getAllIssues = async(page)=>{
    const skipNumber = page*5
    const issues = await prisma.issue.findMany({
        skip:skipNumber,
        take:5
    });
    return issues;
}
export const getAllIssuesMod = async()=>{
    const issues = await prisma.issue.findMany({});
    return issues;
}

export const updateOneIssue = async(id, title, description)=>{
    const issue = await prisma.issue.update({
        where:{
            id: id,
        },
        data:{
            title: title,
            description: description,
        }
    });
    return issue;
}

export const findIssueById = async(id)=>{
    const issue = await prisma.issue.findUnique({
        where:{
            id:id,
        }
    });
    return issue;
}

export const deleteIssue = async(id)=>{
    const issue = await prisma.issue.delete({
        where:{
            id:id,
        }
    });
    return issue;
}