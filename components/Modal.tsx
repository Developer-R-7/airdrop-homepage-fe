import React, { useState } from "react";

const Modal = ({ onSave }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    twitter: "",
    discord: "",
  });

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b text-black border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Welcome! We need few information to proceed
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {Object.keys(form).map((item, index) => (
                <div key={index}>
                  <label className="block mb-2 mt-5 text-sm font-medium text-gray-900">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                    required
                    onChange={(e) => {
                      setForm({ ...form, [item]: e.target.value });
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              {/* <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button> */}
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() =>
                  onSave({
                    name: form.name,
                    username: form.username,
                    email: form.email,
                    social_links: {
                      twitter: form.twitter,
                      discord: form.discord,
                    },
                  })
                }
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modal;
