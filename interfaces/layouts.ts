import { IUser } from "@/interfaces";

export interface IBasicLayoutProps {
  children: React.ReactNode;
}

export interface IDasboardLayoutProps {
  user: IUser;
  children: React.ReactNode;
}
