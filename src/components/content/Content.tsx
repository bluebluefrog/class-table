import React from "react";
import { Typography } from "antd";
import "antd/dist/antd.css";

const { Title, Paragraph } = Typography;

const Content = () => {
  const blockContent: String = `超文本标记语言（英语：HyperText Markup
    Language，简称：HTML）是一种用于创建网页的标准标记语言。 您可以使用 HTML
    来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。
    在本教程中，您将学习如何使用 HTML 来创建站点。 HTML
    很容易学习！相信您能很快学会它！`;

  return (
    <Typography>
      <Title>HTML</Title>
      <Paragraph>
        超文本标记语言（英语：HyperText Markup
        Language，简称：HTML）是一种用于创建网页的标准标记语言。 您可以使用 HTML
        来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。
        在本教程中，您将学习如何使用 HTML 来创建站点。 HTML
        很容易学习！相信您能很快学会它！
      </Paragraph>
      <Title level={3}> HTML 实例</Title>
      <Paragraph>
        本教程包含了数百个 HTML 实例。 使用本站的编辑器，您可以轻松实现在线修改
        HTML，并查看实例运行结果。
      </Paragraph>

      <Title level={3}>Code</Title>
      <Paragraph>
        <pre>{blockContent}</pre>
      </Paragraph>
    </Typography>
  );
};

export default Content;
