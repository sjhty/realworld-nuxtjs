<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.image"
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="user.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="logOut">Or click here to logout.</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, updateUser } from '@/api/user'
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: "SettingsIndex",
  middleware: "authenticated",
  data() {
    return {
      user: {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: ''
      },
      errors: ''
    }
  },
  async mounted() {
    try {
      const { data } = await getUser()
      this.user = data.user
    } catch(err) {
      this.errors = err.massage
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await updateUser(this.user)
        this.$store.commit('setUser', data.user)
        Cookie.set('user', data.user)
        this.$router.push('/') 
      } catch(err) {
        this.errors = err.massage
      }
    },
    logOut() {
      this.$store.commit('logOut')
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>