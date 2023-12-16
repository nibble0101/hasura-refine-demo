import React from "react";
import {
  IResourceComponentsProps,
  BaseRecord,
  useTranslate,
} from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DeleteButton,
  MarkdownField,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const BlogPostList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,

    meta: {
      fields: [
        "id",
        "title",
        { category: ["id", "title"] },
        "category_id",
        "content",
        "created_at",
      ],
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={translate("blog_posts.fields.id")}
        />
        <Table.Column
          dataIndex="title"
          title={translate("blog_posts.fields.title")}
        />
        <Table.Column
          dataIndex={["category", "title"]}
          title={translate("blog_posts.fields.category")}
        />
        <Table.Column
          dataIndex="content"
          title={translate("blog_posts.fields.content")}
          render={(value: any) => (
            <MarkdownField value={value.slice(0, 80) + "..."} />
          )}
        />
        <Table.Column
          dataIndex={["created_at"]}
          title={translate("blog_posts.fields.created_at")}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
