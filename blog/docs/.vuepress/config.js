module.exports = {
  title: "文档测试", // 设置网站标题
  description: "Adroi",
  base: "/v1/adroi-h5/adroiapi/",
  themeConfig: {
    nav: [
      { text: "git规范", link: "/Git命令及代码规范" },
      { text: "切换测试", link: "/分表" },
    ],
    sidebar: {
      "/": ["Git命令及代码规范", "分表"],
    },
    sidebarDepth: 2,
  },
};
