<template>
      <div class="nav">
    <nav class="navbar">
    </nav>
  </div>
  <div class="signIn">
      <h1>Sign In</h1>
      <form @submit.prevent="handleLogin">
     <div class="user">
         <input placeholder="Username" type="text" v-model="username" class="username" id="username" required>
     </div>
     <div class="pass">
         <input placeholder="Password" type="password" v-model="password" class="password" id="password" required>
     </div>
     <div class="submit">
         <input class="button" type="submit" value="Login">
     </div>
     </form>
     </div>
     <div id="props">
     </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            userList: [],
            userPass: [],
            nameList: [],
            
            
        }
    },
    methods: {
        handleLogin() {
            let i = 0
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            for(i = 0; i < data.length; i++) {
                this.userList.push(data[i].username)
                this.userPass.push(data[i].password)
                this.nameList.push(data[i].name)
                console.log(this.nameList)
                }
            if(this.userList.includes(this.username) && this.userPass.includes(this.password)) {
                if(this.userList.indexOf(this.username) == this.userPass.indexOf(this.password)) {
                    this.$store.state.displayName = this.nameList[this.userList.indexOf(this.username)]
                    console.log(this.$store.state.displayName)
                    this.$router.push('/')
                    
                
                } else {
                    alert('The username or password is incorrect')
                    document.getElementById('username').value = ''
                    document.getElementById('password').value = ''
                } 
            } else {
                    alert('The username or password is incorrect')
                    document.getElementById('username').value = ''
                    document.getElementById('password').value = ''
            }
        })   
        }
    }
}
</script>

<style>
.nav {
    text-align: left;
    position: relative;
    min-height: 50px;
    margin-bottom: 22px;
    display: block;
}
.navbar {
    background-color: #c3202f;
    border: 0;
    padding: 20px;
    font-weight: 400;
    font-size: 16px;
}
.signIn {
    
    margin-left: 35%;
}
h1{
    text-align: left;
    font-size: 34px;
    font-weight: 400;
    font-family: "Montserrat",Arial,sans-serif;
}
input.username, input.password {
    display: block;
    width: 30%;
    height: 30px;
    padding: 4px 12px;
    border-radius: 4px;
    border-width: 1px;
    border-color: #C3C3C3;
    border-style: solid;
}
input.username:focus, input.password:focus{
    outline: none !important;
    border:1px solid #719ECE;
    box-shadow: 0 0 10px #719ECE;
}
.user, .pass{
    padding-bottom: 20px;
}
.button {
    float: left;
    color: white;
    background-color: #337AB7;
    border-style: none;
    border-radius: 4px;
    padding: 12px 30px;
    font-weight: 400;
    cursor: pointer;
    width: 10%;
}
.button:hover{
    background-color: #286090;
}

</style>