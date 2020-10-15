<template>
  <!-- <div id="app">
    <Row >
      <Col span="4" offset="4">
          <img src="./assets/wLogo.png" alt="logo" class="logo-image" >
      </Col>
      <Col span="12">
        <Menu mode="horizontal"  active-name="1"  >
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">主页</router-link> |
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              <router-link to="/project">项目</router-link>
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              <router-link to="/resume">简历</router-link>
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              <router-link to="/notes">笔记</router-link>
            </MenuItem>
          
        </Menu>
      </Col>
    </Row>

    <Content
      :style="{
        margin: '88px 20px 0',
        background: '#fff',
        minHeight: '500px',
      }"
    >
      <router-view />
    </Content>
    <Footer class="layout-footer-center">2018-2023 &copy; Wulijingjing</Footer>
  </div> -->
  <div class="layout">
    <Layout>
      <Header
        :style="{ position: 'fixed', width: '100%', backgroundColor: 'white' }"
      >
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-logo">
            <img src="./assets/wLogo.png" alt="logo" class="logo-image" style="width:60px;" />
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">主页</router-link>   
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              <router-link to="/project">项目</router-link>
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              <router-link to="/resume">简历</router-link>
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              <router-link to="/notes">笔记</router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content
        :style="{
          margin: '88px 20px 0',
          background: '#fff',
          minHeight: '900px',
        }"
      >
        Content
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>


<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 0px;
  left: 10%;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 10%;
}
.layout-footer-center {
  text-align: center;
}
</style>

