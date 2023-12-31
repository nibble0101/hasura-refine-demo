import React from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
} from "@refinedev/core";
import { Show, TagField, TextField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const CategoryShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow({ meta: { fields: ["id", "title"] } });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("categories.fields.id")}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{translate("categories.fields.title")}</Title>
      <TextField value={record?.title} />
    </Show>
  );
};