import axios from "axios";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };
  return [isFacingUp, flipCard];
};

const useAxios = (base_url) => {
  const [respData, setRespData] = useState([]);

  const fetchNewData = async (formatter = (data) => data, restOfUrl = "") => {
    const resp = await axios.get(`${base_url}${restOfUrl}`);
    setRespData((initialData) => [...initialData, formatter(resp.data)]);
  };

  const clearResponses = () => setRespData([]);

  return [respData, fetchNewData, clearResponses];
};

export { useFlip, useAxios };
