import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Modals } from "./Modal";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [oneData, SetoneData] = useState("");
  const [id, setId] = useState("");
  const [OPEN, setOPEN] = useState(false);

  const handleSingleData = async (id) => {
    setOPEN(true);
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res.data.title);
      SetoneData(res.data.title);
      setId(res.data.id);
    } catch (err) {
      console.log("error", err);
    }
  };

  const getData = async () => {
    try {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Data>
        {data.map((e) => (
          <div
            key={e.id}
            className="datas"
            onClick={() => {
              handleSingleData(e.id);
            }}
          >
            <h2>{e.title}</h2>
          </div>
        ))}
      </Data>

      <Modals oneData={oneData} id={id} OPEN={OPEN} setOPEN={setOPEN} />
    </>
  );
};

const Data = styled.div`
  width: 80%;
  height: fit-content;
  margin-left: 10%;
  border: 1px solid red;
  .datas {
    border-bottom: 1px solid red;
    cursor: pointer;
  }
`;
