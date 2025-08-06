<template>
  <div class="contact-list">
    <h3>Contact List</h3>
    <div v-if="props.contacts.length === 0">
      Không tìm thấy liên lạc
    </div>
    <div v-else>
      <ContactCard
        v-for="c in props.contacts"
        :key="c.id"
        :contact="c"
        :owner-name="props.ownerName"
        :max-number="props.maxNumber"
        @toggle-favorite="$emit('toggle-favorite', $event)"
        @remove-contact="$emit('remove-contact', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import ContactCard from './ContactCard.vue'

interface Contact {
  id: number
  name: string
  email: string
  phone: string
  isFavorite: boolean
}

const props = defineProps({
  contacts: {
    type: Array as PropType<Contact[]>,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  maxNumber: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.contact-list {
  margin-top: 20px;
}
</style>
