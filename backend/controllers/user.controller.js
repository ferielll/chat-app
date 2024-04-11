import User from "../models/user.model.js";

export const getUsersForSideBar = async (req,res) => {
    try {
      const loggedInUser = req.user._id;
      
      const filtredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password")

      res.status(200).json(filtredUsers)
    } catch (error) {
        console.log("Error in getUsersForSideBar: ",console.error);
        res.status(500).json({ error: "Internal server error"})
    }
}