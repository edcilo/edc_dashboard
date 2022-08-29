import {
  CalendarOutlined,
  PhoneOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { format } from "date-fns";
import { IUser } from "@/interfaces";
import { IProfileItem } from "@/interfaces/user";

const profileItems = (user: IUser): IProfileItem[] => [
  {
    icon: <PhoneOutlined />,
    label: "Phone",
    value: user.phone,
  },
  {
    icon: <CalendarOutlined />,
    label: "Birthday",
    value: user.profile.birthday,
  },
  {
    icon: <UserAddOutlined />,
    label: "Created at",
    value: format(new Date(user.created_at * 1000), "MMMM dd, yyyy"),
  },
];

export default profileItems;
