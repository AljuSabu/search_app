import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({ users, searchTerm, onDelete, onEdit, onToggle }) => {
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();

    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <div className="hidden lg:flex">
        <table className="table-auto w-full">
          <thead className="lg:text-lg xl:text-xl 2xl:text-2xl text-green-500">
            <tr>
              <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">
                Id
              </th>
              <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">
                First Name
              </th>
              <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">
                Last Name
              </th>
              <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">
                Email
              </th>
              <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="text-sm xl:text-base 2xl:text-lg">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-400 py-5">
                  No users found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 line-through text-gray-400" : ""}`}
                    >
                      {index + 1}
                    </td>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 line-through text-gray-400" : ""}`}
                    >
                      {user.firstName}
                    </td>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 line-through text-gray-400" : ""}`}
                    >
                      {user.lastName}
                    </td>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 line-through text-gray-400" : ""}`}
                    >
                      {user.email}
                    </td>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 line-through text-gray-400" : ""}`}
                    >
                      {user.phone}
                    </td>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 text-gray-400" : ""}`}
                    >
                      <button
                        onClick={() => onToggle(user.id)}
                        className={`hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out lg:mr-2 xl:mr-3 2xl:mr-5 ${user.completed ? "transition-all duration-200 text-gray-400" : "text-emerald-600 hover:text-emerald-400"}`}
                      >
                        <DoneAllIcon className="lg:text-xl! xl:text-2xl!" />
                      </button>
                    </td>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 text-gray-400" : ""}`}
                    >
                      <button
                        disabled={user.completed}
                        onClick={() => onEdit(user)}
                        className={`hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out lg:mr-2 xl:mr-3 2xl:mr-5 ${user.completed ? "transition-all duration-200 text-gray-400" : "text-yellow-600 hover:text-yellow-400"}`}
                      >
                        <EditIcon className="lg:text-xl! xl:text-2xl!" />
                      </button>
                    </td>
                    <td
                      className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed ? "transition-all duration-200 text-gray-400" : ""}`}
                    >
                      <button
                        onClick={() => onDelete(user.id)}
                        className={`hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out ${user.completed ? "transition-all duration-200 text-gray-400" : "text-red-600 hover:text-red-400"}`}
                      >
                        <DeleteIcon className="lg:text-xl! xl:text-2xl!" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="lg:hidden space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-stone-800 p-3 md:p-4 rounded md:rounded-lg shadow-sm shadow-stone-700"
          >
            <div
              className={`text-base md:text-xl text-orange-500 font-semibold ${user.completed ? "line-through opacity-60" : ""}`}
            >
              {user.firstName} {user.lastName}
            </div>

            <div
              className={`text-xs md:text-base text-gray-300 mt-1 md:mt-3 ${user.completed ? "line-through opacity-60" : ""}`}
            >
              <p>
                <span className="font-medium">Email :</span> {user.email}
              </p>
              <p>
                <span className="font-medium">Phone :</span> {user.phone}
              </p>
            </div>

            <div className="flex justify-center md:justify-end text-xs md:text-base gap-5 md:gap-3 mt-4 md:mt-3">
              <button
                onClick={() => onToggle(user.id)}
                className={`bg-green-500 rounded shadow shadow-stone-700 active:scale-95 active:shadow-inner px-3 py-1 ${user.completed ? "opacity-60" : ""}`}
              >
                Mark
              </button>
              <button
                disabled={user.completed}
                onClick={() => onEdit(user)}
                className={`bg-yellow-500 rounded shadow shadow-stone-700 active:scale-95 active:shadow-inner px-3 py-1 ${user.completed ? "opacity-60" : ""}`}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className={`bg-red-600 rounded shadow shadow-stone-700 active:scale-95 active:shadow-inner px-3 py-1 ${user.completed ? "opacity-60" : ""}`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
