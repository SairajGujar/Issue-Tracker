import { createIssue, getAllIssues } from "@/prisma/issue";
import { NextResponse } from "next/server";
import { createIssueSchema } from "../../validationSchemas";

export async function POST(req:Request){
    try {
    const body = await req.json();
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success){
        throw validation.error.errors;
    }
    const {title, description} = body;
    const newIssue = await createIssue(title, description);
    return NextResponse.json(newIssue, {status:201});
    } catch (error) {
        return NextResponse.json(error, {status:404})
    }
}

export async function GET(){
    try {
        const issues = await getAllIssues();
        return NextResponse.json(issues, {status:200});
    } catch (error) {
        return NextResponse.json(error, {status:404})
    }
}

