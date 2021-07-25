<template>
  <div class="nav">
    <el-row :gutter="48">
      <el-col :span="3">
        <div class="nav-list">
          <p class="name">决策类</p>
          <div class="item-box">
            <div class="item orange">
              <p class="img"><el-image :src="require('../../../assets/img/home/juecezhichi_icon.png')"/></p>
              <p class="item-name">决策支持</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="nav-list">
          <p class="name">经营管理类</p>
          <div class="item-box">
            <el-row :gutter="24">
              <el-col :span="48">
              <div class="item blue">
                <p class="img"><el-image :src="require('../../../assets/img/home/xiangmuyunyinguanli_icon.png')"/></p>
                <p class="item-name">项目运营管理</p>
              </div>
              </el-col>
              <el-col :span="48">
                <div class="item blue">
                  <p class="img"><el-image :src="require('../../../assets/img/home/caigouguanli_icon.png')"/></p>
                  <p class="item-name">采购管理</p>
                </div>
              </el-col>
              <el-col :span="48">
                <div class="item blue">
                  <p class="img"><el-image :src="require('../../../assets/img/home/renliziyuan_icon.png')"/></p>
                  <p class="item-name">人力资源</p>
                </div>
              </el-col>
              <el-col :span="48">
                <div class="item blue">
                  <p class="img"><el-image :src="require('../../../assets/img/home/anquanguanli_icon.png')"/></p>
                  <p class="item-name">安全管理</p>
                </div>
              </el-col>
              <el-col :span="48">
                <div class="item blue">
                  <p class="img"><el-image :src="require('../../../assets/img/home/chubanguanli_icon.png')"/></p>
                  <p class="item-name">出版管理</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="nav-list">
          <p class="name">日常管理类</p>
          <div class="item-box">
            <el-row :gutter="24">
              <el-col :span="12">
                <div class="item skyblue">
                  <p class="img"><el-image :src="require('../../../assets/img/home/zhihuidangjian_icon.png')"/></p>
                  <p class="item-name">智慧党建</p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="item skyblue">
                  <p class="img"><el-image :src="require('../../../assets/img/home/xingzhenguanli_icon.png')"/></p>
                  <p class="item-name">行政管理</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.el-col-48 {
  width: 20%;
}
.nav {
  width: 100%;
  .nav-list {
    .name {
      font-size: var(--the-title-font-size);
      font-weight: bold;
      color: #415261;
      position: relative;
      text-indent: var(--the-title-font-size);
      line-height: 21px;
      margin-bottom: 29px;
    }
    .name::before {
      content: "";
      width: 3px;
      height: 16px;
      background: #415261;
      position: absolute;
      left: 0;
      top: 1.5px;
    }
    .item-box {
      .item {
        width: 100%;
        height: 150px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        .item-name {
          font-size: 14px;
          font-weight: 400;
          line-height: 19px;
          margin-top: 16px;
          color: var(--white-color);
        }
      }
    }
    .item.orange {
      background: linear-gradient(180deg, #FE9B66 0%, #EF7230 100%);
    }
    .item.blue {
      background: linear-gradient(180deg, #3170B8 0%, #003A7C 100%);
    }
    .item.skyblue {
      background: linear-gradient(180deg, #4CB9F6 0%, #1F8ECD 100%);
    }
  }
}
</style>