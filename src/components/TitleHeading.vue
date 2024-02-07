<template>
    <component :is="`h${level}`" :class="{'title': true, 'with-icon': showIcon}">
        {{ title }}
    </component>
</template>
  
<script setup lang="ts">

defineProps({
    title: String,
    level: {
        type: [String, Number],
        default: 2
    },
    showIcon: {
        type: Boolean,
        default: true
    }
});
</script>
  
<style lang="scss">
.title {
    /* font-size: 32px; */
    font-weight: bold;
    margin-bottom: 20px;
    // padding-bottom: 20px;
    position: relative;
    color: #173b6c;
}

.with-icon {
    padding-bottom: 20px;
}

.with-icon::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #149ddd;
    bottom: 0;
    left: 0;
}
</style>
  