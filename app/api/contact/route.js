import { NextResponse } from "next/server";
import {db} from "@/db/db";
import ContactForm from "@/models/ContactForm";

export async function POST(req, res) {
    try {
        await db();
        const {name, email,phone, message} = await req.json()
        // console.log(name, email, message);
        const contact = await ContactForm.create({name, email, message, phone});
        // console.log(product_doc);
        
        return NextResponse.json(
            {
                message: "Message Sent",
                data: contact
            },
            { status: 200 }
        )
    }
    catch (e) {
        console.log(e);
        return NextResponse.json(

            { message: "Server error, please try again!" },
            { status: 500 }

        )
    }
}
