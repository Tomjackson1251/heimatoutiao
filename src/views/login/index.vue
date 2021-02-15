<template>
  <div class="login-container">
    <van-nav-bar class="page-nav-bar" title="登录" />

    <van-form @submit="onSubmit">
      <van-field v-model="user.mobile" name="手机号" placeholder="请输入手机号">
        <i slot="left-icon" class="iconfont toutiao-shouji"></i>
      </van-field>
      <van-field v-model="user.code" name="验证码" placeholder="请输入验证码">
        <i slot="left-icon" class="iconfont toutiao-yanzhengma"></i>
        <template #button>
          <van-button round size="small" class="send-sms-btn" type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  created() {},
  methods: {
    async onSubmit() {
      const user = this.user
      try {
        const res = await login(user)
        console.log('登陆成功', res)
      } catch (err) {
        if (err.response.status == 400) {
          console.log('手机号或验证码错误！')
        } else {
          console.log('登录失败，请稍后重试', err)
        }
      }
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    background-color: #ededed;
    width: 156px;
    height: 46px;
    line-height: 46px;
    .van-button__text {
      font-size: 22px;
      color: #666;
    }
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
