import Link from "next/link";
import { format } from "date-fns";
import { SortOrder } from "antd/lib/table/interface";
import {
  EditFilled,
  EyeFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  SettingFilled,
} from "@ant-design/icons";
import { Button, Space, TableColumnsType } from "antd";
import { IUser } from "@/interfaces";
import { IQueryParams } from "@/interfaces/user";
import urls from "@/config/urls";

const sortOrder = (
  column: string,
  order_column: string,
  order: string
): SortOrder => {
  const sort = order === "asc" ? "ascend" : "descend";
  return order_column === column ? sort : null;
};

const getColumns = ({
  order_column,
  order,
}: IQueryParams): TableColumnsType => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
    sortOrder: sortOrder("name", order_column, order),
    render: (_: string, item: IUser): JSX.Element => (
      <>
        {item.name} {item.lastname} {item.second_lastname}
      </>
    ),
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
    sorter: true,
    sortOrder: sortOrder("email", order_column, order),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    sorter: true,
    sortOrder: sortOrder("phone", order_column, order),
  },
  {
    title: "Active",
    dataIndex: "is_active",
    key: "is_active",
    align: "center",
    render: (is_active: boolean): JSX.Element =>
      is_active ? <CheckCircleFilled /> : <CloseCircleFilled />,
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
    sorter: true,
    sortOrder: sortOrder("created_at", order_column, order),
    align: "center",
    render: (created_at: number): JSX.Element => (
      <>{format(new Date(created_at * 1000), "yyyy/MM/dd")}</>
    ),
  },
  {
    title: <SettingFilled />,
    dataIndex: "actions",
    key: "actions",
    align: "center",
    render: (_: undefined, item: IUser): JSX.Element => (
      <Space>
        <Link href={urls.user.detail(item.id)}>
          <Button type="primary" href="" icon={<EyeFilled />} />
        </Link>
        <Link href={urls.user.update(item.id)}>
          <Button className="warning" href="" icon={<EditFilled />} />
        </Link>
      </Space>
    ),
  },
];

export default getColumns;
