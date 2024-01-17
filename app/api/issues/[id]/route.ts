import { deleteIssue, updateOneIssue } from "@/prisma/issue";
import { NextResponse } from "next/server";

export async function PATCH(request:Request, {params:{id}}:{params:{id:string}}){
    try {
    const body = await request.json();
    const updatedIssue = await updateOneIssue(id, body.title, body.description);
    return NextResponse.json(updatedIssue, {status:200});
    } catch (error) {
        return NextResponse.json(error, {status:404})
    }
}

export async function DELETE(request:Request, {params:{id}}:{params:{id:string}}){
    try {
        const deletedIssue = await deleteIssue(id);
        return NextResponse.json(deletedIssue, {status:200});
    } catch (error) {
        return NextResponse.json(error, {status:404});
    }
}