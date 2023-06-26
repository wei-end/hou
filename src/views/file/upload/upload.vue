<template>
  <div>
    <title>涉及到blob file fileReader 详细文档见md文档</title>
    <input type="file" @change="fileChange" />
    <img :src="imgSrc" alt="" v-if="imgSrc" />
    <div>文件名称:{{ fileName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "", //文件url或者base64
      fileName: "", //文件名称
      current: 0, //断点续传的时候记录的位置
    };
  },
  methods: {
    async fileChange(e) {
      //   console.log();
      let file = e.target.files[0];
      console.log(file);
      //现在获取文件的所有信息
      /*
        name:文件名称   可以回显使用
        size:文件大小   可以做文件大小限制,单位b
        type:文件类型   可以做文件类型限制
      */
      //图片显示方式一  文件转成blob   url的形式进行显示
      //   let url = URL.createObjectURL(file);
      //   this.imgSrc = url;
      //   this.fileName = file.name;
      //图片显示方式二 文件转成base64格式进行回显
      //   let fileReader = new FileReader();
      //   fileReader.readAsDataURL(file);
      //   fileReader.onload = (res) => {
      //     // console.log(res);
      //     this.imgSrc = res.target.result;
      //     this.fileName = file.name;
      //   };

      /*文件上传的两种方式:
        方式一: 利用字符串上传base64
        方式二: 利用formData 上传file对象;
      */
      //  方式一:  上面获取到的base64数据可以直接传给后台
      //  方式二:  formdata的形式进行文件上传
      //   let formdata = new FormData();
      //   formdata.append("file", file);
      //   如果还要传一些其他的数据,使用append添加就行
      //   formdata.append("name", "张三");
      //   发送数据传formdata就行

      //切片上传,文件较大时可以使用
      //文件切片显示
      //   每次切30kb
      //   let slice = file.slice(0, 30 * 1024);
      //   console.log(slice);
      //   //   回显一部分
      //   this.imgSrc = URL.createObjectURL(slice);
      //   切片上传每次切完调一下接口,文件名称一样就行,最终后台拼接起来

      //断点续传
      //每次都记录一下切到位置,然后记录在localstroage中,之后进行上传未上传的就行
      //   let current = 0; //定义上传的切片位置
      let dw = 2 * 1024 * 1024; //定义切片的大小
      while (this.current < file.size) {
        localStorage.setItem("current", this.current);
        let slice = file.slice(this.current, this.current + dw);
        let forData = new FormData();
        forData.append(file.name, slice);
        let res = await 调接口传参forData;
        if (res.code == 200) {
          this.current = this.current + dw;
        } else {
          //失败了退出循环,记录到 上次上传到的位置
          localStorage.setItem("current", this.current);
          break;
        }
      }
    },
  },
};
</script>

<style lang='less' scoped>
img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>