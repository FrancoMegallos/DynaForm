const get = async (req, res) => {
  const componentName = req.params.name;
  console.log("componeneteName");
  res.render(`components/${componentName}`, {});
};

export default {
  get,
};
