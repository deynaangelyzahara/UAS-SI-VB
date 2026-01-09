const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * CREATE TASK (userId dari token)
 */
exports.createTask = async (req, res) => {
  const { title, description, deadline } = req.body;
  const userId = req.user.id;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        deadline: new Date(deadline),
        userId,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET ALL TASK (HANYA MILIK USER LOGIN)
 */
exports.getTasks = async (req, res) => {
  const userId = req.user.id;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: userId, // 🔒 FILTER USER
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * UPDATE TASK (CEK PEMILIK)
 */
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const task = await prisma.task.findFirst({
      where: {
        id: Number(id),
        userId: userId, // 🔒 WAJIB MILIK USER
      },
    });

    if (!task) {
      return res.status(403).json({ message: "Akses ditolak" });
    }

    const updated = await prisma.task.update({
      where: { id: Number(id) },
      data: req.body,
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * DELETE TASK (CEK PEMILIK)
 */
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const task = await prisma.task.findFirst({
      where: {
        id: Number(id),
        userId: userId, // 🔒 WAJIB MILIK USER
      },
    });

    if (!task) {
      return res.status(403).json({ message: "Akses ditolak" });
    }

    await prisma.task.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Task berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
