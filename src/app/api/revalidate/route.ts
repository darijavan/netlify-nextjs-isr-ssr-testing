import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get("path");
    if (!path) {
        return NextResponse.json("Path query parameter is required", {
            status: 400,
        });
    }
    try {
        await revalidatePath(path);
        return NextResponse.json({ path, revalidated: true });
    } catch (err) {
        return NextResponse.json("Error revalidating", {
            status: 500,
        });
    }
}
