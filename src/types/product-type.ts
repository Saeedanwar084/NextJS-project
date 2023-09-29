import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  img: StaticImageData;
  title: string;
  price: string;
  category: string;
  description: string;
  status: string;
}