<template>
  <div class="contact-card">
    <div class="contact-info">
      <h4>{{ contact.name }}</h4>
      <p><strong>Email:</strong> {{ contact.email || '-n/a-' }}</p>
      <p><strong>Phone:</strong> {{ contact.phone || '-n/a-' }}</p>
      <small class="owner-info">*this contact info belongs to {{ ownerName }}</small>
    </div>
    
    <div class="contact-actions">
      <button 
        @click="toggleFavorite"
        :class="['favorite-btn', contact.isFavorite ? 'remove-favorite' : 'add-favorite']"
      >
        {{ contact.isFavorite ? 'Remove from Favorite' : 'Add to Favorite' }}
      </button>
      
      <button 
        @click="removeContact"
        class="remove-btn"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    contact: {
      type: Object,
      required: true
    },
    ownerName: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.contact.id)
    },
    removeContact() {
      this.$emit('remove-contact', this.contact.id)
    }
  }
}
</script>

<style scoped>
.contact-card {
  background: linear-gradient(135deg, #4CAF50, #2196F3);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  flex: 1;
}

.contact-info h4 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.contact-info p {
  margin: 5px 0;
  font-size: 14px;
}

.owner-info {
  font-size: 12px;
  opacity: 0.8;
  display: block;
  margin-top: 10px;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.favorite-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
}

.add-favorite {
  background: #4CAF50;
  color: white;
}

.remove-favorite {
  background: #FF9800;
  color: white;
}

.remove-btn {
  padding: 8px 12px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.favorite-btn:hover,
.remove-btn:hover {
  opacity: 0.8;
}
</style> 