<template>
  <div class="hello">
    <h1>VueJS Cordova Demo</h1>
    <h2>Device Info</h2>
    <p v-for="(info, index) in deviceInfo" :key="index">
      {{ info.name }} - {{ info.value }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    deviceInfo: [
      {
        name: 'Cordova Version',
        value: device.cordova
      },
      {
        name: 'Model Name',
        value: device.model
      },
      {
        name: 'Platform Name',
        value: device.platform
      },
      {
        name: 'UUID',
        value: device.uuid
      },
      {
        name: 'OS Version',
        value: device.version
      },
      {
        name: 'Manufacturer Name',
        value: device.manufacturer
      },
      {
        name: 'Serial Number',
        value: device.serial
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
