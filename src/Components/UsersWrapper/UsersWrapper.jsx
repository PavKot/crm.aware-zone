import React from "react";
import "./UsersWrapper.css";
import emojiGlasses from "../../Images/emojiGlasses.png";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "../UserItem/UserItem";
import AddUserPopup from "../AddUserPopup/AddUserPopup";
import EditUserPopup from "../EditUserPopup/EditUserPopup";
import OnDeleteUserPopup from "../OnDeleteUserPopup/OnDeleteUserPopup";

const UsersWrapper = () => {
  const [activeItem, setActiveItem] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_EMAIL_URL + "/getVisitors")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(15);

  const [searchResults, setSearchResults] = useState([]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const sortByName = () => {
    let sortedUsers;
    if (sortDirection === "asc") {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    setFilteredUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByEmail = () => {
    let sortedUsers;
    if (sortDirection === "asc") {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        a.email.localeCompare(b.email)
      );
    } else {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        b.email.localeCompare(a.email)
      );
    }
    setFilteredUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortById = () => {
    let sortedUsers;
    if (sortDirection === "asc") {
      sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    } else {
      sortedUsers = [...filteredUsers].sort((a, b) => b.id - a.id);
    }
    setFilteredUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByVisitTimes = () => {
    let sortedUsers;
    if (sortDirection === "asc") {
      sortedUsers = [...filteredUsers].sort(
        (a, b) => a.visitTimes - b.visitTimes
      );
    } else {
      sortedUsers = [...filteredUsers].sort(
        (a, b) => b.visitTimes - a.visitTimes
      );
    }
    setFilteredUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByNgo = () => {
    let sortedUsers;
    if (sortDirection === "asc") {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        a.ngo.localeCompare(b.ngo)
      );
    } else {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        b.ngo.localeCompare(a.ngo)
      );
    }
    setFilteredUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByCity = () => {
    let sortedUsers;
    if (sortDirection === "asc") {
      sortedUsers = [...users].sort((a, b) => a.city.localeCompare(b.city));
    } else {
      sortedUsers = [...users].sort((a, b) => b.city.localeCompare(a.city));
    }
    setFilteredUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortByCity2 = () => {
    let sortedUsers;
    if (sortDirection === "asc") {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        a.city.localeCompare(b.city)
      );
    } else {
      sortedUsers = [...filteredUsers].sort((a, b) =>
        b.city.localeCompare(a.city)
      );
    }
    setFilteredUsers(sortedUsers);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const openAddPopup = () => {
    setOpen(true);
  };

  const openEditPopup = (user) => {
    setActiveItem(user);
    setOpenEdit(true);
  };

  const openDeletePopup = (user) => {
    setActiveItem(user);
    setOpenDelete(true);
  };

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);

    if (inputValue === "") {
      setSearchResults([]);
    } else {
      const filteredData = filteredUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(inputValue) ||
          user.email.toLowerCase().includes(inputValue) ||
          user.ngo.toLowerCase().includes(inputValue)
      );
      setSearchResults(filteredData);
    }
    setCurrentPage(1);
  };

  return (
    <>
      <AddUserPopup
        open={open}
        setOpen={setOpen}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
        setUsers={setUsers}
      />
      <EditUserPopup
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        activeItem={activeItem}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <OnDeleteUserPopup
        openDelete={openDelete}
        setOpenDelete={setOpenDelete}
        activeItem={activeItem}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <div className="users-wrapper">
        <div className="users-wrapper-content">
          <div className="users-wrapper-content-header">
            <div className="users-wrapper-content-header-text">
              <h1>Відвідувачі</h1>
              <img src={emojiGlasses} alt="emoji glasses" />
            </div>
            <div className="users-wrapper-content-header-btn">
              <button onClick={openAddPopup}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="users-wrapper-content-body">
            <div className="users-wrapper-content-body-header">
              <div className="users-wrapper-content-body-header-search">
                <input
                  type="text"
                  placeholder="Пошук"
                  value={searchInput}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="users-wrapper-content-body-header">
              <div className="users-wrapper-content-body-header-btn">
                <button onClick={sortByName}>
                  <BiSort /> Сортувати за ім'ям
                </button>
              </div>
              <div className="users-wrapper-content-body-header-btn">
                <button onClick={sortByEmail}>
                  <BiSort /> Сортувати за поштою
                </button>
              </div>
              <div className="users-wrapper-content-body-header-btn">
                <button onClick={sortById}>
                  <BiSort /> Сортувати за id
                </button>
              </div>
              <div className="users-wrapper-content-body-header-btn">
                <button onClick={sortByVisitTimes}>
                  <BiSort /> Сортувати за кількістю відвідувань
                </button>
              </div>
              <div className="users-wrapper-content-body-header-btn">
                <button onClick={sortByNgo}>
                  <BiSort /> Сортувати за громадською організацією
                </button>
              </div>
              <div className="users-wrapper-content-body-header-btn">
                <button onClick={sortByCity2}>
                  <BiSort /> Сортувати за містом
                </button>
              </div>
            </div>
            <div className="users-wrapper-content-body-item heading">
              <div className="users-wrapper-content-body-item-left">
                <div className="users-wrapper-content-body-item-id">
                  <p>id</p>
                </div>
                <div className="users-wrapper-content-body-item-name">
                  <p>Ім'я</p>
                </div>
                <div className="users-wrapper-content-body-item-email">
                  <p>Email</p>
                </div>
                <div className="users-wrapper-content-body-item-visit">
                  <p>Рази відвідування</p>
                </div>
                <div className="users-wrapper-content-body-item-ngo">
                  <p>Громадська організація</p>
                </div>
                <div className="users-wrapper-content-body-item-ngo">
                  <p>Місто</p>
                </div>
              </div>
            </div>
            {searchResults.length > 0
              ? searchResults.map((user) => (
                  <UserItem
                    user={user}
                    key={user.id}
                    openEditPopup={openEditPopup}
                    setOpenEdit={setOpenEdit}
                    openDeletePopup={openDeletePopup}
                    setOpenDelete={setOpenDelete}
                  />
                ))
              : currentUsers.map((user) => (
                  <UserItem
                    user={user}
                    key={user.id}
                    openEditPopup={openEditPopup}
                    setOpenEdit={setOpenEdit}
                    openDeletePopup={openDeletePopup}
                    setOpenDelete={setOpenDelete}
                  />
                ))}
          </div>
          <div className="users-wrapper-pagination">
            {/*}   {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
        */}
            {Array.from({ length: Math.min(totalPages, 6) }, (_, index) => {
              if (index < 3 || index >= totalPages - 3) {
                return (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                );
              } else if (index === 3) {
                return <span key={index}>...</span>;
              }
            })}

            <button
              onClick={() => paginate(1)}
              className={currentPage === 1 ? "active" : ""}
            >
              {" "}
              {`<<`}{" "}
            </button>
            <button
              onClick={() => paginate(totalPages)}
              className={currentPage === totalPages ? "active" : ""}
            >
              {" "}
              {`>>`}{" "}
            </button>
            <button onClick={() => paginate(currentPage - 1)}>{`<`}</button>

            <button onClick={() => paginate(currentPage + 1)}>{`>`}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersWrapper;
