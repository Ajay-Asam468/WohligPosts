import { createStore } from "vuex";

const store = createStore({
   state(){
       return{
        posts: [
            {
              id: 1,
              position: "Full Stack Developer",
              Skills:  [{name:"HTML"},{name:"CSS"},{name:"Javascript"}] ,
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",
              Certification: "Coursera Full Stack Program",
            },
            {
              id: 2,
              position: "FrontEnd Developer",
              Skills: [{name:"HTML"},{name:"CSS"},{name:"Javascript"},{name:"Vue JS"}],
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",

              Certification: "FrontEnd Freecodecamp course",
            },
            {
              id: 3,
              position: "BackEnd Developer",
              Skills: [{name:"Node Js"},{name:"AWS"}],
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",

              Certification: "Coursera BackEnd Program",
            },
            {
              id: 4,
              position: "Human Resource",
              Skills: [{name:"Communication Skills"},{name:"Proactivity"}],
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",
              
              Certification:
                "Associate Professional in Human Resources Certification",
            },
            {
              id: 5,
              position: "Project Manager",
              Skills:[{name:"LeaderShip"},{name:"Collaboration"},{name:"Communication Skills"}],
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",

              Certification: "BVOP Certified Project Manager",
            },
            {
              id: 6,
              position: "UI/UX Developer",
              Skills: [{name:"Wireframing and UI prototyping"}],
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",

              Certification: "Coursera UI/UX certification",
            },
            {
              id: 7,
              position: "Data Scientist",
              Skills:[{name:"Statistics"},{name:"Python"},{name:"Data visualization"}],
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",

              Certification: "Upgrad Data science certification",
            },
            {
              id: 8,
              position: "CEO",
              Skills: [{name:"Strong Communication,Understanding and Listening"}],
              url:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=389&q=80",

              Certification: "BVOP Certified CEO",
            },
          ],
       };
   },

   getters: {
    posts(state) {
      return state.posts;
    },
    post(state) {
      return (postId) => {
        return state.posts.find((post) => post.id == postId);
      };
    },
  
  },

  
});    

export default store;