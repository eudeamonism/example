const fs = require('fs');
const express = require('express');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  console.log(users[0]._id);
  res.status(200).json({
    status: 'OK',
    requestedAt: req.requestTime,
    results: users.length,
    data: { users },
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((el) => el._id === id);

  if (id > users.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid id' });
  }

  res.status(200).json({ status: 'ok', results: users.length, data: { user } });
};

exports.updateUser = (req, res) => {
  //if(!tour)
  if (!user) {
    return res.status(404).json({ status: 'fail', message: 'Invalid id' });
  }
  res.status(200).json({ status: 'success', data: 'Updated user here' });
};

exports.deleteUser = (req, res) => {
  //if(!tour)
  if (!user) {
    //don't forget the return value...
    return res.status(404).json({ status: 'fail', message: 'Invalid user' });
  }
  //204 means no content
  //data set to null
  res.status(204).json({ status: 'success', data: null });
};

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  newUser = Object.assign({ id: newId }, req.body);

  users.push(newUser);
  //makes sense since the original is a JSON string
  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(users),
    (err, data) => {
      res.status(201).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    }
  );
};
