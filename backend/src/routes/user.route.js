import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  acceptFriendRequest,
  getFriendRequests,
  getMyfriends,
  getOutgoingFriendReqs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controller/user.controller.js";

const router = express.Router();

//apply auth middleware first to check user logged in or not then we can move ahead
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyfriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests",getFriendRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);
export default router;
