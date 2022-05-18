import React from 'react';

const Phone = ({img}) => {
  
    return (
      <section className="mt-10 justify-around mx-5 flex ">
        <div className="px-20 my-auto">
          <h1 className="text-7xl font-bold">Your next phone</h1>
          <h1 className="text-7xl font-bold text-indigo-600">
            Your best phone
          </h1>
          <p className="pt-5 w-3/5 text-xl">
            This is latest phone of google pixel. Pixel 6 Pro is very powerful
            phone in the world. It has very powerful battery and charger. To learn more click this button.
          </p>
          <button className="bg-indigo-100 hover:bg-indigo-300 p-5 mt-6 rounded-2xl text-blue-700 font-bold">
            Live Demo
          </button>
        </div>
        <div className="py-4">
          <img className="w-96 mr-12" src={img} alt="" />
        </div>
      </section>
    );
};

export default Phone;