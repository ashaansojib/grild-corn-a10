import { Rating } from "@smastrom/react-rating";
import React from "react";

const Reviews = () => {
  return (
    <div className="my-container">
      <h2 className="text-2xl font-semibold text-center py-4">
        Customer's <span className="text-green-500">Review</span>
      </h2>
      <div className="grid lg:grid-cols-3 justify-between gap-4 my-4">
        <div className="p-2 shadow-md shadow-gray-400">
          <div className="md:flex justify-center items-center py-4">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-green-400">
              <img
                className="w-full h-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              quisquam debitis iusto, aperiam repellat, nihil exercitationem, et
              doloribus nam consequuntur deserunt qui laborum voluptatum vel
              dignissimos pariatur quia? Sunt, libero.
            </p>
            <h2 className="text-xl font-bold">Jone Dally</h2>
            <div className="flex justify-center items-center">
            <Rating style={{ maxWidth: 100 }} value={4} readOnly></Rating>
            </div>
          </div>
        </div>
        <div className="p-2 shadow-md shadow-gray-400">
          <div className="md:flex justify-center items-center py-4">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-green-400">
              <img
                className="w-full h-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              quisquam debitis iusto, aperiam repellat, nihil exercitationem, et
              doloribus nam consequuntur deserunt qui laborum voluptatum vel
              dignissimos pariatur quia? Sunt, libero.
            </p>
            <h2 className="text-xl font-bold">Jone Dally</h2>
            <div className="flex justify-center items-center">
            <Rating style={{ maxWidth: 100 }} value={3} readOnly></Rating>
            </div>
          </div>
        </div>
        <div className="p-2 shadow-md shadow-gray-400">
          <div className="md:flex justify-center items-center py-4">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-green-400">
              <img
                className="w-full h-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              quisquam debitis iusto, aperiam repellat, nihil exercitationem, et
              doloribus nam consequuntur deserunt qui laborum voluptatum vel
              dignissimos pariatur quia? Sunt, libero.
            </p>
            <h2 className="text-xl font-bold">Jone Dally</h2>
            <div className="flex justify-center items-center">
            <Rating style={{ maxWidth: 100 }} value={4} readOnly></Rating>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
