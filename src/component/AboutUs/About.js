import React from 'react';
import top from '../../images/1.jpg'

const About = () => {
    return (
       <div>
              <h1 id="About" className="font-black text-6xl mb-0 mt-20">About us</h1>
               <div className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row-reverse"
        
       >
         
        <img  src={top} className="w-96 h-96 lg:ml-12 border-2 border-gray-10 mx-10 mt-0 " alt="" />
         <div className="mt-5 w-screen shadow-md border-2 border-gray-10 m-10">
          
           <p class="mt-5 text-justify p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod nostrum voluptatem ex 
           maxime error velit, voluptas necessitatibus! 
           Possimus natus eius doloremque praesentium autem nemo nesciunt harum reiciendis facilis a.</p>
           <p class="mt-5 text-justify p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et accusantium temporibus autem,
                voluptas quo qui sint amet sequi nemo quasi incidunt. Aperiam consequatur voluptas totam quod corrupti
                 doloremque hic quaerat molestias reiciendis, velit nihil alias quibusdam veniam numquam est praesentium 
                 tenetur ipsum illum! Obcaecati reprehenderit ad temporibus voluptate itaque, expedita quam unde! Rem eius 
                 error autem nemo atque accusantium magni vel quod! Qui, corporis culpa est saepe eos eligendi explicabo distinctio 
                 sed nulla esse odio fugit reiciendis, eum aperiam illo ut necessitatibus nihil commodi consequuntur velit quibusdam
                  aliquam. Nisi,
                distinctio nobis. Corrupti, repellendus soluta excepturi vel illo reprehenderit repellat?</p>
         
           

         </div>
         </div>
        </div>
    );
};

export default About;