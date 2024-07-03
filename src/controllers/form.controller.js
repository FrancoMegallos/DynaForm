async function get(req, res) {
  const data = {
    formfields: {
      name: "text",
      age: "number",
    },
  };

  res.render("index", { data });
}

async function post(req, res) {
  const data = {};
  res.render("index", { message: "hello" });
}

export default { get, post };
