# fuse.js   模糊搜索的库

# 下载依赖包fuse.js   npm i fuse.js

# 使用方法
 import Fuse from "fuse.js";
 data(){
  return { fuse:undefined}
 }
mounted(){
    //一般配置不用动 , 具体看官网
    this.fuse = new Fuse(list, {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
      {
        name: "title",
        weight: 0.7,
      },
      {
        name: "path",
        weight: 0.3,
      },
    ],
    });

    <!-- 触发搜索的时候调用 -->
    let arr = this.fuse.search('输入值');
}