<template>
    <div class="success-form">
      <h3>{{ $t(title) }}</h3>
      <p>{{ $t(description) }}</p>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
