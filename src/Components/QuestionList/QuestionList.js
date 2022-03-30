import { Icon, Typography } from "@material-ui/core";
import React, { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Slider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import './QuestionList.css'

// function increaseQuestionIndex() {
//   setQuestionIndex(++1)
// }

export default function QuestionList() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [distance, setDistance] = useState(0);
  const questions = [
    {
      text: "How far do you want to travel?",
      component: (
        <React.Fragment>
          <Slider
            style={{ width: "85%" }}
            defaultValue={0}
            max={50}
            onChange={(e, val) => {
              setDistance(val);
            }}
          ></Slider>
          <Typography style={{ fontSize: 30 }}>
            {distance + " miles   "}
          </Typography>
        </React.Fragment>
      ),
    },
    {
      text: "What type of cuisine do you want eat?",
      component: (
        <React.Fragment>
          <Slider
            style={{ width: "85%" }}
            defaultValue={0}
            max={50}
            onChange={(e, val) => {
              setDistance(val);
            }}
          ></Slider>
          <Typography style={{ fontSize: 30 }}>
            {distance + " miles   "}
          </Typography>
        </React.Fragment>
      ),
    },
    {
      text: "How far do you ewsfsadafa to travel?",
      component: (
        <React.Fragment>
          <Slider
            style={{ width: "85%" }}
            defaultValue={0}
            max={50}
            onChange={(e, val) => {
              setDistance(val);
            }}
          ></Slider>
          <Typography style={{ fontSize: 30 }}>
            {distance + " miles   "}
          </Typography>
        </React.Fragment>
      ),
    },
  ];

  return (
    <QuestionCard>
      <Typography style={{ fontSize: 50, marginBottom: "8%" }}>
        Find Restaurant
      </Typography>
      <div style={{ marginBottom: "8%" }}>
        <Typography style={{ fontSize: 40 }}>
          {questions[questionIndex].text}
        </Typography>
        {questions[questionIndex].component}
      </div>

      {questionIndex < questions.length - 1 ? (
        <Button
          onClick={() => setQuestionIndex(questionIndex + 1)}
          style={{
            color: "white",
            backgroundColor: "#5AA1FF",
            borderRadius: 10,
            float: "right",
          }}
        >
          <ArrowRightAltIcon style={{ fontSize: 50 }}></ArrowRightAltIcon>
          {/* <ArrowRightAltIcon className = "back-button"></ArrowRightAltIcon> */}
        </Button>
      ) : null}

      {questionIndex !== 0 ? (
        <Button
          className =  'back-button'
          onClick={() => setQuestionIndex(questionIndex - 1)}
          style={{
            color: "white",
            backgroundColor: "#979DA4",
            borderRadius: 10,
            float: "left",
          }}
        >
          <ArrowRightAltIcon style={{ fontSize: 50 }}></ArrowRightAltIcon>
          {/* <ArrowRightAltIcon className = "back-button"></ArrowRightAltIcon> */}
        </Button>
      ) : null}
    </QuestionCard>
  );
}
