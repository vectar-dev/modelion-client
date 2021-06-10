import { Order } from "../interfaces/order.interface";

class orderService {


    allOrdersCollection: any = undefined;
    collection = "orders"

    async createOrder(order: Order) {
        try {
            window.db.collection(this.collection).add(order)
        } catch(e) {
            console.error("ERROR IN CREATE TOGGLE");
            throw e;
        }

    }

    async getOrders(): Promise<Order[]> {
        try {
            const collection = window.db.collection(this.collection).limit(15).orderBy('timestamp', 'desc');
            this.allOrdersCollection = collection;
            const snapshot = await collection.get();
            const toggles = snapshot.docs.map((doc: any) => {
                return doc.data();
            })
            return toggles;
        } catch(e) {
            console.error("ERROR IN GETORDERS");
            throw e;
        }
    }
    
    onUpdate(callback: (orders: Order[]) => void) {
        window.db.collection(this.collection).limit(15).orderBy('timestamp', 'desc').onSnapshot((querySnapshot: any) => {
            const orders: Order[] = [];
            querySnapshot.forEach((doc: any) => {
                orders.push(doc.data())
            })
            callback(orders);
        })
    }

}

export const OrderService = new orderService();