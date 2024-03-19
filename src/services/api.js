import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-3-19-60-148.us-east-2.compute.amazonaws.com:8080/api"});