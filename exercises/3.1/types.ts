import { Request } from "express";

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

type NewMovie = Omit<Movie, "id">;

interface Comment {
  id: number;
  movieId: number;
  username: string;
  content: string;
}

type NewComment = Omit<Comment, "id">;

export type {
  AuthenticatedUser,
  User,
  PotentialUser,
  AuthenticatedRequest,
  JwtPayload,
  Movie,
  NewMovie,
  Comment,
  NewComment,
};
