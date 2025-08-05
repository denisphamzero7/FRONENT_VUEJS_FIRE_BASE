<template>
  <div class="contact-list">
    <h3>Contact List</h3>
    <div v-if="contacts.length === 0" class="no-contacts">
      không tìm thấy liên lac
    </div>
    <div v-else>
      <ContactCard
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        :owner-name="ownerName"
        @toggle-favorite="handleToggleFavorite"
        @remove-contact="handleRemoveContact"
      />
    </div>
  </div>
</template>

<script>
import ContactCard from './ContactCard.vue'

export default {
  name: 'ContactList',
  components: {
    ContactCard
  },
  props: {
    contacts: {
      type: Array,
      required: true
    },
    ownerName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleToggleFavorite(contactId) {
      this.$emit('toggle-favorite', contactId)
    },
    handleRemoveContact(contactId) {
      this.$emit('remove-contact', contactId)
    }
  }
}
</script>

<style scoped>
.contact-list {
  margin-top: 20px;
  width: 100%;
}

.contact-list h3 {
  margin-bottom: 15px;
  color: #333;
}

.no-contacts {
  text-align: center;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #666;
  font-style: italic;
}
</style> 