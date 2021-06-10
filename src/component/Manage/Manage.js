import React from 'react';
import contact from '../../images/contact.png'
import upload from '../../images/upload.png'
import code from '../../images/coding.png'

const Manage = () => {
    return (
        <div>
        <h1 className="text-4xl p-10 m-5">How to work</h1>
          <div className="h-48 w-screen flex justify-center items-center flex-col-reverse lg:flex-row-reverse">
        <div className="shadow-md border-2 m-5 border-gray-10 flex justify-center items-center flex-col-reverse">
        
            

                <p class="mt-5 text-justify p-4 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis natus facere pariatur exercitationem blanditiis, 
                     corporis nobis necessitatibus voluptatem, voluptates delectus, autem laudantium esse. 
                     Nihil dolorum dolorem officiis neque quo maxime.</p>

                     <h1>Upload</h1>

                     <img className=" h-16 w-16 border-2 border-gray-100 p-2 rounded-md items-center justify-center " src={contact} alt="" />
                       
            
            </div>
        <div className="shadow-md border-2 m-5 border-gray-10 flex justify-center items-center flex-col-reverse">
              

        <p class="mt-5 text-justify p-4 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis natus facere pariatur exercitationem blanditiis, 
                     corporis nobis necessitatibus voluptatem, voluptates delectus, autem laudantium esse. 
                     Nihil dolorum dolorem officiis neque quo maxime.</p>
                     <h1>Work and check</h1>
                     <img className=" h-16 w-16 border-2 border-gray-100 p-2 rounded-md items-center justify-center " src={code} alt="" />
                        
            </div>
        <div className="shadow-md m-5 border-2 border-gray-10 flex justify-center items-center flex-col-reverse">
              

        <p class="mt-5 text-justify p-4 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis natus facere pariatur exercitationem blanditiis, 
                     corporis nobis necessitatibus voluptatem, voluptates delectus, autem laudantium esse. 
                     Nihil dolorum dolorem officiis neque quo maxime.</p>
                     <h1>First Contact Us</h1>
                     <img className="h-16 w-16 border-2 border-gray-100 p-2 rounded-md items-center justify-center " src={upload} alt="" />
                        
            </div>
        </div>
        </div>
    );
};

export default Manage;