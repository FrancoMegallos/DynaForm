const get = async (req, res) => {
  const componentName = req.params.name;
  console.log("componeneteName");
  const type = {
    type: ""
  }

  res.render(`components/${componentName}`, { type });
};

export default {
  get,
};
