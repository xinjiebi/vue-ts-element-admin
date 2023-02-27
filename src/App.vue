<template>
  <router-view/>
</template>

<style lang="less">
@import url(@/assets/sytle/lightConfig.less);
@import url(@/assets/sytle/neutraColor.less);
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box
}
html,body,#app{
  width: 100%;
  height: 100%;
  background-color: @background;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

</style>
