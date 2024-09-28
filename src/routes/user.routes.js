import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, checkAuth } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)


//secured routes
router.route("/check-auth").get(verifyJWT, checkAuth)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/logout").post(verifyJWT, logoutUser)


export default router;