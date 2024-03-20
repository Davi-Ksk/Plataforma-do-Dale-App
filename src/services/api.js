import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-3-129-25-86.us-east-2.compute.amazonaws.com:8081/api"});