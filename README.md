主要技术栈：<br/>
- react
- react-router
- redux
- react-weui

## 运行
打开一个终端，进入到react-zsm目录安装依赖包（注意：如果`npm install` 不能正常安装完成，请使用`cnpm install`进行安装）
```
 npm install

 npm run dev

 访问路径：http://localhost:8081
```

## 主要目录结构
```
├── app                      # 程序文件
│   ├── API                  # 接口文档
│   ├── components           # 全局公共组件
│   ├── config               # 域名配置
│   ├── container            # 路由组件
│   ├── lib                  # 第三方库
│   ├── redux                # Redux管理(store,reducer)
│   ├── static               # 全局静态文件(js,css,images)
│   ├── routes               # 前端路由管理
│   │      ├── Course             # 课程路由组件
│   │      │      ├── assets            # 样式文件
│   │      │      ├── components        # 视图组件
│   │      │      ├── containers        # 数据组件
│   │      │      ├── index.js          # 路由入口文件
│   │      ├── Discuss            # 讨论区路由组件
│   │      ├── Home               # 首页路由组件
│   │      └── ...                ...
│   └── index.js             # 项目入口文件
├── build                    # webpack打包文件
├── webpack.config           # webpack相关配置
```





