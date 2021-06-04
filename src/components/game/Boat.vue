<template>
  <div :class="'boat ' + (position != null ? position : '')">
    <div class="boat-bottom">
      <div class="squares">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </div>

    <div class="boat-behind"></div>
    <div class="boat-top-left"></div>
    <div class="boat-top-right"></div>
  </div>
</template>

<script>
export default {
  name: "Boat",
  props: {
    position: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>

<style scoped></style>
