<template>
  <div class="contact-app">
    <!-- Nhập owner name -->
    <div class="mb-3">
      <label>
        Owner name:
        <input v-model="ownerName" class="form-control" />
      </label>
    </div>

    <!-- Nhập max lucky number -->
    <div class=" mb-4">
      <label>
        Max lucky number:
        <input
          type="number"
          v-model.number="maxNumber"
          min="1"
          class="form-control"
        />
      </label>
    </div>

    <!-- Form thêm contact -->
    <AddContactForm @add-contact="addContact" />

    <!-- Danh sách contacts -->
    <ContactList
      :contacts="contacts"
      :owner-name="ownerName"
      :max-number="maxNumber"
      @toggle-favorite="toggleFavorite"
      @remove-contact="removeContact"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ContactList from './ContactList.vue'
import AddContactForm from './AddContactForm.vue'

const ownerName = ref('hau')
const maxNumber = ref(10)

const contacts = reactive([
  { id: 1, name: 'HÁU',    email: '@GMAIL.COM',    phone: '123131231', isFavorite: false },
  { id: 2, name: 'phương', email: 'phuong@gmail.com', phone: '5554443333', isFavorite: true },
  { id: 3, name: 'Ben',    email: '',              phone: '',           isFavorite: false },
])

function addContact(newContact: any) {
  contacts.push({ id: Date.now(), ...newContact, isFavorite: false })
}

function toggleFavorite(id: number) {
  const c = contacts.find(x => x.id === id)
  if (c) c.isFavorite = !c.isFavorite
}

function removeContact(id: number) {
  const idx = contacts.findIndex(x => x.id === id)
  if (idx !== -1) contacts.splice(idx, 1)
}
</script>

<style scoped>
.contact-app { max-width: 600px; margin: 0 auto; padding: 20px; }
</style>
