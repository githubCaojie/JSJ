<template>
  <div class="home">
    <el-header height="120px" class="top">
      <p class="img logo">
        <el-image :src="require('../../assets/img/home/logo.png')"/>
      </p>
      <div class="right">
        <div class="website-btn" @click="goWebsite">
          <p class="img"><el-image :src="require('../../assets/img/home/website_icon.png')"/></p>进入官网
        </div>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <p class="img"><el-image :src="require('../../assets/img/home/user_default_head.png')"/></p>您好<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-remove" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <div class="content">
      <class-list/>
      <div class="office-list">
        <el-row :gutter="24">
          <el-col :span="12">
            <div class="name">
              <p class="img"><el-image :src="require('../../assets/img/home/todo_icon.png')"/></p>
              待办审批事项
            </div>
            <div class="todo">
              <el-row :gutter="10">
                <el-col :span="6">
                  <el-badge :value="3" class="item">
                    <el-button>
                      <p><el-image :src="require('../../assets/img/home/renliziyuandaiban_icon.png')"/></p>
                      人力资源待办
                    </el-button>
                  </el-badge>
                </el-col>
                <el-col :span="6">
                  <el-badge :value="12" class="item">
                    <el-button>
                      <p><el-image :src="require('../../assets/img/home/xiangmuguanlidaiban_icon.png')"/></p>
                      项目管理待办
                    </el-button>
                  </el-badge>
                </el-col>
                <el-col :span="6">
                  <el-badge :value="2" class="item">
                    <el-button>
                      <p><el-image :src="require('../../assets/img/home/jingyingguanlidaiban_icon.png')"/></p>
                      经营管理待办
                    </el-button>
                  </el-badge>
                </el-col>
                <el-col :span="6">
                  <el-badge :value="12" class="item">
                    <el-button>
                      <p><el-image :src="require('../../assets/img/home/zhihuidangjiandaiban_icon.png')"/></p>
                      智慧党建待办
                    </el-button>
                  </el-badge>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="name">
              <p class="img"><el-image :src="require('../../assets/img/home/information_icon.png')"/></p>
              待办审批事项
            </div>
            <div class="information">
              <div class="nav">
                <div class="nav-item" :class="{active : informationActiveId == 'jituanxinwen'}" @click="informationNavClick('jituanxinwen')">集团新闻</div>
                <div class="nav-item" :class="{active : informationActiveId == 'zigongsidongtai'}" @click="informationNavClick('zigongsidongtai')">子公司动态</div>
                <div class="nav-item" :class="{active : informationActiveId == 'hangyezixun'}" @click="informationNavClick('hangyezixun')">行业资讯</div>
                <div class="nav-item" :class="{active : informationActiveId == 'meitiguanzhu'}" @click="informationNavClick('meitiguanzhu')">媒体关注</div>
              </div>
              <div class="main">
                <el-row>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>集团集中组织观看学习《生命重于泰山——学习习近平总书记关于安全生产</span>
                      <span>2021-06-23</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>方联民会见华邦控股集团董事局主席苏如春一行</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>集团召开平益、衡永高速科研课题立项评审专题会议</span>
                      <span>2021-06-18</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>省直工会检查验收航务工程公司 “模范职工之家”创建工作</span>
                      <span>2021-06-17</span>
                    </el-link>
                  </el-col>
                  <el-col class="link-item">
                    <el-link :underline="false">
                      <span>陈飞岳阳调研 方联民陪同</span>
                      <span>2021-06-17</span>
                    </el-link>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="name">
              <p class="img"><el-image :src="require('../../assets/img/home/focus_icon.png')"/></p>
              我的关注
            </div>
            <div class="focus">
              <el-row>
                <el-col class="link-item">
                  <el-link :underline="false">
                    <span>省交通运输厅</span>
                    <span>2021-06-18</span>
                  </el-link>
                </el-col>
                <el-col class="link-item">
                  <el-link :underline="false">
                    <span>省交通运输厅</span>
                    <span>2021-06-18</span>
                  </el-link>
                </el-col>
                <el-col class="link-item">
                  <el-link :underline="false">
                    <span>省交通运输厅</span>
                    <span>2021-06-18</span>
                  </el-link>
                </el-col>
                <el-col class="link-item">
                  <el-link :underline="false">
                    <span>省交通运输厅</span>
                    <span>2021-06-18</span>
                  </el-link>
                </el-col>
                <el-col class="link-item">
                  <el-link :underline="false">
                    <span>省交通运输厅</span>
                    <span>2021-06-18</span>
                  </el-link>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="name">
              <p class="img"><el-image :src="require('../../assets/img/home/gongzuojihua_icon.png')"/></p>
              工作计划
            </div>
            <div class="gantt">
              <gantt class="left-container"></gantt>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 单点登录代码 -->
    <form name="Loginform" method="post" action='http://oa.hncc-china.com:8500/login/VerifyLogin.jsp' v-show="false">
      loginid:<input name="loginid" value="18627548852">
      <br>
      userpassword:<input name="userpassword" value="qweASD123">
      logintype:<input name="logintype" value="1">
      <br>
    </form>
  </div>
