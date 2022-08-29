import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SorterResult } from "antd/lib/table/interface";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Input, PageHeader, Table, TablePaginationConfig } from "antd";
import { IUser } from "@/interfaces";
import { IQueryParams, IUsersTableProps } from "@/interfaces/user";
import getColumns from "./tableColumns";

export default function UsersTable({ users }: IUsersTableProps): JSX.Element {
  const { query, pathname, push } = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IUser[]>(users.data);
  const [params, setParams] = useState<IQueryParams>(query);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
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

  const fetchData = (params: IQueryParams): void => {
    setLoading(true);
    push({
      pathname: pathname,
      query: { ...params },
    });
  };

  const searchHandler = (q: string): void => {
    const newParams = { ...params, q };
    setParams(newParams);
    fetchData(newParams);
  };

  const paginationHandler = (
    newPagination: TablePaginationConfig,
    filters: Record<string, string[]>,
    sorter: SorterResult<any>
  ): void => {
    const { current } = newPagination;
    const { column, field, order } = sorter;

    const newParams: IQueryParams = {
      ...params,
      page: current,
    };

    if (column) {
      newParams["order_column"] = field.toString();
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
