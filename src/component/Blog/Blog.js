import React from 'react';
import blog1 from '../../images/blog1.jpg'
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.jpg'

const Blog = () => {
    return (
        <div>
        <h1 id="Blog"  className="text-4xl p-10 m-48">Our Blog</h1>
          <div className="h-48 w-screen flex justify-center items-center flex-col-reverse lg:flex-row-reverse">
        <div className="shadow-md border-2 m-5 border-gray-10 flex justify-center items-center flex-col-reverse">
        
            

                <p class="mt-5 text-justify p-4 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis natus facere pariatur exercitationem blanditiis, 
                     corporis nobis necessitatibus voluptatem, voluptates delectus, autem laudantium esse. 
                     Nihil dolorum dolorem officiis neque quo maxime.</p>

                     <h1 class="text-3xl">Java script tips</h1>

                     <img className=" h-64 w-fll border-2 border-gray-100 p-2 rounded-md items-center justify-center " src={blog1} alt="" />
                       
            
            </div>
        <div className="shadow-md border-2 m-5 border-gray-10 flex justify-center items-center flex-col-reverse">
              

        <p class="mt-5 text-justify p-4 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis natus facere pariatur exercitationem blanditiis, 
                     corporis nobis necessitatibus voluptatem, voluptates delectus, autem laudantium esse. 
                     Nihil dolorum dolorem officiis neque quo maxime.</p>
                     <h1 class="text-3xl">About Tailwind</h1>
                     <img className="h-64 w-fll border-2 border-gray-100 p-2 rounded-md items-center justify-center " src={blog2} alt="" />
                        
            </div>
        <div className="shadow-md m-5 border-2 border-gray-10 flex justify-center items-center flex-col-reverse">
              

        <p class="mt-5 text-justify p-4 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis natus facere pariatur exercitationem blanditiis, 
                     corporis nobis necessitatibus voluptatem, voluptates delectus, autem laudantium esse. 
                     Nihil dolorum dolorem officiis neque quo maxime.</p>
                     <h1 class="text-3xl">Learn more about React</h1>
                     <img className="h-64 w-fll border-2 border-gray-100 p-2 rounded-md items-center justify-center " src={blog3} alt="" />
                        
            </div>
        </div>
        </div>
    );
};

export default Blog;