<template>
  <div class="contact-owner">
    <label for="owner-name">TÊN LIÊN LẠC:</label>
    <input 
      id="owner-name"
      type="text" 
      :value="ownerName"
      @input="updateOwnerName"
      class="owner-input"
    />
  </div>
</template>

<script>
export default {
  name: 'ContactOwner',
  props: {
    ownerName: {
      type: String,
      required: true
    }
  },
  methods: {
    updateOwnerName(event) {
      this.$emit('update-owner', event.target.value)
    }
  }
}
</script>

<style scoped>
.contact-owner {
  margin-bottom: 20px;
  width: 100%;
}

.contact-owner label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.owner-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style> 