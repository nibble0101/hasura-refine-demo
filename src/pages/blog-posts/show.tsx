import React from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
  useOne,
} from "@refinedev/core";
import { Show, TagField, TextField, MarkdownField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const BlogPostShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow({
    meta: { fields: ["id", "title", "content", "category_id"] },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: record?.category_id || "",
    queryOptions: {
      enabled: !!record,
    },
    meta: { fields: ["id", "title"] },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("blog_posts.fields.id")}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{translate("blog_posts.fields.title")}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{translate("blog_posts.fields.content")}</Title>
      <MarkdownField value={record?.content} />
      <Title level={5}>{translate("blog_posts.fields.category_id")}</Title>
      {categoryIsLoading ? <>Loading...</> : <>{categoryData?.data?.title}</>}
    </Show>
  );
};
