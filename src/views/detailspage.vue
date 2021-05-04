<template>
    <div class="post" v-if="error">
      <div class="addbar">
      <div class="apphead">
        <h2>Corporate Associate Announcements</h2>
        </div>
      </div>         
    <div class="filterbar">
    </div>
      {{error}}</div>
<div v-if="post" class="post">
  <div class="addbar">
    <div class="apphead">
        <h2>Corporate Associate Announcements</h2>
      </div>         
    </div>
    <div class="filterbar">
    </div>
    <div class="details">     
        <div class="postinfo">
          <div class="sectionheader">
            <h2>Post Information</h2>
          </div>
          <div class="fields">
            <div class="itemfields">
            <label for="item" class="label">Item</label>
            <br>
            <span>{{post.item}}</span>
            </div>
            <div class="posttype">           
            <label for="" class="type label">Post Type</label>
            <br>
            <span>{{post.type}}</span>
            </div>
            <br>
            <div class="description">
              <label for="description" class="label">Description</label>
              <br>
              <span>{{post.description}}</span>
            </div>
          </div>
          <div class="photos">
            <div class="sectionheader">
              <h2>Photos</h2>
              </div>                     
          </div>
        </div>    
    </div>
  </div>
</template>

<script>
import getPost from '../composables/getPost.js'
export default {
  props: ['id'],
  setup(props){
    const {post, error, load} = getPost(props.id)

    load()

    return{post, error}
  }
}
</script>

<style>
.post {
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
.filterbar {
  background-color: #EEEEEE;
  display: block;
  margin-right: 20px;
  padding: 0px 20px 55px 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: #C8C8C8 1px solid ;
}
.details {
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
.photos {
  margin-top: 100px;
  padding-top: 30px;
  background-color: #fff;
  color: #555;
}
span {
  padding-left: 3px;
}
</style>