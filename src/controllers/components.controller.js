const get = async (req, res) => {
  const componentName = req.params.name;
  res.render(`components/${componentName}`, {});
};

export default {
  get,
};
