const { query } = require("express");
const pool = require("../../db");

const runQuery = async (query, param) => {
  try {
    const res = await pool.query(query, param);

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = runQuery;
