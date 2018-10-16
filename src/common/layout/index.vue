<template>
  <div>
    {{ $t('header.test') }}
    {{ test }}
    <el-button @click="switchLanguage">切换语言</el-button>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: ''
    }
  },
  methods: {
    switchLanguage () {
      const locale = this.$i18n.locale
      this.$i18n.locale = locale === 'en' ? 'zh' : 'en'
      this.$message.success('你好')
    }
  },
  computed: {
    test () {
      return this.$store.state.test
    }
  }
}
</script>
