import { Request, Response } from "express";

interface User {
  email: string;
  password: string;
}

// Mock DB
const users: User[] = [];

// Singup
const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  // Check if email or password is missing
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if user email already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const newUser: User = { email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
}

// Signin
const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  // Check if user exists
  const existingUser = users.find(user => user.email === email && user.password === password);
  if (!existingUser) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Signin successful', user: existingUser });
}

// User list
const userList = async (req: Request, res: Response) => {
  res.status(200).json({ users });
}

export { signup, signin, userList };