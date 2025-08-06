<template>
  <div class="contact-card">
    <div class="info">
      <h4>{{ contact.name }}</h4>
      <p>Email: {{ contact.email || '-n/a-' }}</p>
      <p>Phone: {{ contact.phone || '-n/a-' }}</p>
      <small>*belongs to {{ ownerName }}</small>
    </div>

    <div class="actions">
      <button @click="toggleFav" :class="contact.isFavorite ? 'btn-warning' : 'btn-success'">
        {{ contact.isFavorite ? 'Unfavorite' : 'Favorite' }}
      </button>
      <button @click="remove" class="btn-danger">Remove</button>
     
    </div>
      <div class="lucky mr-50">
      <LuckyNumber :max-number="maxNumber" />
    </div>

   
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import LuckyNumber from './LuckyNumber.vue'

const props = defineProps({
  contact:    { type: Object, required: true },
  ownerName:  { type: String, required: true },
  maxNumber:  { type: Number, required: true },
})
const emit = defineEmits(['toggle-favorite','remove-contact'])

function toggleFav() { emit('toggle-favorite', props.contact.id) }
function remove()    { emit('remove-contact', props.contact.id) }
</script>

<style scoped>
.contact-card {
  background: linear-gradient(135deg,#4caf50,#2196f3);
  color: white; padding: 12px; margin-bottom: 12px;
  border-radius: 6px; position: relative;
}
.actions { margin-top: 8px; display: flex; gap: 6px; }
.actions button { padding: 6px 10px; border: none; color: white; cursor: pointer; }
.btn-success { background: #4caf50; } .btn-warning { background: #ff9800; }
.btn-danger  { background: #f44336; }
.lucky { position: absolute;  right: 0;  left: 20px;}
</style>
