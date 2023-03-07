<template>
  <div class="home">
    <div class="menuBox">
      <div class="menuHeader">
        <img src="@/assets/head.png" alt="" />
        <h5 class="subTitle1">Welcome BiBi :)</h5>
        <h6 class="subTitle3">XiYouMi Design</h6>
        <div class="searchBox">
          <p class="body2">Search something</p>
        </div>
      </div>
      <el-menu
        :default-active="routerPath"
        router
        background-color="rgba(0,0,0,0)"
      >
        <el-menu-item
          v-for="item in menuList"
          :index="item['path']"
          :key="item['path']"
          @click="toPath(item['meta']['title'])"
        >
          <el-icon>
            <component :is="item['meta']['icon']"></component>
          </el-icon>
          <span>{{ item["meta"]["title"] }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <PageHeader :pageHeader="pageHeader"></PageHeader>
      <router-view class="viewPage"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useRouter } from "vue-router";
import PageHeader from "@/components/PageHeader.vue";

@Options({
  components:{
    PageHeader
  },
  mounted() {
    // 获取路由中的meta信息
    this.menuList = useRouter()
      .getRoutes()
      .filter((listArr) => listArr.meta.isShow);
    this.pageHeader = this.$route.meta.title;
    this.routerPath = this.$route.path;
  },
})
export default class HomeView extends Vue {
  menuList = [];
  routerPath = "";
  pageHeader = "";
  toPath(title: string) {
    this.pageHeader = title;
  }
}
</script>

