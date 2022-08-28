import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Input, PageHeader, Table } from "antd";
import getColumns from "./tableColumns";

export default function UsersTable({ users }) {
  const { query, pathname, push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(users.data);
  const [params, setParams] = useState(query);
  const [pagination, setPagination] = useState({
    current: users.pagination.page,
    pageSize: users.pagination.per_page,
    total: users.pagination.total,
  });

  useEffect(() => {
    const { data, pagination } = users;
    setLoading(false);
    setData(data);
    setPagination({
      current: pagination.page,
      pageSize: pagination.per_page,
      total: pagination.total,
    });
  }, [users]);

  useEffect(() => {
    setParams(query);
  }, [query]);

  const fetchData = (params) => {
    setLoading(true);
    push({
      pathname: pathname,
      query: { ...params },
    });
  };

  const searchHandler = (q) => {
    const newParams = { ...params, q };
    setParams(newParams);
    fetchData(newParams);
  };

  const paginationHandler = (newPagination, filters, sorter) => {
    const { current } = newPagination;
    const { column, field, order } = sorter;

    const newParams = {
      ...params,
      page: current,
    };

    if (column) {
      newParams["order_column"] = field;
      if (order === "ascend") {
        newParams["order"] = "asc";
      } else if (order === "descend") {
        newParams["order"] = "desc";
      }
    } else {
      delete newParams["order_column"];
      delete newParams["order"];
    }

    setParams(newParams);
    fetchData(newParams);
  };

  return (
    <>
      <PageHeader
        title="Users"
        extra={
          <>
            <Link href="/dashboard/users/new">
              <Button href="" icon={<PlusCircleFilled />} className="success">
                New User
              </Button>
            </Link>
            <Input.Search
              className={styles.search}
              value={params.q}
              placeholder="Search"
              onChange={(e) => setParams({ ...params, q: e.target.value })}
              onSearch={searchHandler}
            />
          </>
        }
      />

      <Table
        className={styles.table}
        columns={getColumns(params)}
        rowKey="id"
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={paginationHandler}
      />
    </>
  );
}
