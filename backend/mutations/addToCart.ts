import { KeystoneContext } from "@keystone-next/types";
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from "../types";

 async function addToCart(
    root: any,
    { productId }: { productId: string},
    context: KeystoneContext
): Promise<CartItemCreateInput> {
    console.log("Working???");

    const sesh = context.session as Session;

    if(!sesh.itemId){
        throw new Error("You must be logged")
    }

    const allCartItems = await context.lists.CartItem.findMany({
        where: { user: { id: sesh.itemId}, product: { id: productId}},
        resolveField: 'id, quantity'
    });

    const [existingCartItem] = allCartItems;
    if(existingCartItem){
        console.log("Thre are already increment");
    }

    return await context.lists.CartItem.updateOne({
        id: existingCartItem.id,
        data: { quantity: existingCartItem.quantity + 1},
    });

    return await context.lists.CartItem.createOne({
        data: {
            product: { connect: { id: productId}},
            user: { connect: { id: sesh.itemId} }}
        }
    })
}

export default addToCart;