</template>

<script>
import classList from './childComps/classList.vue'
import Gantt from '../../components/gantt/gantt.vue'

export default {
  name: 'home',
  components: {
    classList,
    Gantt
  },
  data () {
    return {
      informationActiveId: 'jituanxinwen'
    }
  },
  methods: {
      // 进入官网
    goWebsite() {
      window.open('http://www.hncc-china.com/')
    },
    informationNavClick(type) {
      this.informationActiveId = type
    },
    // 监听用户按钮的点击
    handleCommand(command) {
      // 退出登录
      if(command === "logout") {
        this.$confirm('是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已成功退出!',
          });
          this.$router.push({
            path: 'login'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      }
    },
  }
}
</script>

<style lang="less" scoped>
.home {
  background: url('../../assets/img/home/home_bg.png') center center / 100% 100% no-repeat;
  position: relative;
  width: 100vw;
  padding-bottom: 7.37vw;
  .top {
    margin: 0 7.37vw;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    .right {
      display: flex;
      .website-btn {
        color: var(--white-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #79A9D8;
        padding-right: 25px;
        border-right: 1px solid #79A9D8;
        cursor: pointer;
        p.img {
          margin-right: 10px;
        }
      }
    }
    .el-dropdown {
      padding-left: 24px;
      .el-dropdown-link {
        display: flex;
        align-items: center;
        color: #79A9D8;
        .img {
          width: 48px;
          height: 48px;
          margin-right: 12px;
        }
      }
    }
  }
  .content {
    margin: 0 7.37vw;
    // height: calc(100vh - 156px);
    background: var(--white-color);
    padding: 24px;
    overflow: scroll;
    background-image: url('../../assets/img/home/bg.png');
    background-size: 100% 100%;
    background-position: bottom right;
    .office-list {
      height: 100%;
      overflow: scroll;
      .el-row {
        height: 100%;
        .el-col {
          // height: calc(100% / 2);
          height: 327px;
        }
      }
      .name {
        height: 48px;
        display: flex;
        align-items: center;
        font-size: var(--the-title-font-size);
        color: #415261;
        background: linear-gradient(90deg, rgba(214, 232, 243) 0%, rgba(247, 250, 252) 100%);
        margin-top: 23px;
        .img {
          margin: 0 8px 0 12px;
        } 
      }
      .link-item {
        display: flex;
        align-items: center;
        width: 100%;
        height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #415261;
        position: relative;
        /deep/ .el-link {
          position: relative;
          width: 100%;
          .el-link--inner {
            padding: 0 6px;
            display: flex;
            justify-content: space-between;
            width: calc(100% - 12px);
            span:first-child {
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        /deep/ .el-link::before {
          content: "";
          width: 4px;
          height: 4px;
          background: #415261;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      .todo {
        margin-top: 16px;
        height: calc(100% - 87px);
        // overflow: scroll;
        .item {
          width: 100%;
          /deep/ .el-button {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            border: 1px solid #CAD7E0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--the-body-font-size);
            span {
              display: flex;
              align-items: center;
              p {
                flex: 0 0 25px;
                margin-right: 12px;
              }
            }
          }
          /deep/ .el-badge__content {
            // top: 15px;
            right: 15px;
            background-color: #EF7230
          }
        }
      }
      .information {
        height: calc(100% - 87px);
        display: flex;
        margin-top: 16px;
        overflow-y: scroll;
        position: relative;
        .nav {
          width: 97px;
          flex: 0 0 100px;
          position: relative;
          border-right: 1px solid #CAD7E0;
          .nav-item {
            height: 48px;
            font-size: var(--the-body-font-size);
            color: #415261;
            line-height: 48px;
            text-indent: 12px;
          }
          .nav-item.active {
            color: #1F8ECD;
            font-weight: bold;
            position: relative;
          }
          .nav-item.active::before {
            content: "";
            width: 0;
            height: 0;
            border-top: 4px solid transparent;
            border-left: 5px solid #1F8ECD;
            border-bottom: 4px solid transparent;
            position: absolute;
            right: -6px;
            top: 50%;
            transform: translateY(-50%);
          }
          .nav-item.active::after {
            content: "";
            width: 2px;
            height: 100%;
            background: #1F8ECD;
            position: absolute;
            right: -2px;
            top: 0;
          }
        }
        .main {
          width: calc(100% - 95px);
          overflow: scroll;
          .link-item {
            padding: 0 33px;
            height: 48px;
          }
        }
      }
      .focus {
        height: calc(100% - 87px);
        overflow: scroll;
        margin-top: 16px;
        .el-row {
          .el-col {
            height: 48px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #CAD7E0;
          }
        }
      }
      .gantt {
        height: calc(100% - 87px);
        margin-top: 16px;
      }
    }
  }
}
</style>