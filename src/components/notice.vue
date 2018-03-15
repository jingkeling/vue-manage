<template>
  <div>
    <Button type="primary" @click="open(false)">手动通知</Button>
    <Button @click="open(true)">Open notice(only title)</Button>
  </div>
</template>
<script>
  export default {
    methods: {
      open (nodesc) {
        this.$Notice.open({
          title: 'Notification title',
          desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
        });
      }
    }
  }
</script>
