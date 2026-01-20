import React, { useState } from "react";

const CreateUserForm = ({ newUser, onCancel, editingUser, updateUser }) => {
  const [form, setForm] = useState(() => ({
    firstName: editingUser?.firstName || "",
    lastName: editingUser?.lastName || "",
    email: editingUser?.email || "",
    phone: editingUser?.phone || "",
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = form;

    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    if (editingUser) {
      updateUser({
        ...editingUser,
        ...form,
      });
    } else {
      newUser(form);
    }
    onCancel();
  };

  return (
    <div className="w-full max-h-150 bg-stone-800 rounded-xl mb-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-xs md:text-base lg:text-lg xl:text-xl py-5 md:py-10 2xl:py-20 px-5 md:px-15 lg:px-20 2xl:px-30"
      >
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="flex flex-auto flex-col mb-5 lg:mb-8 xl:mb-10">
            <label className="font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl lg:mb-2 xl:mb-5">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="border-b focus:outline-none max-w-130 p-1 2xl:p-2"
              required
            />
          </div>
          <div className="flex flex-auto flex-col mb-5 lg:mb-8 2xl:mb-10">
            <label className="font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl lg:mb-2 xl:mb-5">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="border-b focus:outline-none max-w-130 p-1 2xl:p-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mb-5 lg:mb-8 xl:mb-10">
          <label className="font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl lg:mb-2 xl:mb-5">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border-b focus:outline-none md:w-80 lg:w-110 xl:w-150 2xl:w-190 p-1 2xl:p-2"
            required
          />
        </div>
        <div className="flex flex-col mb-7 md:mb-5 lg:mb-8 xl:mb-10">
          <label className="font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl lg:mb-2 xl:mb-5">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border-b focus:outline-none md:w-60 lg:w-80 xl:w-100 2xl:w-130 p-1 2xl:p-2"
            required
          />
        </div>
        <div className="flex justify-center md:justify-end gap-5 lg:gap-10">
          <button
            type="button"
            onClick={onCancel}
            className="rounded lg:rounded-md bg-red-600 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md shadow-black/50 active:scale-95 active:shadow-inner duration-100 transition-all ease-in-out w-15 md:w-20 lg:w-25 xl:w-30 h-7 md:h-9 lg:h-10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded lg:rounded-md bg-blue-600 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md shadow-black/50 active:scale-95 active:shadow-inner duration-100 transition-all ease-in-out w-15 md:w-20 lg:w-25 xl:w-30 h-7 md:h-9 lg:h-10"
          >
            {editingUser ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
