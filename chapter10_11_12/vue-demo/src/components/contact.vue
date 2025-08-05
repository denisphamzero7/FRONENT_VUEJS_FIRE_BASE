<template>
  <div class="contact-app">
 
    <ContactOwner 
      :owner-name="ownerName" 
      @update-owner="updateOwner"
    />
    

    <AddContactForm 
      @add-contact="addContact"
    />
    

    <ContactList 
      :contacts="contacts"
      :owner-name="ownerName"
      @toggle-favorite="toggleFavorite"
      @remove-contact="removeContact"
    />
  </div>
</template>

<script>
import ContactOwner from './ContactOwner.vue'
import AddContactForm from './AddContactForm.vue'
import ContactList from './ContactList.vue'

export default {
  name: 'ContactApp',
  components: {
    ContactOwner,
    AddContactForm,
    ContactList
  },
  data() {
    return {
      ownerName: 'dotnetmastery',
      contacts: [
        {
          id: 1,
          name: 'HÁU',
          email: '@GMAIL.COM',
          phone: '123131231',
          isFavorite: false
        },
        {
          id: 2,
          name: 'Bella',
          email: '-n/a-',
          phone: '5554443333',
          isFavorite: true
        },
        {
          id: 3,
          name: 'Ben',
          email: '',
          phone: '',
          isFavorite: false
        }
      ]
    }
  },
  methods: {
    updateOwner(newOwner) {
      this.ownerName = newOwner
    },
    addContact(newContact) {
      const contact = {
        id: Date.now(),
        ...newContact,
        isFavorite: false
      }
      this.contacts.push(contact)
    },
    toggleFavorite(contactId) {
      const contact = this.contacts.find(c => c.id === contactId)
      if (contact) {
        contact.isFavorite = !contact.isFavorite
      }
    },
    removeContact(contactId) {
      this.contacts = this.contacts.filter(c => c.id !== contactId)
    }
  }
}
</script>

<style scoped>
.contact-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.contact-app > * {
  width: 100%;
  max-width: 600px;
}
</style>