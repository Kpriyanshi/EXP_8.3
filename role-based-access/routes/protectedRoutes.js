const express = require("express");
const { verifyToken, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/user/profile", verifyToken, allowRoles("User", "Moderator", "Admin"), (req, res) => {
  res.json({ message: `Welcome ${req.user.role}, this is your profile.` });
});

router.get("/moderator/manage", verifyToken, allowRoles("Moderator", "Admin"), (req, res) => {
  res.json({ message: `Hello ${req.user.role}, manage user content here.` });
});

router.get("/admin/dashboard", verifyToken, allowRoles("Admin"), (req, res) => {
  res.json({ message: `Welcome Admin, you have full control.` });
});

module.exports = router;
