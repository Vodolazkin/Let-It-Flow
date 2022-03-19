const { Event } = require('../db/models');


const eventPost = async (req, res) => {
  try {
    const { date, title, user_id } = req.body;
 
    await Event.create({ date, title, user_id });
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

const eventInit = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const events = await Event.findAll({
      where: {
        user_id: id,
      }
    });
console.log(events)
    return res.json(events)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = { eventPost, eventInit }