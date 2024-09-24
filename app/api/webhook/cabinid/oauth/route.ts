// import { CreateOrUpdateUser } from "@/actions/user.action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const {user} = data?.payload
    console.log("POST: ", user);
    // const createRes = await CreateOrUpdateUser({data: {
    //     name: user?.firstName + " " +user?.lastName,
    //     email: user?.email,
    //     avatarUrl: user?.avatar,
    //     phoneNumber: user?.phoneNumber,
    //     cabinId: user?.id,
    //     id: user?.id
    // }})
    // console.log("CREATE RES: ", createRes);
    return NextResponse.json({ message: user });
}
