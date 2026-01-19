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
        ...form
      });
    } else {
      newUser(form);
    }
    onCancel();
  };

  return (
    <div className="w-full max-h-150 bg-stone-800 rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-lg xl:py-10 2xl:py-20 xl:px-20 2xl:px-30"
      >
        <div className="flex xl:gap-10">
          <div className="flex flex-auto flex-col xl:mb-10">
            <label className="font-bold xl:text-xl 2xl:text-2xl xl:mb-5">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="border-b focus:outline-none max-w-130 xl:p-1 2xl:p-2"
              required
            />
          </div>
          <div className="flex flex-auto flex-col 2xl:mb-10">
            <label className="font-bold xl:text-xl 2xl:text-2xl xl:mb-5">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="border-b focus:outline-none max-w-130 xl:p-1 2xl:p-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col xl:mb-10">
          <label className="font-bold xl:text-xl 2xl:text-2xl xl:mb-5">Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border-b focus:outline-none xl:w-150 2xl:w-190 xl:p-1 2xl:p-2"
            required
          />
        </div>
        <div className="flex flex-col mb-10">
          <label className="font-bold xl:text-xl 2xl:text-2xl xl:mb-5">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border-b focus:outline-none xl:w-100 2xl:w-130 xl:p-1 2xl:p-2"
            required
          />
        </div>
        <div className="flex justify-end gap-10">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md bg-red-600 xl:text-xl xl:w-30 xl:h-10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 xl:text-xl xl:w-30 xl:h-10"
          >
            {editingUser ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
