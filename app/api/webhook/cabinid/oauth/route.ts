import { NextRequest, NextResponse } from "next/server";
import { createOrUpdateUser } from "@/action/user.action";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { user } = data?.payload;
    console.log("POST: ", user);
    const createRes = await createOrUpdateUser({
        id: user?.id,
        name: user?.firstName + " " + user?.lastName,
        email: user?.email,
        avatar: user?.avatar,
        phone: user?.phoneNumber,
    });
    console.log("CREATE RES: ", createRes);
    return NextResponse.json({ message: createRes });
}
