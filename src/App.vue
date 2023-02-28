<template>
  <router-view />
</template>

<style lang="less">
@import url(@/assets/sytle/lightConfig.less);
// @import url(@/assets/sytle/darkConfig.less);
@import url(@/assets/sytle/neutraColor.less);
@import url(@/assets/sytle/fontstyle.less);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  min-width: 1280px;
  background-color: @background;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.signInBox {
  background-color: @mainColor;
  .el-form-item__label {
    color: @soft50;
  }
  .header3 {
    color: @soft100;
  }
}
.cutline {
  background-color: @soft15;
  width: 100%;
  height: 1px;
  margin: 10px 0;
}
.cutlineHeavy {
  background-color: @disable;
  width: 100%;
  height: 1px;
  margin: 10px 0;
}
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  .menuBox {
    background-color: @mainColor;
    width: 200px;
    height: 100vh;
    padding: 50px 0;
    .searchBox {
      width: 168px;
      height: 26px;
      margin: 0 16px;
      background-color: @heavy15;
      border-radius: 4px;
      margin-bottom: 12px;
      p {
        color: @heavy50;
      }
    }
    .menuHeader {
      text-align: center;
      img {
        width: 52px;
        height: 52px;
        border-radius: 100%;
      }
      h5 {
        color: @soft100;
      }
      h6 {
        color: @soft50;
      }
    }
    .el-menu {
      border-right: solid 1px rgba(0, 0, 0, 0);
    }
    .el-menu-item {
      color: @soft50;
    }
    .el-menu-item:hover {
      background-color: @contrastColor;
      color: @heavy100;
    }
    .is-active {
      background-color: @contrastColor;
      color: @heavy100 !important;
      font-weight: 900;
    }
  }
  .content {
    width: calc(100vw - 200px);
    .pageHeader {
      width: 100%;
      height: 52px;
      background-color: @soft100;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      h2 {
        line-height: 52px;
        color: @heavy100;
      }
      .enter {
        margin: 8px 0;
        .el-button {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
  .viewPage {
    width: 100%;
    height: calc(100vh - 52px);
    overflow: auto;
    // border: 1px solid red;
    padding: 20px;
  }
}
.dashboardCard {
  .el-card {
    border-radius: 12px;
    background-color: @soft100;
    border: none;
    color: @heavy100;
    h2 {
      height: 60px;
    }
  }

  .item {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
}
.el-col {
  margin-bottom: 20px;
}
</style>
