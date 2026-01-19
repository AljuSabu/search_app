import { useEffect, useState } from "react";
import Table from "./components/Table";
import { data } from "./data/data";
import CreateUserForm from "./components/CreateUserForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : data;
  });

  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(users))
  },[users])

  //Id Corrector
  const getNextId = () => {
    if (users.length === 0) return 1;
    return Math.max(...users.map((user) => user.id)) + 1;
  };

  //Create User
  const addUser = (user) => {
    const nextUser = {
      ...user,
      id: getNextId(),
    };
    setUsers((prev) => [...prev, nextUser]);
    setShowForm(false);
  };

  //Delete User
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  //Edit User
  const startEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  //Update User
  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
    setEditingUser(null);
    setShowForm(false);
  };

  return (
    <>
      <div className="min-h-screen bg-stone-900 text-white lg:pt-15 xl:pt-20 2xl:pt-30 lg:px-20 xl:px-30 2xl:px-40">
        <div className="h-max-190 p-5 xl:text-lg">
          <div className="flex justify-between mb-10 ">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              type="text"
              className="bg-stone-700 focus:outline-none rounded-md lg:py-2 2xl:py-3 lg:px-3 2xl:px-4 lg:w-100 xl:w-120 2xl:w-140 "
              placeholder="Search here ..."
            />
            <button
              onClick={() => {
                setShowForm(true);
              }}
              className="bg-sky-600 rounded-md hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md shadow-black/50 active:scale-95 active:shadow-inner duration-100 transition-all ease-in-out lg:px-3 2xl:px-4 lg:py-2 2xl:py-2"
            >
              Create User
            </button>
          </div>
          {showForm && (
            <CreateUserForm
              newUser={addUser}
              updateUser={updateUser}
              editingUser={editingUser}
              onCancel={() => {
                setEditingUser(null);
                setShowForm(false);
              }}
            />
          )}
          <Table
            users={users}
            searchTerm={searchTerm}
            onDelete={deleteUser}
            onEdit={startEdit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
