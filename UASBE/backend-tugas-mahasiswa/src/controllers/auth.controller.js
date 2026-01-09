const prisma = require("../prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await prisma.user.findUnique({ where: { email } });
  if (exist) return res.status(400).json({ message: "Email sudah terdaftar" });

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hash },
  });

  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Login gagal" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Login gagal" });

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);

  res.json({ token });
};
