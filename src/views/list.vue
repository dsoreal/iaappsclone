<template>
<div class="page">
  <div class="addbar">
    <div class="apphead">
      <h2>Corporate Associate Announcements</h2>
      </div>    
    <router-link to="/corp_assoc_announcement/add">
      <div class="add apphead">
        Add
      </div>
    </router-link>
  </div>
  <div class="filterbar">
    <span class="filterby">Filter By</span>
    <div class="filterdown">
    <select name="forsaleWanted" id="saleWanted" class="filter">
      <option value="all">All</option>
      <option value="forSale">For Sale</option>
      <option value="wanted">Wanted</option>
    </select>
    </div>
    <div class="search">
      <input type="text" placeholder="search">
    </div>
  </div>
  <div class="table">
  <table>
    <col />
    <thead>
      <tr>
        <th><span class="associate">Associate</span></th>
        <th><span class="postType">Post Type</span></th>
        <th><span class="Item">Item</span></th>
        <th><span class="postdate">Posted Date</span> </th>     
    </tr>
    </thead>
    <tbody colspan="4">  
      <tr v-if="error"><td colspan="4">{{ error }}</td></tr>
      <postList :posts="posts" v-if="posts.length" class="postList" colspan="4" />
      <tr class="loading" v-else><td colspan="4">Loading Please Wait...</td></tr>
    </tbody>
  </table>
  </div>
  
</div>
</template>

<script>
import postList from '../components/postList.vue'
import getPosts from '../composables/getPosts'


export default {
  components: { postList },
  setup() {
    const {posts, error, load} = getPosts()

    load()

   
    return { posts, error }
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
.add {
  position: relative;
  background: #333333;
  padding: 5px 10px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  margin-top: 15px;
  float: right;
  
}
a {
    text-decoration: none;
    color: white;
}
.filterbar {
  background-color: #EEEEEE;
  display: block;
  margin-right: 20px;
  padding: 10px 20px 45px 10px;
  text-align: left;
  font-weight: bold;
}
.filterbar span {
  float: left;
  padding-top: 10px;
}
.filterdown {
  float: left;
}
.filter {
  cursor: pointer;
  height: 36px;
  margin-left: 5px ;
  padding: 6px 12px;
  line-height: 1.428571429;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
}
.search input{
  padding: 6px 12px;
  float: right;
  height: 20px;
  width: 140px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  border-radius: 4px;
  background-color: #fff;
}
.table {
  margin-right: 20px;
}
table {
    padding: 10px;
    width: 100%;
    height: auto;
    border-collapse: collapse;
    text-align: center;

}
thead {
  background-color: #333333;
  color: white;
  width: 100%;
  padding: 10px 0;
}
th {
  width: 25%;
  padding: 10px 0;
}
</style>