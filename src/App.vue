<template>
  <div id="app">
    <section id="nav">
      <div class="nav-links">
        <router-link to="/">
          <i class="fas fa-home"></i>
          Start
        </router-link>
        <router-link to="/games">
          <i class="fas fa-gamepad"></i>
          Spiele
        </router-link>
      </div>
    </section>
    <section id="content">
      <router-view/>
    </section>
    
  </div>
</template>

<style lang="scss">
:root {
  /*
    COLORS
  */
  --primary-color: #e6b31e;
  // --primary-light: #AED09E;
  --primary-dark: #9E7B15;
  --secondary-color: #cacaca;
  // --secondary--dark:#A8896C;
  
  --background-color: #343434;

  --font-color-light: #fcfaf1;

  /*
    Other
  */
  --spacing: 10px;
  --border-radius: 4px;

}


body {
  background-color: var(--background-color);
  color: #fcfaf1;
  margin: 0;
  text-align: left;

}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;  
}
#nav {
  width: 100%;
  background-color: var(--primary-color);
  height: 50px;
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
  padding: 0 calc(var(--spacing) * 3);

  .nav-links {
    height: 100%;
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 5px;
    max-width: 150px;
    color: var(--background-color);
    font-size: 20px;
    text-decoration: none;
    transition: all ease .3s;
    border-radius: var(--border-radius);
    margin-right: var(--spacing);

    i {
      margin-right: 10px;
    } 
    &:hover, &.router-link-exact-active {
      background-color: var(--background-color);
      color: var(--secondary-color);
      // box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    }
    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
}

button {
  padding: 0;
  margin: 0;
  border: none;
}

h1, h2, h3, h4, h5, h6, p, span, pre {
  margin: 0;
  padding: 0;
}
h1 {
  margin-bottom: calc(var(--spacing) * 1.6);
}
h2 {
  margin-bottom: calc(var(--spacing) * 1.5);
}
h3 {
  margin-bottom: calc(var(--spacing) * 1.4);
}
h4 {
  margin-bottom: calc(var(--spacing) * 1.3);
}
h5 {
  margin-bottom: calc(var(--spacing) * 1.2);
}
h6 {
  margin-bottom: calc(var(--spacing) * 1.1);
}
p {
  margin-bottom: var(--spacing)
}


.btn-primary {
  padding: var(--spacing);
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  color: var(--background-color);
  transition: background-color ease .3s, color ease .3s .1s;

  &:hover {
    background-color: var(--primary-dark);
    color: #fff;
  }
  
}



#content {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  border-radius: var(--border-radius);
  padding: calc(var(--spacing) * 3);
  margin-top: calc(var(--spacing)*5);
  color: var(--background-color);
  background-color: var(--secondary-color);
  text-align: left;
}
</style>
