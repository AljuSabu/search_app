import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({ users, searchTerm, onDelete, onEdit }) => {
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();

    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  });

  return (
    <table className="table-auto w-full">
      <thead className="lg:text-lg xl:text-xl 2xl:text-2xl text-green-500">
        <tr>
          <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">Id</th>
          <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">First Name</th>
          <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">Last Name</th>
          <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">Email</th>
          <th className="text-start lg:p-1 xl:p-2 2xl:p-3 lg:h-10 xl:h-15 2xl:h-20">Phone</th>
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
                <td className="border-b lg:p-1 xl:p-2 2xl:p-3">{index + 1}</td>
                <td className="border-b lg:p-1 xl:p-2 2xl:p-3">{user.firstName}</td>
                <td className="border-b lg:p-1 xl:p-2 2xl:p-3">{user.lastName}</td>
                <td className="border-b lg:p-1 xl:p-2 2xl:p-3">{user.email}</td>
                <td className="border-b lg:p-1 xl:p-2 2xl:p-3">{user.phone}</td>
                <td className="border-b lg:p-1 xl:p-2 2xl:p-3">
                  <button className="text-emerald-500 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out lg:mr-2 2xl:mr-5">
                    <DoneAllIcon className="lg:text-xl! xl:text-2xl!" />
                  </button>
                </td>
                <td className="border-b">
                  <button
                    onClick={() => onEdit(user)}
                    className="text-yellow-500 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out lg:mr-2 xl:mr-3 2xl:mr-5"
                  >
                    <EditIcon className="lg:text-xl! xl:text-2xl!" />
                  </button>
                </td>
                <td className="border-b 2xl:p-3">
                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-500 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-90 duration-100 transition-all ease-in-out"
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
  );
};

export default Table;
