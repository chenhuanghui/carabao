import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateUser } from "@/action/user.action";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const {user} = data?.payload
    console.log("POST: ", user);
    const createRes = await createOrUpdateUser({data: {
        name: user?.firstName + " " +user?.lastName,
        email: user?.email,
        avatar: user?.avatar,
        phone: user?.phoneNumber,
        id: user?.id
    }})
    console.log("CREATE RES: ", createRes);
    return NextResponse.json({ message: createRes });
}
