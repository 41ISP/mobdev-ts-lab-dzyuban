import { create } from "zustand";
import { IPayment, TNewPayment } from "./types";
import { nanoid } from "nanoid";

export interface IPaymentsState {
    items: IPayment[],
    addPayment: (data: TNewPayment) => void;
    removePayment: (id: string) => void;
    togglePaid: (id: string) => void;
}
export const usePaymentStore = create<IPaymentsState>() (set => ({
    items: [],
    addPayment: (data) => set((state) => {
        const newPayment = {
            ...data,
            id: nanoid(),
            paid: false
        };
        return {
            //достаём все платежи и вписываем в низ новый платёж, затем создаём новый список
            items: [...state.items, newPayment]
        };
    }),
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    removePayment: (id) => set((state) => ({
        // достаём из хранилища (const IPaymentsState) нужный нам массив items и отфильтровали его filter
        items: state.items.filter((item) => item.id !== id)
        
    })),
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    togglePaid: (id) => set((state) =>  ({
        items: state.items.map((item) => item.id === id ? {...item, paid: !item.paid} : item)
    }))
})