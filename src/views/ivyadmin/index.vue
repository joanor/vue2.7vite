<template>
  <div>
    <div>我是ivyadmin首页</div>
    <el-button type="primary" size="default" @click="onClick">
      发出mock请求
    </el-button>

    <el-button type="primary" size="default" @click="onClickRequest">
      发出真实的请求
    </el-button>
  </div>
</template>

<script setup>
import { http } from '@/plugins/request'

const onClick = async () => {
  const res = await http.get({
    url: '/login',
  })

  console.log(`请求返回的结果`, res)
}

const onClickRequest = async () => {
  const res = await http.get({
    url: '/v7/weather/now',
    params: {
      key: 'bd593d99e47f4943adbeabb9b8ccc9f1',
      location: '116.41,39.92',
    },
  })
  console.log(`res======>`, res)
}
</script>

<style lang="scss" scoped></style>
