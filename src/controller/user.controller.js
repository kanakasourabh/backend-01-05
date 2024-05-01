import { User } from "../model/user.model.js";

const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json(401, { success: false }, "All fields are required");
    }

    const user = await User.findOne({ email });
    if (user) {
      res.json(400, { success: false }, "User already registered");
    }

    const user1 = await User.create({
      email,
      password,
    });

    console.log(user1)

    res.status(200).json(
      {
        success: ok,
      },
      "User added Successfully"
    );
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(500).send("All fields are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(500).send("User not registered");
    }

    const comparePassword = await user.verifyPassword(password);

    if (!comparePassword) {
      res.status(500).send("Invalid password");
    }

    const token = await user.generateToken();

    res.status(200).json({
      sucess: ok,
      token: token,
    });
  } catch (error) {}
};

export { registerController, loginController };
