import { CartItem } from "@/context/ShopContext";
import { Timestamp } from "firebase/firestore";

export type Order = {
  orderId: string;
  userEmail: string;
  items: CartItem[];
  total: number;
  date: Timestamp;
};