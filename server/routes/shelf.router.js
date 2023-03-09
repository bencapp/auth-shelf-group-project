const express = require("express");
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM item`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log("executing GET, result is", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error executing SQL query", sqlText, " : ", err);
      res.sendStatus(500);
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const userId = req.user.id;

  const queryText = `INSERT INTO "item" (description, image_url, user_id)
  VALUES ($1, $2, $3)
  `;

  pool
    .query(queryText, [description, imageUrl, userId])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`error in post`, error);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality

  const userId = req.user.id;
  const itemId = req.params.id;
  console.log(req.params);
  const queryText = `DELETE FROM "item" WHERE "id" = $1 AND "user_id" = $2;`;
  pool
    .query(queryText, [itemId, userId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`error in delete`, error);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
