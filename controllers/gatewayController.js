const REST = require('../utils/rest');
const pool = require('../config/db');

const rest = new REST();

const handleRequest = async (req, res) => {
  const service = await pool.query('SELECT target FROM routes WHERE ?', { route: req.path });
  if (service.length === 0) {
    return res.status(404).send('Service not found');
  }

  try {
    const targetUrl = `${service[0].target}${req.originalUrl}`;
    const response = await rest.NewRESTInvoker(req.method, targetUrl, req.body, req.headers);
    if (response.success) {
      res.status(200).send(response.data);
    } else {
      res.status(400).send(response.error);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  handleRequest
};
