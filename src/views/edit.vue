<template>
<div class="page">
  <div class="addbar">
    <div class="apphead">
        <h2>Corporate Associate Announcements</h2>
      </div>    
      
    </div>
    <form @submit.prevent="handleSubmit">
        <div class="filterbar"> 
        <div class="savelink">
          <button>Save</button>
        </div>
    </div>
        <div class="form" >
          
        <div class="postinfo">
          <div class="sectionheader">
            <h2>Post Information</h2>
          </div>
          <div class="fields">
            <div class="itemfields">
            <label for="item" class="label">Item</label>
            <br>
            <input type="text" v-model="item" class="itemfield">
            </div>
            <div class="posttype">           
            <label for="" class="type label">Post Type</label>
            <br>
            <select name="postType" id="type" class="itemfield" v-model="type">
              <option value="For Sale">For Sale</option>
              <option value="Wanted">Wanted</option>
            </select>
            </div>
            <br>
            <div class="description">
              <label for="description" class="label">Description</label>
              <br>
              <textarea v-model="description" class="itemfield descfield" ></textarea>
            </div>
          </div>
          <div class="photos">
            <div class="sectionheader">
              <h2>Photos</h2>
              </div>
            <div class="file-input">
              <input type="file" id="file" class="file">
              <label for="file">
                Upload Photos
                <p class="file-name"></p>
              </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import moment from 'moment'
import getPost from '../composables/getPost.js'


export default {
    props: ['id'],
  data() {
    return {
      item: '',
      type: '',
      description: '',
      associate: 'David Sorrell',
      date: moment(new Date()).format('MM/DD/YYYY'),
      uri: 'http://localhost:3000/posts/' + this.id
    }
  },
  mounted() {
      fetch(this.uri).then(res => res.json()).then(data => {
          this.item = data.item
          this.type = data.type
          this.description = data.description
      })
  },
  methods: {
      handleSubmit() {
          fetch(this.uri, {
              method: 'PATCH',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify({item: this.item, type: this.type, description: this.description, associate: this.associate})
          }).then(() => {
              this.$router.push('/corp_assoc_announcement/details/' + this.id)
          }).catch(err => console.log(err))
      }
  }
}

</script>

<style scoped>
.page {
  margin-left: 210px;
}
.addbar {
  background-color: #C3202F;
  margin-top: 25px;
  color: white;
  padding: 0 20px 55px 10px;
  margin-right: 20px;
  border-radius: 4px 4px 0 0;
}
.apphead h2 {
  float: left;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.4;

}
button {
  background: #337AB7;
  padding: 5px 10px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  margin-top: 15px;
  float: right;
  color: white;
  font-weight: 300;
  outline-style: none;
  border-style: none;
  font-size: 16px;
}
.savelink:hover {
  background: #286090;
  cursor: pointer;
}
.filterbar {
  background-color: #EEEEEE;
  display: block;
  padding: 0px 20px 55px 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: #C8C8C8 1px solid ;
}
.form {
  padding-top: 20px;
  text-align: left;
  margin-right: 20px;
}

.sectionheader {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 25px;
}
.sectionheader h2{
  color: #C3202F;
  font-weight: 300;
  font-family: "Droid Serif","Times New Roman",serif;
  font-size: 22px;
  width: 100%;
}
.itemfields {
  float: left;
  width: 45%;
  padding-bottom: 25px; 
}
.posttype {
  width: 45%;
  float: right;
}
.description {
  width: 98.5%;
  float: left;
}
label{
  padding-left: 3px;
  font-weight: 600;
}
.itemfield {
  display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.428571429;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    
}
.photos {
  margin-top: 100px;
  padding-top: 30px;
  background-color: #fff;
  color: #555;
}
.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}
.file-input label {
  width: 200px;
  height: 200px;
  border-radius: 4px;
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  transition: transform .2s ease-out;
}
input:hover + label,
input:focus + label {
  transform: scale(1.02);
}
.file-name {
  position: absolute;
  bottom: -35px;
  left: 10px;
  font-size: 0.85rem;
  color: #555;
}


</style>