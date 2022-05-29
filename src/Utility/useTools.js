import axios from "axios";
import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    axios("https://assignment-12-tanim.herokuapp.com/tools").then((data) =>
      setTools(data.data)
    );
  }, []);
  return [tools, setTools];
};
export default useTools;
