import axios from "axios";

const URL = `http://localhost:3000`

const getUsers = (cb) => {
  axios({
    method: "GET",
    url: `${URL}/users`,
  })
    .then((result) => {
      // console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addUser = (obj) => {
  const { name, hobby } = obj;
  axios({
    method: "POST",
    url: `${URL}/users`,
    data: { name, hobby },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (id) => {
  // console.log(id);
  axios({
    method: "DELETE",
    url: `${URL}/users/${id}`,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

const infoUser = (id) => {
    axios({
        method: "GET",
        url: `${URL}/users/${id}`
    })
    .then(result => {
        const {id, name, hobby} = result.data;
        alert(`Id: ${id}, Name: ${name}, Hobby: ${hobby}`);
    })
    .catch(err => {
        console.log(err);
    })
}

export {
    getUsers, addUser, deleteUser, infoUser
}