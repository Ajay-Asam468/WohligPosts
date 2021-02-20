import { createStore } from "vuex";

const store = createStore({
   state(){
       return{
        posts: [
            {
              id: 1,
              position: "Full Stack Developer",
              Skills: "HTML,CSS,Javascript,Vue JS,Node Js",
              Certification: "Coursera Full Stack Program",
            },
            {
              id: 2,
              position: "FrontEnd Developer",
              Skills: "HTML,CSS,Javascript,Vue JS",
              Certification: "FrontEnd Freecodecamp course",
            },
            {
              id: 3,
              position: "BackEnd Developer",
              Skills: "Node Js,AWS",
              Certification: "Coursera BackEnd Program",
            },
            {
              id: 4,
              position: "Human Resource",
              Skills: "Communication Skills,Proactivity",
              Certification:
                "Associate Professional in Human Resources Certification",
            },
            {
              id: 5,
              position: "Project Manager",
              Skills: "LeaderShip,Collaboration,Communication Skills",
              Certification: "BVOP Certified Project Manager",
            },
            {
              id: 6,
              position: "UI/UX Developer",
              Skills: "Wireframing and UI prototyping",
              Certification: "Coursera UI/UX certification",
            },
            {
              id: 7,
              position: "Data Scientist",
              Skills: "Statistics,Python,Data visualization",
              Certification: "Upgrad Data science certification",
            },
            {
              id: 8,
              position: "CEO",
              Skills: "Strong Communication,Understanding and Listening",
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