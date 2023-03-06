<template>
  <router-view />
</template>

<style lang="less">
// light mode 颜色样式
@import url(@/assets/sytle/lightConfig.less);
// dark mode 颜色样式
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
  width: 100vw;
  height: 100vh;
  min-width: 1280px;
  overflow: hidden;
  background-color: @background;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
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
.el-card {
  // 去掉所有card的默认样式
  border-radius: 12px !important;
  background-color: @soft100 !important;
  border: none !important;
  color: @heavy100 !important;
}
.el-col {
  // 添加所有el-col的下间距
  margin-bottom: 20px !important;
}
.el-form-item__label {
  color: @heavy85 !important;
}
.el-input {
  --el-input-text-color: @heavy100 !important;
  --el-input-hover-border: @heavy15 !important;
  --el-input-focus-border: @heavy15 !important;
  --el-input-transparent-border: 0 0 0 1px transparent inset;
  --el-input-border-color: @heavy15 !important;
  --el-input-bg-color: @soft100 !important;
  --el-input-icon-color: @heavy50 !important;
  --el-input-placeholder-color: @soft50 !important;
}
.el-table__row {
  height: 58px;
}
.el-table {
  --el-table-border-color: @disable !important;
  --el-table-border: @heavy15 !important;
  --el-table-text-color: @heavy100 !important;
  --el-table-header-text-color: @heavy50 !important;
  --el-table-row-hover-bg-color: @heavy15 !important;
  --el-table-current-row-bg-color: @heavy15 !important;
  --el-table-header-bg-color: @soft100 !important;
  --el-table-fixed-box-shadow: var(--el-box-shadow-light);
  --el-table-bg-color: @soft100 !important;
  --el-table-tr-bg-color: @soft100 !important;
  --el-table-expanded-cell-bg-color: @soft100 !important;
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
}
.el-pagination {
  --el-pagination-bg-color: @soft100 !important;
  --el-pagination-text-color: @soft100 !important;
  --el-pagination-button-color: @heavy100 !important;
  --el-pagination-button-disabled-color: @heavy50 !important;
  --el-pagination-button-disabled-bg-color: @soft100 !important;
  --el-pagination-button-bg-color: @heavy100 !important;
  --el-pagination-hover-color: @green !important;
  color: @soft100 !important;
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
      min-width: 1080px;
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
.tableListBox {
  .el-card {
    max-width: 1280px;
    min-width: 1040px;
  }
}
.maxCard {
  .el-card {
    max-width: 1280px;
    min-width: 1040px;
    margin: 0 auto;
    .item {
      display: flex;
      justify-content: left;
      padding: 20px 0;
      border-bottom: 1px solid @disable;
      img {
        width: 160px;
        height: 96px;
      }
      .itemText {
        margin-left: 12px;
        p {
          margin-top: 2px;
          margin-bottom: 12px;
          span {
            margin-right: 12px;
          }
        }
        .itemButton {
          color: @heavy100;
          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .uploadBox {
    margin-left: 120px;
  }
  .buttonBox {
    margin-left: 120px;
    margin-top: 60px;
  }
}
.subCard {
  min-width: 1040px;
  .subNav {
    div {
      color: @heavy100;
      line-height: 48px;
    }
    div:hover {
      color: @mainColor;
    }
    .active {
      color: @mainColor;
    }
  }

}
</style>
