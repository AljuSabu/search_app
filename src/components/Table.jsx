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
                    <td className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed?"transition-all duration-200 text-gray-400":""}`}>
                      <button
                        onClick={() => onToggle(user.id)}
                        className={`hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out lg:mr-2 xl:mr-3 2xl:mr-5 ${user.completed?"transition-all duration-200 text-gray-400":"text-emerald-600 hover:text-emerald-400"}`}
                      >
                        <DoneAllIcon className="lg:text-xl! xl:text-2xl!" />
                      </button>
                    </td>
                    <td className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed?"transition-all duration-200 text-gray-400":""}`}>
                      <button
                        disabled={user.completed}
                        onClick={() => onEdit(user)}
                        className={`hover: hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out lg:mr-2 xl:mr-3 2xl:mr-5 ${user.completed?"transition-all duration-200 text-gray-400":"text-yellow-600 hover:text-yellow-400"}`}
                      >
                        <EditIcon className="lg:text-xl! xl:text-2xl!" />
                      </button>
                    </td>
                    <td className={`transition-all duration-200 border-b lg:p-1 xl:p-2 2xl:p-3 ${user.completed?"transition-all duration-200 text-gray-400":""}`}>
                      <button
                        onClick={() => onDelete(user.id)}
                        className={`hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out ${user.completed?"transition-all duration-200 text-gray-400":"text-red-600 hover:text-red-400"}`}
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
      <div className="border lg:hidden"></div>
    </div>
  );
};

export default Table;
