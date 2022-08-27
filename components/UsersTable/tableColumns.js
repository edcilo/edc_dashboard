import { format } from "date-fns";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

const sortOrder = (column, order_column, order) => {
  const sort = order === "asc" ? "ascend" : "descend";
  return order_column === column ? sort : false;
};

const getColumns = ({ order_column, order }) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
    sortOrder: sortOrder("name", order_column, order),
    render: (_, item) => (
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
    render: (is_active) =>
      is_active ? <CheckCircleFilled /> : <CloseCircleFilled />,
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
    sorter: true,
    sortOrder: sortOrder("created_at", order_column, order),
    align: "center",
    render: (created_at) => format(new Date(created_at * 1000), "yyyy/MM/dd"),
  },
];

export default getColumns;