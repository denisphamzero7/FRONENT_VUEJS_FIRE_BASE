<template>
  <div class="add-contact-form">
    <h3>thêm liên hệ
      
    </h3>
    <form @submit.prevent="addContact">
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          id="name"
          type="text" 
          v-model="contact.name"
          required
          class="form-input"
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          id="email"
          type="email" 
          v-model="contact.email"
          class="form-input"
        />
      </div>
      
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input 
          id="phone"
          type="text" 
          v-model="contact.phone"
          class="form-input"
        />
      </div>
      
      <button type="submit" class="add-button">Add Contact</button>
    </form>
  </div>
</template>

<script setup>
import {reactive,defineEmits} from 'vue';
const emit = defineEmits(['add-contact']);
const contact = reactive({
  name: '',
  email: '',
  phone: ''
});
const addContact = () => {
  if (contact.name) {
    emit('add-contact', { ...contact });
    contact.name = '';
    contact.email = '';
    contact.phone = '';
  }
};
</script>

<style scoped>
.add-contact-form {
  background: #000;
  border: 1px solid #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 100%;
}

.add-contact-form h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  color: #fff;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.add-button {
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.add-button:hover {
  background: #555;
}
</style> 