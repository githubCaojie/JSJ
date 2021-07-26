<template>
  <div class="nav">
    <el-row :gutter="24">
      <el-col :span="6">
        <div
          class="item item1"
          @mouseover="itemOver('item1')"
          @mouseleave="itemLeave"
        >
          <transition name="el-zoom-in-top">
            <div v-show="showId == '' || showId != 'item1'" class="transition-box default">
              <p class="img"><el-image :src="require('../../../assets/img/home/guozijianguan_big.png')"/></p>
              <p class="name">国资监管</p>
            </div>
          </transition>
          <transition name="el-zoom-in-bottom">
            <div v-show="showId == 'item1'" class="transition-box down">
              <div class="name">国资监督</div>
              <el-row>
                <el-col :span="12">
                  <div class="drop-down-item">
                    <p class="img"><el-image :src="require('../../../assets/img/home/guozijianguan_small.png')"/></p>
                    <span>监管指标</span>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="drop-down-item">
                    <p class="img"><el-image :src="require('../../../assets/img/home/sanzhongyida_small.png')"/></p>
                    <span>三重一大</span>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="drop-down-item">
                    <p class="img"><el-image :src="require('../../../assets/img/home/jianduzhuize_small.png')"/></p>
                    <span>监督追责</span>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="drop-down-item">
                    <p class="img"><el-image :src="require('../../../assets/img/home/zongheweiwen_small.png')"/></p>
                    <span>综合维稳</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </transition>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="item item2"
          @mouseover="itemOver('item2')"
          @mouseleave="itemLeave"
        >
          <transition name="el-zoom-in-top">
            <div v-show="showId == '' || showId != 'item2'" class="transition-box default">
              <p class="img"><el-image :src="require('../../../assets/img/home/richanguanli_big.png')"/></p>
              <p class="name">日常管理</p>
            </div>
          </transition>
          <transition name="el-zoom-in-bottom">
              <div v-show="showId == 'item2'" class="transition-box down">
                <div class="name">日常管理</div>
                <el-row>
                  <el-col :span="12">
                    <div class="drop-down-item">
                      <p class="img"><el-image :src="require('../../../assets/img/home/renzixitong_small.png')"/></p>
                      <span>人资系统</span>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="drop-down-item" @click="goOaSystem">
                      <p class="img"><el-image :src="require('../../../assets/img/home/oaguanli_small.png')"/></p>
                      <span>OA系统</span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </transition>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="item item3"
          @mouseover="itemOver('item3')"
          @mouseleave="itemLeave"
        >
          <transition name="el-zoom-in-top">
            <div v-show="showId == '' || showId != 'item3'" class="transition-box default">
              <p class="img"><el-image :src="require('../../../assets/img/home/caiwuzichan_big.png')"/></p>
              <p class="name">财务资产</p>
            </div>
          </transition>
          <transition name="el-zoom-in-bottom">
              <div v-show="showId == 'item3'" class="transition-box down">
                <div class="name">财务资产</div>
                <el-row>
                  <el-col :span="12">
                    <div class="drop-down-item">
                      <p class="img"><el-image :src="require('../../../assets/img/home/caiwuxitong_small.png')"/></p>
                      <span>财务共享</span>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="drop-down-item">
                      <p class="img"><el-image :src="require('../../../assets/img/home/caiwuzichan_small.png')"/></p>
                      <span>资产管理</span>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="drop-down-item">
                      <p class="img"><el-image :src="require('../../../assets/img/home/chanquanguanli_small.png')"/></p>
                      <span>产权管理</span>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="drop-down-item">
                      <p class="img"><el-image :src="require('../../../assets/img/home/shenjixitong_small.png')"/></p>
                      <span>审计系统</span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </transition>
        </div>
      </el-col>
      <el-col :span="6">
        <div
          class="item item4"
          @mouseover="itemOver('item4')"
          @mouseleave="itemLeave"
        >
          <transition name="el-zoom-in-top">
          <div v-show="showId == '' || showId != 'item4'" class="transition-box default">
            <p class="img"><el-image :src="require('../../../assets/img/home/shipinhuiyi_big.png')"/></p>
            <p class="name">视频会议</p>
            </div>
          </transition>
          <transition name="el-zoom-in-bottom">
              <div v-show="showId == 'item4'" class="transition-box down">
                <div class="name">视频会议</div>
                <el-row>
                  <el-col :span="12">
                    <div class="drop-down-item">
                      <p class="img"><el-image :src="require('../../../assets/img/home/shipinhuiyizhongxin_small.png')"/></p>
                      <span>视频会议中心</span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show3: true,
      showId: ''
    }
  },
  methods: {
    itemOver(id) {
      this.showId = id
    },
    itemLeave() {
      this.showId = ''
    },
    goOaSystem() {
      document.Loginform.submit();
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  .item{
    height: 175px;
    width: 100%;
    .default {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p.img {
        text-align: center;
      }
      .name {
        font-size: 20px;
        color: var(--white-color);
        margin-top: 25px;
      }
    }
    .down {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: calc(100% - 5.04vw);
      margin: 0 2.52vw;
      .name {
        color: var(--white-color);
        font-size: 20px;
        line-height: 32px;
        border-bottom: 3px solid var(--white-color);
        display: inline-block;
        position: relative;
        margin-bottom: 20px;
      }
      .name::before {
        content: "";
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid var(--white-color);
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
      .drop-down-item {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: var(--white-color);
        margin-top: 15px;
        cursor: pointer;
        white-space: nowrap;
        p.img {
          margin-right: 10px;
          flex: 0 0 24px;
        }
      }
      .el-row {
        width: 100%;
        height: 63px;
        overflow: scroll;
        .el-col:nth-child(even) .drop-down-item {
          justify-content: flex-end;
        }
        .el-col:nth-child(1) .drop-down-item, .el-col:nth-child(2) .drop-down-item {
          margin-top: 0;
        }
      }
    }
  }
  .item1 {
    background: url('../../../assets/img/home/guozijiandu_bg.png');
  }
  .item2 {
    background: url('../../../assets/img/home/richangguanli_bg.png');
  }
  .item3 {
    background: url('../../../assets/img/home/caiwuzichan_bg.png');
  }
  .item4 {
    background: url('../../../assets/img/home/shipinhuiyi_bg.png');
  }
}
</style>